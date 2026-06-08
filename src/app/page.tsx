"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import SplitAbout from '@/components/sections/about/SplitAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="mediumLarge"
        sizing="mediumSizeLargeTitles"
        background="floatingGradient"
        cardStyle="gradient-bordered"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="solid"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",          id: "#home"},
        {
          name: "About",          id: "#about"},
        {
          name: "About Me",          id: "#about-me"},
        {
          name: "Services",          id: "#services"},
        {
          name: "Loom Videos",          id: "#loom-video"},
        {
          name: "Contact",          id: "#contact"},
      ]}
      brandName="Kathleen Reyes"
    />
  </div>

  <div id="home" data-section="home">
      <HeroSplitKpi
      background={{
        variant: "plain"}}
      title="KATHLEEN REYES"
      description="Leveraging 10 years of B2B sales experience to generate over $5M in sales, I help coaches turn qualified leads into paying clients through authentic, high-converting sales conversations."
      tag="REMOTE HIGH TICKET CLOSER"
      buttons={[
        {
          text: "calendaly.com/katsells",          href: "https://calendaly.com/katsells"},
      ]}
      kpis={[
        {
          value: "$5M+",          label: "Sales Generated"},
        {
          value: "10+",          label: "Years Experience"},
        {
          value: "80%+",          label: "Success Rate"},
      ]}
      enableKpiAnimation={true}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EpOjPEO4eL38LZ8Wh985rob2ul/uploaded-1780874675371-v2v50uel.png"
      imageAlt="Kathleen Reyes coaching a client"
      imagePosition="right"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="default"
      useInvertedBackground={false}
      imagePosition="right"
      title="Training & Experience"
      description="With 10 years experience doing freelance B2B sales that have generated over 5 million in sales, I am dedicated to continuous growth. Trained in the She Sales Academy, my approach focuses on authentic connections and strategic persuasion, ensuring not just sales, but lasting relationships and consistent revenue."
      bulletPoints={[
        {
          title: "10 Years Experience",          description: "Over a decade of freelance B2B sales, generating more than $5 million in revenue."},
        {
          title: "Continuous Learning",          description: "Trained in the She Sales Academy with a continuous learning mindset to be a top sales agent."},
        {
          title: "Sales Expertise",          description: "Proficient in discovery calls, objection handling, and high-converting closing techniques."},
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EpOjPEO4eL38LZ8Wh985rob2ul/uploaded-1780874806365-8j8v2clo.png"
      imageAlt="Woman teaching outdoors"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="about-me" data-section="about-me">
      <SplitAbout
      textboxLayout="default"
      useInvertedBackground={true}
      imagePosition="right"
      title="About Me"
      description="I'm a highly coachable, results-driven sales professional who sets ambitious goals and consistently pushes myself to exceed them. I've always been someone who strives to be a top performer, not because I have to, but because I genuinely love growth, competition, and excellence. When I join a team, I don't operate like an employee—I treat the business as if it's my own. I take ownership of the follow-up, the client experience, the conversions, and the details that drive revenue. My success as a freelance sales closer has been built largely through long-term client relationships and referrals, which I believe speaks volumes about the trust and results I provide. I pride myself on my work ethic, consistency, and commitment to continuous improvement. No one will care more, prepare more, or work harder on your behalf. I'm incredibly driven, self-motivated, and always looking for ways to create more value. To demonstrate my confidence and reduce risk for the businesses I partner with, I often offer a one-month trial at half my standard commission. It allows me to prove my value through performance while giving clients the opportunity to experience firsthand the level of ownership, commitment, and results I bring to the table."
      bulletPoints={[
        {
          title: "Results-Driven",          description: "Consistently exceeds ambitious goals and strives for top performance."
        },
        {
          title: "High Ownership",          description: "Treats partner businesses as her own, focusing on client experience and conversions."
        },
        {
          title: "Client-Centric",          description: "Builds long-term relationships and generates success through referrals."
        }
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EpOjPEO4eL38LZ8Wh985rob2ul/uploaded-1780875154925-w091cu4a.jpg"
      imageAlt="Kathleen Reyes professional photo"
      mediaAnimation="slide-up"
      imageClassName="object-contain"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardSix
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          title: "Seamless Integration",          description: "I adapt quickly to your existing sales funnels and CRM systems, minimizing downtime and maximizing efficiency from day one.",          imageSrc: "http://img.b2bpic.net/free-photo/woman-stands-reviews-documents_482257-120351.jpg",          imageAlt: "Hands typing on laptop"},
        {
          title: "Authentic Connections",          description: "Building rapport is key. I connect with your prospects on a human level, understanding their needs before offering tailored solutions.",          imageSrc: "http://img.b2bpic.net/free-photo/office-workers-working-together-as-team_23-2149310899.jpg",          imageAlt: "Clients discussing a deal"},
        {
          title: "Proven Closing Strategies",          description: "Leveraging advanced closing techniques, I navigate objections gracefully and guide prospects to a confident 'yes,' consistently exceeding targets.",          imageSrc: "http://img.b2bpic.net/free-photo/business-report-graphs-charts-business-concept_1150-2253.jpg",          imageAlt: "Growth chart"},
      ]}
      title="What I Bring to the Table"
      description="My services are designed to integrate seamlessly with your sales process, elevating your closing rates and ensuring client satisfaction."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardFourteen
      useInvertedBackground={true}
      title="My Track Record"
      tag="RESULTS THAT SPEAK VOLUMES"
      metrics={[
        {
          id: "1",          value: "5M+",          description: "Generated Revenue"},
        {
          id: "2",          value: "80%+",          description: "Close Rate"},
        {
          id: "3",          value: "7+",          description: "Niches"},
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="loom-video" data-section="loom-video">
      <HeroBillboardCarousel
      background={{
        variant: "plain"}}
      title="Watch My Sales Calls in Action"
      description="See how I generate high-ticket sales through authentic and strategic conversations."
      tag="LIVE SALES CALLS"
      buttons={[
        {
          text: "Watch Video 1",          href: "https://www.loom.com/share/0a42b1f8faa24a569a0ea355a0ace9bd"},
        {
          text: "Watch Video 2",          href: "https://www.loom.com/share/1d02498590e84a5daf48796cd6a4deb7"},
      ]}
      mediaItems={[
        {
          videoSrc: "https://www.loom.com/share/0a42b1f8faa24a569a0ea355a0ace9bd",          imageSrc: "http://img.b2bpic.net/free-photo/camera-capture-snap-shot-graphic_53876-121027.jpg",          imageAlt: "Loom video of a sales call",          videoAriaLabel: "Loom video demonstrating a sales call"
        },
        {
          videoSrc: "https://www.loom.com/share/1d02498590e84a5daf48796cd6a4deb7",          imageSrc: "http://img.b2bpic.net/free-photo/conference-call-global-communication-connection-technology-concept_53876-120414.jpg",          imageAlt: "Loom video of another sales call",          videoAriaLabel: "Loom video demonstrating another sales call"
        }
      ]}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={true}
      title="Let's Connect & Grow Together"
      description="Ready to elevate your sales? Book a complimentary strategy call to discuss your goals and how I can help you achieve them. Schedule your call here: calendaly.com/katsells. You can also reach me directly at kathleen@reyespartnership.com."
      inputs={[
        {
          name: "name",          type: "text",          placeholder: "Your Name",          required: true
        },
        {
          name: "email",          type: "email",          placeholder: "Your Email",          required: true
        }
      ]}
      textarea={{
        name: "message",        placeholder: "Tell me about your business and goals",        rows: 4
      }}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EpOjPEO4eL38LZ8Wh985rob2ul/uploaded-1780874056403-lwadgd2z.jpg"
      imageAlt="Kathleen Reyes in a professional setting for scheduling appointments"
      mediaAnimation="opacity"
      mediaPosition="right"
      buttonText="Book a Call"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="Kat Sells"
      columns={[
        {
          title: "Navigation",          items: [
            {
              label: "Home",              href: "#home"},
            {
              label: "About",              href: "#about"},
            {
            "label": "About Me",            "href": "#about-me"},
            {
              label: "Services",              href: "#services"},
            {
              label: "Loom Videos",              href: "#loom-video"},
            {
              label: "Contact",              href: "#contact"},
          ]
        },
        {
          title: "Resources",          items: [
            {
              label: "Blog",              href: "#"},
            {
              label: "Case Studies",              href: "#"},
          ]
        },
        {
          title: "Legal",          items: [
            {
              label: "Privacy Policy",              href: "#"},
            {
              label: "Terms of Service",              href: "#"},
          ]
        }
      ]}
      copyrightText="© 2024 Kathleen Reyes. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
