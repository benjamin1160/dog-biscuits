import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';

const FLAVORS = [
  {
    name: "Cheesy Beggin&apos; Paws",
    desc: "Cheesy dog cookies, baked fresh. Free local delivery in Estero &amp; SWFL.",
    image: '/cheesy-beggin-paws-bag.png',
    shopifyDivId: 'product-component-1751071570829',
    shopifyProductId: '9962631463193',
  },
  {
    name: 'Peanut Butter',
    desc: "Our Southwest Florida classic. Dogs love these! Delivered in Bonita Springs, Fort Myers, and more.",
    image: '/cheesy-beggin-paws-bag.png',
    shopifyDivId: 'product-component-1751071570830',
    shopifyProductId: '9962631463193',
  },
  {
    name: 'Pumpkin',
    desc: "Gentle pumpkin cookies—great for sensitive pups. Free delivery to Lehigh Acres, Cape Coral.",
    image: '/cheesy-beggin-paws-bag.png',
    shopifyDivId: 'product-component-1751071570831',
    shopifyProductId: '9962631463193',
  },
  {
    name: 'Bacon',
    desc: "Smoky and savory. Our most popular treat—shipped nationwide, or delivered in all local cities.",
    image: '/cheesy-beggin-paws-bag.png',
    shopifyDivId: 'product-component-1751071570832',
    shopifyProductId: '9962631463193',
  },
];

export default function Home() {
  return (
    <div style={{
      maxWidth: 420,
      margin: '0 auto',
      padding: '0 12px',
      fontFamily: 'system-ui, sans-serif',
      background: '#fff',
      minHeight: '100vh',
      paddingBottom: 100
    }}>
      <Head>
        <title>Fresh Dog Cookies | Free Delivery in SWFL</title>
        <meta
          name="description"
          content="Oven-baked dog cookies. 4 top flavors. Free delivery in Estero, Bonita Springs, Fort Myers, Lehigh Acres, Cape Coral. Ships nationwide."
        />
      </Head>

      <h1 style={{
        fontSize: 24,
        fontWeight: 800,
        textAlign: "center",
        margin: "36px 0 14px 0",
        letterSpacing: '-0.5px'
      }}>
        4 Distinct Flavors. Always Fresh.
      </h1>
      <p style={{
        color: "#533b19",
        textAlign: "center",
        fontSize: 16,
        margin: "0 0 18px 0",
        fontWeight: 500
      }}>
        Dogs love them. Yours will too.
      </p>

      {FLAVORS.map(flavor => (
        <div key={flavor.name} style={{
          background: "#f7f6f4",
          borderRadius: 18,
          boxShadow: "0 2px 8px #0001",
          margin: "0 0 22px 0",
          padding: "16px 12px",
          textAlign: 'center'
        }}>
          <Image
            src={flavor.image}
            alt={`${flavor.name} Bag`}
            width={140}
            height={210}
            style={{ borderRadius: 12, marginBottom: 10, objectFit: "cover" }}
          />
          <h2 style={{
            fontSize: 20,
            fontWeight: 700,
            margin: '6px 0'
          }}>
            {flavor.name}
          </h2>
          <p style={{
            color: "#655",
            fontSize: 15,
            margin: '0 0 14px 0'
          }}>
            {flavor.desc}
          </p>
          <div style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: 12 }}>
            <div id={flavor.shopifyDivId}></div>
          </div>
          <Script id={`shopify-buy-button-${flavor.shopifyDivId}`} strategy="afterInteractive">
            {`
              (function () {
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
                    ui.createComponent('product', {
                      id: '${flavor.shopifyProductId}',
                      node: document.getElementById('${flavor.shopifyDivId}'),
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
                      },
                    });
                  });
                }
              })();
            `}
          </Script>
        </div>
      ))}

      <div style={{
        background: "#f6f5f2",
        borderRadius: 14,
        margin: "30px 0 22px 0",
        padding: "16px 12px",
        textAlign: "center"
      }}>
        <p style={{
          fontWeight: 600,
          fontSize: 17,
          color: "#533b19",
          margin: "0 0 12px 0"
        }}>
          100% Happiness Guarantee
        </p>
        <p style={{ color: "#655", fontSize: 15, margin: "0 0 12px 0" }}>
          If your dog doesn&apos;t love them, we&apos;ll refund your order. No questions asked.
        </p>
        <div style={{
          width: 90,
          height: 90,
          background: "#eee",
          borderRadius: 12,
          margin: "0 auto 10px auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#bbb",
          fontWeight: 700,
          fontSize: 14
        }}>
          Dog photo/video here
        </div>
        <p style={{ fontStyle: "italic", color: "#967746", fontSize: 14, margin: "8px 0" }}>
          &ldquo;Rosie can&apos;t get enough of these! Delivery to Cape Coral was super fast.&rdquo;<br />&mdash; Amanda, Cape Coral
        </p>
      </div>

      <div style={{
        background: "#f8f7f3",
        borderRadius: 14,
        margin: "0 0 30px 0",
        padding: "20px 14px 10px 14px",
        boxShadow: "0 2px 8px #0001"
      }}>
        <h3 style={{
          fontSize: 18,
          fontWeight: 700,
          color: "#533b19",
          margin: "0 0 12px 0",
          textAlign: "center"
        }}>Frequently Asked Questions</h3>
        <div style={{ marginBottom: 13 }}>
          <p style={{ fontWeight: 700, margin: "0 0 4px 0" }}>Are your dog cookies grain free?</p>
          <p style={{ margin: 0 }}>No. Our cookies contain grains for a classic, wholesome texture and taste dogs love.</p>
        </div>
        <div style={{ marginBottom: 13 }}>
          <p style={{ fontWeight: 700, margin: "0 0 4px 0" }}>What does certified kitchen mean?</p>
          <p style={{ margin: 0 }}>We operate in a state certified kitchen and use only 100% human-grade ingredients, ensuring quality and safety for your pet.</p>
        </div>
        <div>
          <p style={{ fontWeight: 700, margin: "0 0 4px 0" }}>What&apos;s your refund policy?</p>
          <p style={{ margin: 0 }}>If your dog doesn&apos;t like our cookies, we provide a 100% money back guarantee&mdash;just tell us and your money will be sent back to your bank.</p>
        </div>
      </div>

      <div style={{ height: 65 }}></div>

      <div style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        background: "#ffb347",
        color: "#533b19",
        fontWeight: 700,
        textAlign: "center",
        fontSize: 16,
        padding: "10px 0",
        boxShadow: "0 -2px 8px #0001",
        zIndex: 10,
        letterSpacing: '-0.2px'
      }}>
        🚚 Free Local Delivery: Estero, Bonita Springs, Fort Myers, Lehigh Acres, Cape Coral. Nationwide Shipping!
      </div>
    </div>
  );
}
