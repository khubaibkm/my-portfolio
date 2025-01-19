import "./globals.css";

export const metadata = {
  title: "Khubaib Ahmad | Web Developer Portfolio",
  description: "Showcasing the projects, skills, and expertise of Khubaib Ahmad, a web developer specializing in Next.js, Node.js, and modern web technologies.",
  openGraph: {
    type: "website",
    title: "Khubaib Ahmad | Web Developer Portfolio",
    description: "Explore the professional portfolio of Khubaib Ahmad, featuring innovative projects and technical expertise.",
    url: "https://khubaib-live.vercel.app",
    images: ["https://media.licdn.com/dms/image/v2/D5616AQFIrUaxv1xD6g/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1737291999380?e=1743033600&v=beta&t=2Vy02G6XuADNz3FdPkZfAEcmbR6SW0uk_sn-kDpaxZA"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Khubaib Ahmad | Web Developer Portfolio",
    description: "Learn more about Khubaib Ahmad and his professional journey.",
    images: ["https://media.licdn.com/dms/image/v2/D5616AQFIrUaxv1xD6g/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1737291999380?e=1743033600&v=beta&t=2Vy02G6XuADNz3FdPkZfAEcmbR6SW0uk_sn-kDpaxZA"],
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
