import { useEffect, useState } from "react";
import Header from "../components/header";
import HeroSection from "../components/hero-section";
import ParallaxSection from "../components/parallax-section";
import PortfolioSection from "../components/portfolio-section";
import AboutSection from "../components/about-section";
import TestimonialsSection from "../components/testimonials-section";
import ServicesSection from "../components/services-section";
import ContactSection from "../components/contact-section";
import WhatsAppFloat from "../components/whatsapp-float";

export default function Home() {
  useEffect(() => {
    // Scroll reveal animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    // Observe all scroll-reveal elements
    const scrollElements = document.querySelectorAll('.scroll-reveal');
    scrollElements.forEach(el => observer.observe(el));

    // Smooth scrolling for anchor links
    const handleSmoothScroll = (e) => {
      const target = e.target.getAttribute('href');
      if (target && target.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(target);
        if (element) {
          const headerHeight = 80;
          const elementPosition = element.offsetTop - headerHeight;
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    // Add smooth scroll to all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    // Cleanup
    return () => {
      scrollElements.forEach(el => observer.unobserve(el));
      anchorLinks.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      
      <div id="home">
        <HeroSection />
      </div>
      
      {/* Parallax Section */}
      <ParallaxSection />
      
      <div id="portfolio">
        <PortfolioSection />
      </div>
      
      <div id="about">
        <AboutSection />
      </div>
      
      <TestimonialsSection />
      
      <div id="services">
        <ServicesSection />
      </div>
      
      <div id="contact">
        <ContactSection />
      </div>
      
      <WhatsAppFloat />
    </main>
  );
}