import Script from 'next/script';

export default function ShopifyBuyButton({ productId, divId }) {
  return (
    <Script id={`shopify-buy-button-${divId}`} strategy="afterInteractive">
      {`(function(){
          var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
          if (window.ShopifyBuy) {
            if (window.ShopifyBuy.UI) {
              ShopifyBuyInit();
            } else {
              loadScript();
            }
          } else {
            loadScript();
          }
          function loadScript() {
            var script = document.createElement('script');
            script.async = true;
            script.src = scriptURL;
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
            script.onload = ShopifyBuyInit;
          }
          function ShopifyBuyInit() {
            var client = ShopifyBuy.buildClient({
              domain: 'a992c6.myshopify.com',
              storefrontAccessToken: '81dbad57acb16d54a41c11adc20f001d',
            });
            ShopifyBuy.UI.onReady(client).then(function (ui) {
              var discount = null;
              try {
                discount = window.localStorage.getItem('discountCode');
              } catch (e) {}
              ui.createComponent('product', {
                id: '${productId}',
                node: document.getElementById('${divId}'),
                moneyFormat: '%24%7B%7Bamount%7D%7D',
                options: {
                  "product": {
                    "styles": {
                      "product": {
                        "@media (min-width: 601px)": {
                          "max-width": "calc(25% - 20px)",
                          "margin-left": "20px",
                          "margin-bottom": "50px"
                        }
                      }
                    },
                    "contents": {
                      "img": false,
                      "title": false,
                      "price": false
                    },
                    "text": {
                      "button": "Add to cart"
                    }
                  },
                  "modalProduct": {
                    "contents": {
                      "img": false,
                      "imgWithCarousel": true,
                      "button": false,
                      "buttonWithQuantity": true
                    },
                    "styles": {
                      "product": {
                        "@media (min-width: 601px)": {
                          "max-width": "100%",
                          "margin-left": "0px",
                          "margin-bottom": "0px"
                        }
                      }
                    },
                    "text": {
                      "button": "Add to cart"
                    }
                  },
                  "cart": {
                    "text": {
                      "total": "Subtotal",
                      "button": "Checkout"
                    },
                    "popup": false
                  },
                  "toggle": {}
                }
              });
              if (discount && ui.components.cart && ui.components.cart[0]) {
                var cartComp = ui.components.cart[0];
                var url = cartComp.model.checkoutUrl;
                url += (url.indexOf('?') === -1 ? '?' : '&') + 'discount=' + discount;
                cartComp.model.checkoutUrl = url;
              }
            });
          }
        })();`}
    </Script>
  );
}
