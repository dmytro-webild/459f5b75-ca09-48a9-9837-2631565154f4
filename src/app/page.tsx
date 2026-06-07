"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';

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
          name: "Services",          id: "#services"},
        {
          name: "Results",          id: "#results"},
        {
          name: "Contact",          id: "#contact"},
      ]}
      brandName="Kathleen Reyes"
    />
  </div>

  <div id="home" data-section="home">
      <HeroBillboardCarousel
      background={{
        variant: "plain"}}
      title="KATHLEEN REYES"
      description="Leveraging 10 years of B2B sales experience to generate over $5M in sales, I help female business coaches turn qualified leads into paying clients through authentic, high-converting sales conversations."
      tag="REMOTE HIGH TICKET CLOSER"
      buttons={[
        {
          text: "Book a Strategy Call",          href: "#contact"},
      ]}
      mediaItems={[
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EpOjPEO4eL38LZ8Wh985rob2ul/uploaded-1780873848508-6o3b4vp3.jpg",          imageAlt: "Kathleen Reyes professional portrait"}
      ]}
    />
  </div>

  <div id="loom-video" data-section="loom-video">
      <HeroBillboardCarousel
      background={{
        variant: "plain"}}
      title="I Close a $5K DEAL in 10 Mins"
      description="Watch my proven closing strategy in action."
      tag="WATCH ME CLOSE A DEAL"
      buttons={[
        {
          text: "Watch My Close",          href: "https://www.loom.com/share/your-loom-video-id"},
      ]}
      mediaItems={[
        {
          videoSrc: "https://www.loom.com/share/your-loom-video-id",          imageSrc: "http://img.b2bpic.net/free-photo/camera-capture-snap-shot-graphic_53876-121027.jpg",          imageAlt: "Loom video thumbnail showing sales deal",          videoAriaLabel: "Loom video demonstrating a sales close"},
        {
          videoSrc: "https://www.loom.com/share/another-loom-video-id",          imageSrc: "http://img.b2bpic.net/free-photo/conference-call-global-communication-connection-technology-concept_53876-120414.jpg",          imageAlt: "Strategy session recording thumbnail",          videoAriaLabel: "Video demonstrating a strategy session"},
        {
          videoSrc: "https://www.loom.com/share/yet-another-loom-video-id",          imageSrc: "http://img.b2bpic.net/free-photo/smiley-female-english-teacher-doing-online-lessons-her-smartphone_23-2149019758.jpg",          imageAlt: "Client success story video thumbnail",          videoAriaLabel: "Video showcasing a client success story"},
        {
          videoSrc: "https://www.loom.com/share/final-loom-video-id",          imageSrc: "http://img.b2bpic.net/free-photo/coworking-space-office-corporate-business-concept_53876-120913.jpg",          imageAlt: "Sales process breakdown video thumbnail",          videoAriaLabel: "Video breaking down sales process"},
        {
          videoSrc: "https://www.loom.com/share/last-loom-video-id",          imageSrc: "http://img.b2bpic.net/free-photo/female-teacher-with-protective-face-mask-recording-lecture-eleaning-virus-pandemic_637285-9412.jpg",          imageAlt: "Objection handling masterclass thumbnail",          videoAriaLabel: "Video on handling sales objections"},
      ]}
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
      imageSrc="http://img.b2bpic.net/free-photo/woman-enjoying-sudoku-game-paper-by-herself_23-2149073673.jpg"
      imageAlt="Woman teaching outdoors"
      mediaAnimation="slide-up"
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
          id: "1",          value: "$9.14M",          description: "Revenue Generated"},
        {
          id: "2",          value: "42%",          description: "Close Rate"},
        {
          id: "3",          value: "6",          description: "Niches Sold"},
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="results" data-section="results">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          name: "Colleen James",          role: "Founder",          company: "Flipping Destiny",          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EpOjPEO4eL38LZ8Wh985rob2ul/uploaded-1780874056403-psrh4jqm.jpg"},
        {
          id: "2",          name: "Marie Ellis",          role: "CEO",          company: "Unleashed Coach",          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EpOjPEO4eL38LZ8Wh985rob2ul/uploaded-1780874056403-f95a6qti.png"},
        {
          id: "3",          name: "Sarah Johnson",          role: "Business Coach",          company: "Elevate Success",          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EpOjPEO4eL38LZ8Wh985rob2ul/uploaded-1780874056403-n1v84v61.png"},
        {
          id: "4",          name: "Michael Chen",          role: "Program Director",          company: "Innovate Academy",          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EpOjPEO4eL38LZ8Wh985rob2ul/uploaded-1780874056403-jrxqiej5.png"},
        {
          id: "5",          name: "Emily Rodriguez",          role: "Marketing Consultant",          company: "Growth Dynamics",          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EpOjPEO4eL38LZ8Wh985rob2ul/uploaded-1780874056403-psrh4jqm.jpg"},
      ]}
      kpiItems={[
        {
          value: "🔥",          label: "Your offer creates meaningful transformation"},
        {
          value: "🌍",          label: "You're looking for a closer who genuinely believes in your mission"},
        {
          value: "📈",          label: "You want to scale your impact and revenue"},
      ]}
      title="Client Success Stories"
      description="Hear directly from business owners who have experienced transformative growth and revenue boosts through my closing expertise."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={true}
      title="Let's Connect & Grow Together"
      description="Ready to elevate your sales? Book a complimentary strategy call to discuss your goals and how I can help you achieve them. Schedule your call here: calendaly.com/katsells. You can also reach me directly at kathleen@reyespartnership.com."
      inputs={[
        {
          name: "name",          type: "text",          placeholder: "Your Name",          required: true,
        },
        {
          name: "email",          type: "email",          placeholder: "Your Email",          required: true,
        },
      ]}
      textarea={{
        name: "message",        placeholder: "Tell me about your business and goals",        rows: 4,
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
      logoText="She Sells"
      columns={[
        {
          title: "Navigation",          items: [
            {
              label: "Home",              href: "#home"},
            {
              label: "About",              href: "#about"},
            {
              label: "Services",              href: "#services"},
            {
              label: "Results",              href: "#results"},
            {
              label: "Contact",              href: "#contact"},
          ],
        },
        {
          title: "Resources",          items: [
            {
              label: "Blog",              href: "#"},
            {
              label: "Case Studies",              href: "#"},
          ],
        },
        {
          title: "Legal",          items: [
            {
              label: "Privacy Policy",              href: "#"},
            {
              label: "Terms of Service",              href: "#"},
          ],
        },
      ]}
      copyrightText="© 2024 Kathleen Reyes. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}