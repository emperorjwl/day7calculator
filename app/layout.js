import "./globals.css";

export const metadata = {
  title: "Jewel's Calculator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
