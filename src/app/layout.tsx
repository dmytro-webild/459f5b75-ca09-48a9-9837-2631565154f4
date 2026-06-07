import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Archivo } from "next/font/google";



export const metadata: Metadata = {
  title: 'Your Name | High-Ticket Remote Sales Closer',
  description: 'Accelerate your business revenue with a top-tier high-ticket remote sales closer. Specializing in authentic, high-converting sales conversations.',
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

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${archivo.variable} antialiased`}>
          <Tag />
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
