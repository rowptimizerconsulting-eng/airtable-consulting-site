import { Button } from "@/components/ui/button";
import { Star, CheckCircle2, ArrowRight } from "lucide-react";
import { useState } from "react";

/**
 * Design System: Modern Professional with Energetic Accents
 * - Primary accent: Red (#e63946) for CTAs and highlights
 * - Secondary accent: Orange (#f77f00) for supporting elements
 * - Typography: Poppins Bold for headlines, Inter for body
 * - Layout: Asymmetric sections with generous whitespace
 */

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <div className="text-2xl font-poppins font-bold text-foreground">
            Rowptimizer<span className="text-primary">.</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium text-foreground hover:text-primary transition">Services</a>
            <a href="#solutions" className="text-sm font-medium text-foreground hover:text-primary transition">Solutions</a>
            <a href="#testimonials" className="text-sm font-medium text-foreground hover:text-primary transition">Testimonials</a>
            <a href="#faq" className="text-sm font-medium text-foreground hover:text-primary transition">FAQ</a>
          </nav>
          <Button className="bg-primary hover:bg-red-700 text-white">
            Schedule Call
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-20 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="flex flex-col justify-center">
              <div className="inline-block bg-gray-100 px-4 py-2 rounded-full w-fit mb-6">
                <span className="text-sm text-gray-600">Automation Made Simple</span>
              </div>
              
              <h1 className="text-6xl md:text-7xl font-poppins font-bold text-foreground mb-8 leading-tight tracking-tight">
                Optimize your <span className="bg-primary text-white px-3 py-1 inline-block">workflows</span>
                <br />
                automate your success
              </h1>
              
              <p className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed font-light">
                Rowptimizer helps small US businesses streamline operations through expert Airtable configuration and workflow automation. We transform complex processes into simple, efficient systems that save time and drive growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button className="bg-gray-900 hover:bg-gray-800 text-white text-base py-6">
                  Schedule a free discovery session
                </Button>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-700">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">5.0</span>
                <span>500+ five-star client reviews across partner directories</span>
              </div>
            </div>

            {/* Right: Visual Element */}
            <div className="hidden md:flex justify-center">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663507673027/BefCekVgxP8ipdJrgkEMws/pasted_file_J3AhqI_image_27744f4c.png"
                alt="Process optimization and workflow automation"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-foreground mb-12">
            Trusted by big and small
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-center">
            {["CashApp", "Sodexo", "FullFocus", "iHeart", "Discovery"].map((company, idx) => (
              <div key={idx} className="flex justify-center">
                <div className="text-gray-400 font-semibold text-sm md:text-base">{company}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left: Heading */}
            <div>
              <h2 className="text-4xl md:text-5xl font-poppins font-bold text-foreground leading-tight">
                You know automation is no longer a nice-to-have
              </h2>
            </div>

            {/* Right: Description */}
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                If only you knew where to start. Worse still, all the apps that promised to streamline your business only make things more complicated.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The days of siloed processes, lost hours, and less-than-perfect customer experiences are over.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 md:py-32 bg-gray-50">
        <div className="container">
          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              {
                quote: "Everyone talks about how amazing Zapier is, but no one said how hard it would be to implement!",
                color: "border-l-4 border-primary bg-blue-50"
              },
              {
                quote: "We thought these apps would simplify our workflows, but we're spending half our time playing whack-a-mole with bugs.",
                color: "border-l-4 border-secondary bg-teal-50"
              },
              {
                quote: "Sure, we're probably overlooking valuable features in our CRM, but we're not experts. How do we even begin?",
                color: "border-l-4 border-primary bg-blue-50"
              },
              {
                quote: "I can't spend my days watching workflow automation tutorials. I've got a business to run!",
                color: "border-l-4 border-secondary bg-teal-50"
              }
            ].map((testimonial, idx) => (
              <div key={idx} className={`p-8 rounded-lg ${testimonial.color}`}>
                <p className="text-lg font-semibold text-foreground leading-relaxed">{testimonial.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="mb-16">
            <span className="text-primary font-semibold text-sm tracking-wide">OUR WORKFLOW AUTOMATION SERVICES</span>
            <h2 className="text-5xl md:text-6xl font-poppins font-bold text-foreground mt-6 leading-tight">
              Turn your business into a lean, mean productivity machine
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                At Airtable and automation experts, we do so much more than just implement software. We work with you to understand your business, strategies the best software and automation solutions, and then implement those solutions to ensure your productivity and ROI are maximized.
              </p>
              <p className="text-gray-600 leading-relaxed">
                No more generic solutions. No more wasted hours. Just custom-built workflows designed for your business — plus support and optimization to ensure your automations continue to drive maximum efficiency and ROI as your business evolves.
              </p>
            </div>

            <div className="flex justify-center">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663507673027/BefCekVgxP8ipdJrgkEMws/pasted_file_a6tG0i_image_607e4f9f.png"
                alt="Email and workflow automation"
                className="w-full h-auto max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 md:py-32 bg-gray-50">
        <div className="container">
          <h2 className="text-5xl md:text-6xl font-poppins font-bold text-foreground mb-12">
            How can we help?
          </h2>

          <div className="space-y-6 max-w-2xl">
            {[
              {
                title: "I need ongoing help to automate a mountain of manual tasks.",
                description: "Ongoing automation support and custom workflow implementation to eliminate manual processes."
              },
              {
                title: "I need to set up my new software right the first time.",
                description: "Expert configuration and setup services to ensure your tools are optimized from day one."
              },
              {
                title: "I wish we had a team responsible for making sure all our tools actually work.",
                description: "Dedicated support and optimization to keep your automation systems running smoothly."
              }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="bg-white border border-border rounded-lg p-8 cursor-pointer hover:shadow-lg transition"
                onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    {expandedFaq === idx && (
                      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    )}
                  </div>
                  <div className="text-primary flex-shrink-0">
                    <ArrowRight className={`w-5 h-5 transition-transform ${expandedFaq === idx ? 'rotate-90' : ''}`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-foreground mb-8">
            Ready to streamline your workflows?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how Airtable automation can transform your business operations and save your team valuable time.
          </p>
          <Button className="bg-primary hover:bg-red-700 text-white text-lg px-8 py-6">
            Schedule your free discovery session
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-xl font-poppins font-bold text-white mb-4">
                Rowptimizer<span className="text-primary">.</span>
              </div>
              <p className="text-sm">Automation Made Simple. Expert Airtable consulting for growing businesses.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Airtable Setup</a></li>
                <li><a href="#" className="hover:text-white transition">Automation</a></li>
                <li><a href="#" className="hover:text-white transition">Integration</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms</a></li>
                <li><a href="#" className="hover:text-white transition">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2026 Rowptimizer. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
