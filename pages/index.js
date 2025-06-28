import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';

const FLAVORS = [
  {
    name: "Cheesy Beggin&apos; Paws",
    name: "Cheezy Cookies",
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
@@ -37,68 +37,73 @@ export default function Home() {
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
        We Guarantee Your Dog Will Beg for More—Or Your Money Back!
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
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 16,
        marginBottom: 22,
      }}>
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
@@ -168,51 +173,52 @@ export default function Home() {
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
        ))}
      </div>

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
