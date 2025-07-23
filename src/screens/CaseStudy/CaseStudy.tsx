import React from "react";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Target, Settings, Shield, Users, Database, CheckCircle2 } from "lucide-react";

export const CaseStudy = (): JSX.Element => {
  const challenges = [
    { icon: <Zap size={24} className="text-[#D17A4A] flex-shrink-0" />, text: "Slow Response Times & Customer Frustration" },
    { icon: <Zap size={24} className="text-[#D17A4A] flex-shrink-0" />, text: "Inconsistent Answers & Brand Dilution" },
    { icon: <Zap size={24} className="text-[#D17A4A] flex-shrink-0" />, text: "Manual Triage Errors & Delays" },
    { icon: <Zap size={24} className="text-[#D17A4A] flex-shrink-0" />, text: "No Centralized History & Lost Insights" },
    { icon: <Zap size={24} className="text-[#D17A4A] flex-shrink-0" />, text: "Staff Burnout & Inefficiency" },
  ];

  const results = [
    { icon: <Zap size={24} className="text-accent" />, title: "Instantaneous Engagement", description: "Every customer receives a relevant, helpful response within seconds." },
    { icon: <Users size={24} className="text-accent" />, title: "Empowered Support Team", description: "Over 80% of initial query handling is automated, freeing up the human team." },
    { icon: <Database size={24} className="text-accent" />, title: "Data-Driven Insights", description: "A centralized log provides a single source of truth for informed decisions." },
    { icon: <CheckCircle2 size={24} className="text-accent" />, title: "Error-Free Operations", description: "The automation eliminates human error in forwarding and logging queries." },
  ];
  
  const processSteps = [
    { number: "01", title: "Ingest", description: "A customer submits a query through a user-friendly Typeform." },
    { number: "02", title: "Triage", description: "An OpenAI model instantly reads and categorizes the query." },
    { number: "03", title: "Respond", description: "The AI formulates a personalized, empathetic email response." },
    { number: "04", title: "Check History", description: "The system checks a central log for previous customer contact." },
    { number: "05", title: "Log", description: "The entire interaction is logged, updating or creating customer records." },
  ];

  return (
    <div className="bg-[#111111] text-white flex flex-row justify-center w-full">
      <div className="bg-[#111111] w-full max-w-[1440px] relative px-6 sm:px-8 md:px-16 py-6 md:py-12">
        <header className="flex justify-between items-center mb-12 md:mb-16">
          <Link to="/" className="font-['Literata',Helvetica] font-normal text-white/70 text-2xl tracking-[-0.53px] leading-9 transition-colors hover:text-white">
            N
          </Link>
          <a href="https://cal.com/namankumar/30min" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              className="h-[42px] md:h-[47px] w-auto px-5 md:px-6 rounded-full border-[1px] border-solid border-white/20 bg-transparent font-['Inter',Helvetica] font-medium text-white/80 text-[10px] md:text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-colors duration-300 ease-in-out"
            >
              BOOK A CALL
            </Button>
          </a>
        </header>

        <main className="flex flex-col gap-16 md:gap-24">
          <section className="text-center py-16 md:py-24">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold [font-family:'Literata',Helvetica] mb-4 bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent" style={{ lineHeight: '1.4' }}>
              From Customer Chaos to 24/7 Clarity
            </h1>
            <p className="text-base md:text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
              This case study outlines how I built an intelligent, end-to-end
              system that automatically categorizes customer queries, provides
              instant, personalized email responses, and maintains a
              persistent customer log—freeing up staff and boosting
              satisfaction.
            </p>
          </section>

          <section className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold [font-family:'Literata',Helvetica] mb-8 text-gradient-subtle" style={{ lineHeight: '1.4' }}>
                  The Challenge: Drowning in Repetitive Queries
                </h2>
                <p className="text-white/70 mb-8 leading-relaxed">
                  An e-commerce clothing brand was facing significant
                  operational strain due to a high volume of inbound customer
                  inquiries, leading to several key business challenges.
                </p>
              </div>
              <div className="space-y-6">
                {challenges.map((challenge, index) => (
                  <div key={index} className="flex items-start gap-4">
                    {challenge.icon}
                    <span className="text-base md:text-lg text-white/90">{challenge.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          <section className="section-container">
             <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl md:text-4xl font-bold [font-family:'Literata',Helvetica] mb-4 text-gradient-subtle" style={{ lineHeight: '1.4' }}>
                  The Solution: An Intelligent, End-to-End Automation
                </h2>
                <p className="text-base md:text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
                  I designed and built a custom automation using N8N that acts
                  as a smart, digital employee, orchestrating a complete response and
                  logging process without any human intervention.
                </p>
              </div>
            <div className="relative pl-12 max-w-4xl mx-auto">
                <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-white/10" />
                <div className="flex flex-col gap-8">
                {processSteps.map((step, index) => (
                    <div
                    key={index}
                    className="relative flex items-center p-4 rounded-lg"
                    >
                    <div className="absolute left-[-28px] w-6 h-6 rounded-full bg-[#111111] border-2 border-accent flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-accent" />
                    </div>
                    <div className="flex items-baseline gap-6">
                        <span className="[font-family:'Literata',Helvetica] text-accent font-bold text-xl">
                        {step.number}
                        </span>
                        <div>
                            <h3 className="[font-family:'Inter',Helvetica] font-medium text-white/90 text-2xl tracking-[-0.35px]" style={{ lineHeight: '1.4' }}>
                                {step.title}
                            </h3>
                            <p className="text-white/60 mt-1 leading-relaxed">{step.description}</p>
                        </div>
                    </div>
                    </div>
                ))}
                </div>
            </div>
          </section>

          <section className="section-container">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold [font-family:'Literata',Helvetica] mb-4 text-gradient-subtle" style={{ lineHeight: '1.4' }}>
                Tangible Results
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {results.map((result, index) => (
                 <div key={index} className="bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10">
                    <div className="mb-4">{result.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2" style={{ lineHeight: '1.4' }}>{result.title}</h3>
                    <p className="text-white/70 leading-relaxed">{result.description}</p>
                 </div>
              ))}
            </div>
          </section>
          
          <section className="section-container">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold [font-family:'Literata',Helvetica] mb-4 text-gradient-subtle" style={{ lineHeight: '1.4' }}>
                Technical & Strategic Insights
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10">
                 <div className="mb-4"><Target size={24} className="text-accent"/></div>
                 <h3 className="text-xl font-bold text-white mb-2" style={{ lineHeight: '1.4' }}>Why Typeform as a Trigger?</h3>
                 <p className="text-white/70 leading-relaxed">
                    It provides a superior user experience and delivers clean, structured data, which is crucial for minimizing errors and simplifying downstream AI processing.
                 </p>
              </div>
              <div className="bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10">
                 <div className="mb-4"><Settings size={24} className="text-accent"/></div>
                 <h3 className="text-xl font-bold text-white mb-2" style={{ lineHeight: '1.4' }}>Adaptable Ingestion</h3>
                 <p className="text-white/70 leading-relaxed">
                    The automation can be easily configured to trigger from other sources, including a dedicated email inbox, live website chat, or a direct API endpoint.
                 </p>
              </div>
              <div className="bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10">
                 <div className="mb-4"><Shield size={24} className="text-accent"/></div>
                 <h3 className="text-xl font-bold text-white mb-2" style={{ lineHeight: '1.4' }}>Architecting for Data Integrity</h3>
                 <p className="text-white/70 leading-relaxed">
                   A key technical solution was designing a resilient data flow that correctly handles both new and existing customers, ensuring every interaction is logged without data loss.
                 </p>
              </div>
              <div className="bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10">
                 <div className="mb-4"><ArrowRight size={24} className="text-accent"/></div>
                 <h3 className="text-xl font-bold text-white mb-2" style={{ lineHeight: '1.4' }}>Future-Proofing</h3>
                 <p className="text-white/70 leading-relaxed">
                    The system is a foundation that can be expanded with capabilities like sentiment analysis, CRM integration, and multi-language support.
                 </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};
