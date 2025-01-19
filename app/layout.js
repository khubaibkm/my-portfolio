import "./globals.css";

export const metadata = {
  title: "khubaib.live",
  description: "Portfolio of Khubaib"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Remix Icon */}
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@3.4.0/fonts/remixicon.css"
          rel="stylesheet"
        />
        {/* Favicon */}
        <link
          rel="shortcut icon"
          href="/images/favicon.png"
          type="image/x-icon"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
