import "./globals.css";

export const metadata = {
  title: "Khubaib Ahmad | Web Developer Portfolio",
  description: "Showcasing the projects, skills, and expertise of Khubaib Ahmad, a web developer specializing in Next.js, Node.js, and modern web technologies.",
  openGraph: {
    type: "website",
    title: "Khubaib Ahmad | Web Developer",
    description: "Explore the Khubaib Ahmad's professional journey through his Portfolio.",
    url: "https://khubaib-live.vercel.app",
    images: ["https://media.licdn.com/dms/image/v2/D5603AQH8hjCLTYIfdA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1722962360183?e=1743033600&v=beta&t=7wE7xuzZbunBYTJ0yuUcX-iIYCprp2zj9m58sGynLkY"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Khubaib Ahmad | Web Developer Portfolio",
    description: "Learn more about Khubaib Ahmad and his professional journey.",
    images: ["https://media.licdn.com/dms/image/v2/D5603AQH8hjCLTYIfdA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1722962360183?e=1743033600&v=beta&t=7wE7xuzZbunBYTJ0yuUcX-iIYCprp2zj9m58sGynLkY"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://khubaib-live.vercel.app',
    languages: {
      'en-US': 'https://khubaib-live.vercel.app',
      'de-DE': 'https://khubaib-live.vercel.app',
    },
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Khubaib Ahmad",
    url: "https://khubaib-live.vercel.app",
    sameAs: [
      "https://github.com/khubaibkm",
      "https://www.linkedin.com/in/khubaibahmad122",
    ],
    jobTitle: "Software Developer",
    worksFor: {
      "@type": "Organization",
      name: "AlphaSaaS",
    },
  };
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
      <body>
      <section>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </section>
        {children}
      </body>
    </html>
  );
}
