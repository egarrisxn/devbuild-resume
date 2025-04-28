import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://devbuild-resume.vercel.app'),
  title: 'DevBuild Resume!',
  description: 'A web app that helps you build a resume in minutes.',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Resume, Builder, Next.js, TailwindCSS, Material-Tailwind, Typescript, React, Vercel, Ethan, Garrison, devbuild-resume, buildthatresume'
  ],
  creator: 'https://egxo.dev.',
  openGraph: {
    title: 'DevBuild Resume!',
    description: 'A web app that helps you build a resume in minutes.',
    url: 'https://devbuild-resume.vercel.app/',
    siteName: 'DevBuild Resume!',
    type: 'website',
    locale: 'en_US'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevBuild Resume!',
    description: 'A web app that helps you build a resume in minutes.',
    creator: '@eg__xo',
    site: '@eg__xo'
  },
  icons: {
    icon: {
      url: '/icon.png',
      sizes: '192x192',
      type: 'image/png'
    },
    apple: {
      url: '/apple-icon.png',
      sizes: '180x180',
      type: 'image/png'
    },
    other: {
      rel: 'icon',
      url: '/icon.svg',
      type: 'image/svg+xml'
    }
  }
};

// export const revalidate = 0;

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
