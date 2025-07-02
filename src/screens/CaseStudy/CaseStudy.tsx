import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const CaseStudy = (): JSX.Element => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-[#121312] text-white flex flex-row justify-center w-full">
      <div className="bg-[#121312] w-full max-w-[1440px] relative px-16 py-12">
        <header className="flex justify-between items-center mb-16">
          <Link to="/" className="font-['Literata',Helvetica] font-normal text-[#eeeeeea1] text-2xl tracking-[-0.53px] leading-9">
            N
          </Link>
          <Button
            variant="outline"
            className="h-[47px] w-[127px] rounded-full border-[0.3px] border-solid border-[#eeeeee52] bg-transparent font-['Inter',Helvetica] font-medium text-[#e4e4e4e4] text-xs tracking-[-0.24px] leading-[16.5px] hover:bg-white hover:text-black transition-colors"
          >
            BOOK A CALL
          </Button>
        </header>

        <main className="flex flex-col gap-16">
          <motion.section
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, ease: "easeOut" }}
            variants={sectionVariants}
          >
            <h1 className="text-5xl font-bold [font-family:'Literata',Helvetica] mb-4">
              From Customer Chaos to 24/7 Clarity: Revolutionizing E-commerce
              Support with an AI-Powered Automation
            </h1>
            <p className="text-lg text-[#e4e4e4e4]">
              This case study outlines how we built an intelligent, end-to-end
              system that automatically categorizes customer queries, provides
              instant, personalized email responses, and maintains a
              persistent customer log—freeing up staff and boosting
              satisfaction.
            </p>
          </motion.section>

          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            variants={sectionVariants}
          >
            <Card className="bg-[#0e0d0d] rounded-3xl p-12">
              <CardContent>
                <h2 className="text-4xl font-bold [font-family:'Literata',Helvetica] mb-8">
                  The Challenge: Drowning in Repetitive Queries
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg text-[#e4e4e4e4]">
                  <p>
                    An e-commerce clothing brand was facing significant
                    operational strain due to a high volume of inbound customer
                    inquiries. The support team was spending hours every day on
                    repetitive tasks, leading to several key business
                    challenges:
                  </p>
                  <ul className="list-disc list-inside space-y-4">
                    <li>
                      <strong>Slow Response Times:</strong> Customers often
                      waited 24-48 hours for an initial reply, especially
                      outside of business hours, leading to frustration.
                    </li>
                    <li>
                      <strong>Inconsistent Answers:</strong> Different team
                      members provided slightly different answers to common
                      questions about returns or shipping.
                    </li>
                    <li>
                      <strong>Manual Triage Errors:</strong> Queries were
                      frequently miscategorized and forwarded to the wrong
                      department, causing further delays.
                    </li>
                    <li>
                      <strong>No Centralized History:</strong> Customer
                      interaction history was scattered across various email
                      threads, making it impossible to get a full picture of a
                      customer's journey.
                    </li>
                    <li>
                      <strong>Staff Burnout:</strong> The support team was
                      overwhelmed with low-value, repetitive tasks, preventing
                      them from focusing on complex customer issues.
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            variants={sectionVariants}
          >
            <Card className="bg-[#0e0d0d] rounded-3xl p-12">
              <CardContent>
                <h2 className="text-4xl font-bold [font-family:'Literata',Helvetica] mb-8">
                  The Solution: An Intelligent, End-to-End Automation
                </h2>
                <p className="text-lg text-[#e4e4e4e4] mb-8">
                  We designed and built a custom automation using N8N that acts
                  as a smart, digital employee. The system intercepts every
                  customer query and orchestrates a complete response and
                  logging process without any human intervention.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-center">
                  {[
                    { number: 1, title: "Ingest" },
                    { number: 2, title: "Triage" },
                    { number: 3, title: "Respond" },
                    { number: 4, title: "Check History" },
                    { number: 5, title: "Log" },
                  ].map((step) => (
                    <div key={step.number} className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-[#eeeeee1c] flex items-center justify-center text-2xl font-bold mb-4">
                        {step.number}
                      </div>
                      <h3 className="text-xl font-bold">{step.title}</h3>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            variants={sectionVariants}
          >
            <Card className="bg-[#0e0d0d] rounded-3xl p-12">
              <CardContent>
                <h2 className="text-4xl font-bold [font-family:'Literata',Helvetica] mb-8">
                  Tangible Results: From Manual Overhead to Automated
                  Excellence
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg text-[#e4e4e4e4]">
                  <ul className="list-disc list-inside space-y-4">
                    <li>
                      <strong>Instantaneous Customer Engagement:</strong> Every
                      customer receives a relevant, helpful response within
                      seconds of submitting their query, dramatically improving
                      customer satisfaction and trust.
                    </li>
                    <li>
                      <strong>Empowered Support Team:</strong> By automating
                      over 80% of initial query handling, the human support
                      team is freed up to focus on high-value, complex cases
                      that require a personal touch.
                    </li>
                    <li>
                      <strong>Data-Driven Insights:</strong> The centralized
                      Google Sheet log becomes a powerful single source of
                      truth. The business can now easily track query types,
                      identify common problems, and make informed decisions to
                      improve products or FAQs.
                    </li>
                    <li>
                      <strong>Error-Free Operations:</strong> The automation
                      eliminates human error in forwarding emails and ensures
                      every query is logged and categorized with perfect
                      consistency, creating a reliable operational backbone.
                    </li>
                  </ul>
                  <div className="flex items-center justify-center">
                    <img src="https://source.unsplash.com/random/400x300?data,analytics" alt="Data Analytics" className="rounded-xl"/>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>
          
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            variants={sectionVariants}
          >
            <Card className="bg-[#0e0d0d] rounded-3xl p-12">
              <CardContent>
                <h2 className="text-4xl font-bold [font-family:'Literata',Helvetica] mb-8">
                  Technical Deep Dive
                </h2>
                <div className="space-y-8 text-lg text-[#e4e4e4e4]">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">
                      Why Was Typeform Chosen as the Trigger?
                    </h3>
                    <p>
                      We chose Typeform as the initial trigger point for several
                      strategic reasons. It provides a superior user experience
                      for the customer compared to a standard web form, and most
                      importantly, it delivers clean, structured data to the
                      automation. This pre-structured data (e.g., a dedicated
                      email field) is crucial for minimizing errors and
                      simplifying the downstream AI processing.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">
                      How Can This System Ingest Queries from Other Sources?
                    </h3>
                    <p>
                      This automation is highly adaptable. While it currently
                      uses Typeform, it can easily be configured to trigger from
                      other common customer interaction points, including: A
                      Dedicated Email Inbox, Live Website Chat, or a Direct API
                      Endpoint.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">
                      Future-Proofing: How This Automation Can Grow With Your Business
                    </h3>
                    <p>
                      This system is not a static solution; it's a foundation. It can be easily expanded with more advanced capabilities, such as: Sentiment Analysis, CRM Integration, Multi-language Support, and Order Management.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>
        </main>
      </div>
    </div>
  );
};