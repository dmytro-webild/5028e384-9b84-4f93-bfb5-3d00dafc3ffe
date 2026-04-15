"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardTwentyOne from '@/components/sections/feature/FeatureCardTwentyOne';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="small"
        sizing="largeSmallSizeMediumTitles"
        background="noise"
        cardStyle="gradient-mesh"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="layered"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "About",          id: "about"},
        {
          name: "Features",          id: "features"},
        {
          name: "Pricing",          id: "pricing"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="CogniSphere AI"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitTestimonial
      useInvertedBackground={false}
      background={{
        variant: "rotated-rays-static"}}
      title="Unleash the Potential of AI"
      description="CogniSphere AI integrates cutting-edge machine learning into your workflow, automating complexity and driving innovation at scale."
      buttons={[
        {
          text: "Get Started",          href: "#contact"
        }
      ]}
      testimonials={[
        {
          name: "Elena Vance",          handle: "@elena_v",          testimonial: "Transformed our operations in record time.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/cheerful-senior-businessman-crossed-arms-gesture_53876-105185.jpg"},
        {
          name: "Marcus Thorne",          handle: "@m_thorne",          testimonial: "Unparalleled precision and speed.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-young-professional-posing-office_1262-21170.jpg"},
        {
          name: "Sarah Chen",          handle: "@schen_tech",          testimonial: "The best AI integration tool we've used.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-confident-man_176474-85960.jpg"},
        {
          name: "David Miller",          handle: "@dave_m",          testimonial: "Changed our development pipeline forever.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-young-businessman-suit-looking-camera-meeting_1163-4654.jpg"},
        {
          name: "Jessica Lee",          handle: "@jess_lee",          testimonial: "Incredible insights, immediate results.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/concerned-middle-aged-man-wearing-white-t-shirt-with-tie-crossing-hands-isolated-orange-wall_141793-83158.jpg"},
      ]}
      tag="Next-Gen Intelligence"
      imageSrc="http://img.b2bpic.net/free-photo/empty-dark-room-modern-futuristic-sci-fi-background-3d-illustration_35913-2389.jpg"
      mediaAnimation="blur-reveal"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/middle-age-man-with-grey-hair-dark-color-shirt-looking-camera-happy-positive-pointing-with-index-fingers-camera-standing-brown-background_141793-133634.jpg",          alt: "Portrait of leader 1"},
        {
          src: "http://img.b2bpic.net/free-photo/man-black-suit-having-his-arms-crossed_23-2148401474.jpg",          alt: "Portrait of leader 2"},
        {
          src: "http://img.b2bpic.net/free-photo/happy-bearded-man-brown-suit-wearing-glasses-looking-smiling-cheerfully_141793-111775.jpg",          alt: "Portrait of leader 3"},
        {
          src: "http://img.b2bpic.net/free-photo/portrait-young-confident-man_176474-85922.jpg",          alt: "Portrait of leader 4"},
        {
          src: "http://img.b2bpic.net/free-photo/black-businessman-happy-expression_1194-2623.jpg",          alt: "Portrait of leader 5"},
      ]}
      marqueeItems={[
        {
          type: "text",          text: "Scalability"},
        {
          type: "text",          text: "Precision"},
        {
          type: "text",          text: "Innovation"},
        {
          type: "text",          text: "Efficiency"},
        {
          type: "text",          text: "Intelligence"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={true}
      title="Data-Driven Innovation"
      description="We build scalable intelligent systems designed to bridge the gap between complex data and actionable strategy, empowering teams to move faster than ever."
      bulletPoints={[
        {
          title: "Scalability",          description: "Seamless infrastructure to handle enterprise workloads."},
        {
          title: "Precision",          description: "High-accuracy models tailored to your niche."},
        {
          title: "Transparency",          description: "Explainable insights you can rely on."},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/businessman-studying-infographics-performance-metrics_482257-122632.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyOne
      useInvertedBackground={false}
      title="Core AI Capabilities"
      description="Experience superior processing power through our proprietary algorithmic framework, designed for seamless automation."
      accordionItems={[
        {
          id: "f1",          title: "Automated Insights",          content: "Instant extraction of critical data points from raw datasets."},
        {
          id: "f2",          title: "Predictive Analytics",          content: "Anticipate market shifts with real-time model analysis."},
        {
          id: "f3",          title: "Workflow Integration",          content: "Sync seamlessly with your existing engineering stack."},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/robot-hand-showing-background-3d-ai-technology-side-view_53876-129792.jpg"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardFourteen
      useInvertedBackground={true}
      title="Proven Impact"
      tag="Performance Data"
      metrics={[
        {
          id: "m1",          value: "99.9%",          description: "Uptime Reliability"},
        {
          id: "m2",          value: "45%",          description: "Average Process Speedup"},
        {
          id: "m3",          value: "120+",          description: "Enterprise Deployments"},
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={false}
      testimonial="CogniSphere has revolutionized our data strategy. The integration was smooth and the performance gains were immediate. Highly recommended."
      rating={5}
      author="Elena Vance, CEO at FutureTech"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/portrait-bald-senior-dressed-stylish-suit-posing-against-dark-background_613910-17578.jpg",          alt: "User 1"},
        {
          src: "http://img.b2bpic.net/free-photo/man-black-suit-posing-studio_23-2148401473.jpg",          alt: "User 2"},
        {
          src: "http://img.b2bpic.net/free-photo/handsome-businessman-glasses-looking-satisfied-smiling-holding-hands-waist-standing-w_1258-113634.jpg",          alt: "User 3"},
        {
          src: "http://img.b2bpic.net/free-photo/studio-portrait-successful-senior-businessman_1262-2162.jpg",          alt: "User 4"},
        {
          src: "http://img.b2bpic.net/free-photo/smiling-african-american-man-posing-library_74855-1619.jpg",          alt: "User 5"},
      ]}
      ratingAnimation="blur-reveal"
      avatarsAnimation="slide-up"
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "Alpha Lab",        "Nexus Corp",        "Quantum Soft",        "DataFlow Inc",        "Nova Systems",        "Apex Tech",        "Vertex Global"]}
      title="Trusted by Leaders"
      description="Collaborating with industry pioneers to shape the future of machine learning."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",          title: "How is my data secured?",          content: "We employ enterprise-grade end-to-end encryption for all data handling."},
        {
          id: "q2",          title: "Can I integrate custom models?",          content: "Yes, our API fully supports deployment of custom ML models."},
        {
          id: "q3",          title: "Is there a free trial?",          content: "We offer a 14-day full access trial for enterprise evaluations."},
      ]}
      title="Questions Answered"
      description="Get the details on how our AI can accelerate your business objectives."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={true}
      background={{
        variant: "gradient-bars"}}
      tag="Join Us"
      title="Build Tomorrow, Today"
      description="Ready to scale your AI operations? Get in touch with our team for a demo."
      imageSrc="http://img.b2bpic.net/free-photo/ai-robot-frame-technology-abstract-futuristic-tech-design-with-blank-space_53876-129790.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="CogniSphere AI"
      leftLink={{
        text: "Privacy Policy",        href: "#"}}
      rightLink={{
        text: "Terms of Service",        href: "#"}}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}