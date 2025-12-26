
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
export const metadata = {
  title: {
    template: "%s | meki nobuyoshi PoretForio",
    default: "meki nobuyoshi PoretForio"
  },
  description: "目木伸宜のポートフォリオサイトです",
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
        <body>
           <div className="movie_blk">
            <video src="top-video.mp4" autoPlay muted loop playsInline></video>
          </div>
          <Header />
          <main>

           {children}

          </main>
          <Footer />
        </body>
    </html>
  );
}
