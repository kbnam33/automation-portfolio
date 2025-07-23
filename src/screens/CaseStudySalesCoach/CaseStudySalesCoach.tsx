import React from "react";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
import { GitBranch, Box, AlertTriangle, MessageCircle, Database } from "lucide-react";

export const CaseStudySalesCoach = (): JSX.Element => {
  const problems = [
    { title: "Feedback Latency", description: "Feedback on calls arrived days or weeks later, long after context was lost." },
    { title: "Data Attrition", description: "Critical nuances about client personality, pain points, and objections were never formally captured." },
    { title: "Subjectivity Bias", description: "Manual reviews lacked an objective baseline, leading to inconsistent performance evaluation." },
    { title: "Sales & Marketing Disconnect", description: "Marketing messaging was completely disconnected from real-time customer objections and buying signals." },
  ];

  const buildSteps = [
    { number: "01", title: "The Trigger", description: "The workflow initiates the moment a new sales call transcript is saved as a Google Doc in a designated Google Drive folder." },
    { number: "02", title: "The Brain (AI Agent)", description: "The transcript is piped to a GPT-4o agent with a highly engineered prompt that acts as its Standard Operating Procedure for call analysis." },
    { number: "03", title: "Structured Output", description: "To ensure 100% reliability, the AI's analysis is constrained by a structured JSON output, eliminating generative variance." },
    { number: "04", title: "The Distribution Network", description: "The structured data is immediately and simultaneously routed to multiple destinations based on its content and urgency." },
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
          {/* --- Hero Section --- */}
          <section className="text-center py-16 md:py-24">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold [font-family:'Literata',Helvetica] mb-4 bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent" style={{ lineHeight: '1.4' }}>
              How I Built an AI Sales Coach that Delivers Real-Time Feedback
            </h1>
            <p className="text-base md:text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
              Moving beyond manual call reviews to an automated system that analyzes 100% of sales calls and pipes actionable intelligence directly into Slack, Email, and Google Sheets.
            </p>
          </section>

          {/* --- The Situation Section --- */}
          <section className="section-container">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold [font-family:'Literata',Helvetica] mb-4 text-gradient-subtle" style={{ lineHeight: '1.4' }}>
                The Situation: The Data Graveyard of Sales Conversations
              </h2>
              <p className="text-base md:text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
                The stated problem was simple: "Our sales managers don't have time to review every call, and reps aren't getting consistent feedback." This was a symptom of a much deeper, more corrosive issue—a systemic failure of the intelligence pipeline. The company wasn't just missing coaching opportunities; it was actively accumulating an "ignorance debt" across the entire revenue function with every call that went unanalyzed.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {problems.map((problem, index) => (
                 <div key={index} className="bg-white/5 p-6 rounded-2xl border border-white/10">
                    <h3 className="text-xl font-bold text-white mb-2" style={{ lineHeight: '1.4' }}>{problem.title}</h3>
                    <p className="text-white/70 leading-relaxed">{problem.description}</p>
                 </div>
              ))}
            </div>
          </section>

          {/* --- The Build Section --- */}
          <section className="section-container">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold [font-family:'Literata',Helvetica] mb-4 text-gradient-subtle" style={{ lineHeight: '1.4' }}>
                The Build: An Elegant, Grounded Solution
              </h2>
              <p className="text-base md:text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
                I used the low-code automation platform n8n to build a robust, transparent, and entirely custom intelligence pipeline. The system is logical and auditable from end to end, turning raw transcripts into distributed, actionable truths.
              </p>
            </div>
            <div className="relative pl-12 max-w-4xl mx-auto">
                <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-white/10" />
                <div className="flex flex-col gap-8">
                {buildSteps.map((step, index) => (
                    <div key={index} className="relative flex items-center p-4 rounded-lg">
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
          
          {/* --- REDESIGNED: The Distribution Network Section --- */}
          <section className="section-container">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold [font-family:'Literata',Helvetica] mb-4 text-gradient-subtle" style={{ lineHeight: '1.4' }}>
                The Distribution Network in Action
              </h2>
              <p className="text-base md:text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
                The goal was not to create a central "source of truth" but to deliver decentralized, actionable truths directly into the workflows the teams already used.
              </p>
            </div>
            
            <div className="space-y-20">

              {/* --- Feature 1: Slack --- */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <MessageCircle className="w-8 h-8 text-accent mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Real-Time Slack Alerts</h3>
                  <p className="text-white/70 leading-relaxed">If a deal is flagged as "At Risk," a real-time alert is pushed to a dedicated Slack channel, detailing the risk factors.</p>
                </div>
                <div>
                  <img src="/Slack report.png" alt="Slack report screenshot" className="rounded-lg border border-white/10 shadow-2xl shadow-black/30" />
                </div>
              </div>

              {/* --- Feature 2: Email --- */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="md:order-last">
                  <Box className="w-8 h-8 text-accent mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Actionable Email Feedback</h3>
                  <p className="text-white/70 leading-relaxed">A formatted HTML email is sent to the sales rep and their manager with the call score and detailed feedback.</p>
                </div>
                <div>
                  <img src="/Email report.png" alt="Email report screenshot" className="rounded-lg border border-white/10 shadow-2xl shadow-black/30" />
                </div>
              </div>
              
              {/* --- Feature 3: Google Sheets --- */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <Database className="w-8 h-8 text-accent mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Automated Data Logging</h3>
                  <p className="text-white/70 leading-relaxed">The entire analysis is appended to a master Google Sheet, creating a rich database for long-term analysis.</p>
                </div>
                <div>
                  <img src="/Marketing analysis sheet.png" alt="Marketing analysis sheet screenshot" className="rounded-lg border border-white/10 shadow-2xl shadow-black/30" />
                </div>
              </div>

            </div>
          </section>

          {/* --- The Lesson Section --- */}
          <section className="text-center py-16 md:py-24">
            <GitBranch className="w-10 h-10 text-accent mb-6 mx-auto" />
            <h2 className="text-3xl md:text-4xl font-bold [font-family:'Literata',Helvetica] mb-4 text-gradient-subtle" style={{ lineHeight: '1.4' }}>
              The Lesson: Don't Buy a Platform When You Need a Pipeline
            </h2>
            <p className="text-base md:text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
              The most powerful implementation of AI in a business process is often not a monolithic, all-in-one platform. It is a series of small, intelligent, interconnected "pipes" that move information from where it's generated to where it's needed with minimal friction.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
};
