import "./globals.css";

export const metadata = {
  title: "Khubaib Ahmad | Web Developer Portfolio",
  description: "Showcasing the projects, skills, and expertise of Khubaib Ahmad, a web developer specializing in Next.js, Node.js, and modern web technologies.",
  openGraph: {
    title: "Khubaib Ahmad | Web Developer Portfolio",
    description: "Explore the professional portfolio of Khubaib Ahmad, featuring innovative projects and technical expertise.",
    url: "https://your-portfolio-url.com",
    images: ["https://your-portfolio-url.com/images/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Khubaib Ahmad | Web Developer Portfolio",
    description: "Learn more about Khubaib Ahmad and his professional journey.",
    images: ["https://your-portfolio-url.com/images/twitter-image.jpg"],
  },
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
