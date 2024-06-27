import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "THARUN",
  description: "Portfolio of Tharun",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="bg-background text-primary scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin scrollbar-thumb-secondary scrollbar-track-background overflow-y-scroll"
    >
      <body className={inter.className}>{children}</body>
    </html>
  );
}
