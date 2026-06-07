import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Archivo } from "next/font/google";
import { Open_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'Kathleen Reyes | High-Ticket Remote Sales Closer',
  description: 'Kathleen Reyes: A high-ticket remote sales closer leveraging 10 years of B2B sales experience and She Sales Academy training to generate over $5M in sales for female business coaches. Book a strategy call today.',
  keywords: ["remote sales closer, high-ticket sales, sales professional, closing deals, sales expert, remote selling, sales portfolio"],
  openGraph: {
    "title": "Your Name | High-Ticket Remote Sales Closer",
    "description": "Accelerate your business revenue with a top-tier high-ticket remote sales closer. Specializing in authentic, high-converting sales conversations.",
    "url": "https://yourwebsite.com",
    "siteName": "Your Name Sales",
    "images": [
      {
        "url": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EpOjPEO4eL38LZ8Wh985rob2ul/uploaded-1780872666144-cwmkftxh.jpg",
        "alt": "Bryn Smith, High Ticket Closer"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Your Name | High-Ticket Remote Sales Closer",
    "description": "Accelerate your business revenue with a top-tier high-ticket remote sales closer. Specializing in authentic, high-converting sales conversations.",
    "images": [
      "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EpOjPEO4eL38LZ8Wh985rob2ul/uploaded-1780872666144-cwmkftxh.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};


const openSans = Open_Sans({
  variable: "--font-open-sans",  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${openSans.variable} antialiased`}>
          
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
