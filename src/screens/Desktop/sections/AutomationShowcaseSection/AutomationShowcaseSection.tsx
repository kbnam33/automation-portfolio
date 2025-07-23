import { Button } from "../../../../components/ui/button";

export const AutomationShowcaseSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-24 flex flex-col items-center justify-center text-center">
      <div className="w-full max-w-4xl section-container rounded-3xl p-12 md:p-16 text-center flex flex-col items-center">
        <h2 className="[font-family:'Literata',Helvetica] font-normal text-3xl md:text-4xl tracking-[-0.70px] leading-[48px] text-gradient-subtle mb-6" style={{ lineHeight: '1.3' }}>
          Ready to Build Your AI Advantage?
        </h2>
        <p className="[font-family:'Inter',Helvetica] font-normal text-white/60 text-lg mt-2 max-w-2xl mx-auto mb-12 leading-relaxed">
          Let&apos;s discuss how a custom AI system can drive conversions and
          growth for your team. The next step is to get on a 30-minute AI
          strategy call.
        </p>
        <a href="https://cal.com/namankumar/30min" target="_blank" rel="noopener noreferrer" className="w-full flex justify-center">
          <Button
            variant="ghost"
            className="button-glow w-full sm:max-w-md h-[100px] bg-white/5 rounded-full text-3xl [font-family:'Literata',Helvetica] font-normal text-white tracking-[-0.70px] leading-[48px]"
          >
            Book a call
          </Button>
        </a>
      </div>
    </section>
  );
};
