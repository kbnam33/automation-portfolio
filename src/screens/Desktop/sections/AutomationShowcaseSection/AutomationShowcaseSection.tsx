import { useEffect, useRef } from "react";

/**
 * A robust component to embed a Cal.com scheduling calendar.
 * This version uses a useRef flag to prevent re-initialization in React's StrictMode,
 * which is the definitive fix for the loading issue.
 */
const CalEmbed = ({ calLink }: { calLink: string }) => {
  // This ref will track if the Cal.com embed has been initialized.
  const initialized = useRef(false);

  useEffect(() => {
    // The key fix: Only run the initialization logic if the ref is false.
    // This prevents the code from running a second time due to StrictMode re-renders.
    if (!initialized.current) {
      // This is the official Cal.com embed pattern.
      (window.Cal = window.Cal || function () {
        var c = window.Cal;
        (c.q = c.q || []).push(arguments);
      });

      // Push the initialization and UI configuration commands to the queue.
      window.Cal("init", {});
      window.Cal("inline", {
        elementOrSelector: "#my-cal-inline",
        calLink: calLink,
        layout: "month_view"
      });
      window.Cal("ui", {
        "theme": "dark",
        "styles": { "branding": { "brandColor": "#111111" } },
        "hideEventTypeDetails": false,
        "layout": "month_view"
      });

      // Set the ref to true so this entire block of code never runs again
      // for this component instance, even if it re-renders.
      initialized.current = true;
    }
  }, [calLink]);

  // The div where the calendar will be rendered.
  return <div id="my-cal-inline" style={{ width: '100%', height: '650px', overflow: 'scroll' }} className="rounded-3xl"></div>;
};


export const AutomationShowcaseSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-24 flex flex-col items-center justify-center text-center">
      <div className="text-center mb-16">
        <h2 className="[font-family:'Literata',Helvetica] font-normal text-3xl md:text-4xl tracking-[-0.70px] leading-[48px] text-gradient-subtle">
          Ready to Build Your AI Advantage?
        </h2>
        <p className="[font-family:'Inter',Helvetica] font-normal text-white/60 text-lg mt-4 max-w-2xl mx-auto">
          The next step is a 15-minute discovery call. Find a time that works for you below.
        </p>
      </div>

      <div className="w-full max-w-5xl section-container p-4 md:p-6">
        <CalEmbed calLink="namankumar/30min" />
      </div>
    </section>
  );
};
