import { Noto_Sans_JP, Roboto } from 'next/font/google';
import { GoogleTagManager } from '@next/third-parties/google'
import Script from 'next/script'
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const noto = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto',
  display: 'swap',
});

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
});

export const metadata = {
  title: {
    template: "%s | meki nobuyoshi PoretForio",
    default: "meki nobuyoshi PoretForio"
  },
  description: "目木伸宜のポートフォリオサイトです",
}



export default function RootLayout({ children }) {
  return (
    <html lang="ja" className={`${noto.variable} ${roboto.variable}`}>
        <body>
          <GoogleTagManager gtmId="GTM-N4BCSHR8" />
          {/* クライアントIDをGA4に送るためのスクリプト */}
          <Script id="ga-client-id" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}

                // GA4が準備できるのを待ってから実行する
                function sendClientId() {
                  if (typeof gtag === 'function') {
                    gtag('get', 'G-TJJR8JCMND', 'client_id', (clientId) => {
                      if (clientId) {
                        console.log('✅ ClientID取得成功:', clientId);
                        gtag('config', 'G-TJJR8JCMND', {
                          'my_client_id': clientId,
                          'debug_mode': true
                        });
                      } else {
                        // 取れなかったら0.5秒後に再トライ
                        setTimeout(sendClientId, 500);
                      }
                    });
                  }
                }

                // 実行開始
                sendClientId();
              `}
            </Script>
           <div className="movie_blk">
            <video src="/top-video.mp4" autoPlay muted loop playsInline></video>
          </div>
          <Header />
          <main>

           {children}

          </main>
          <Footer />
          {/* <GoogleAnalytics gaId="G-TJJR8JCMND" /> */}
        </body>
    </html>
  );
}
