import { Button } from "@/components/Button";
import StarsBg from "@/assets/stars.png";

export const Hero = () => {
  return (
   <section className="h-[492px] md:h-[800px] flex items-center justify-center overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]" style={{
    backgroundImage: `url(${StarsBg.src})`,
    
   }}>
    <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%)]"></div>
    {/*Start of planet*/}   
    <div className="absolute h-64 w-64 bg-purple-500  md:h-96 md:w-96 rounded-full broder border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]"></div>
    {/*End of planet*/}   
    {/*Start of ring1*/}        
    <div className="absolute h-[300px] w-[300px] md:h-[580px] md:w-[580px] border border-white opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="absolute h-2 w-2 bg-white rounded-full top-1/2 left-0 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute h-2 w-2 bg-white rounded-full top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute h-2 w-2 bg-white rounded-full bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute h-5 w-5 border border-white rounded-full top-1/2 left-full -translate-x-1/2 -translate-y-1/2 inline-flex justify-center items-center">
       <div className="h-2 w-2 bg-white rounded-full"></div>
      </div>
    </div>
    {/*End of ring1*/}   
    {/*Start of ring2*/}   
    <div className="absolute h-[400px] w-[400px] md:h-[780px] md:w-[780px] border border-white opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
    {/*End of ring2*/}   
    {/*Start of ring3*/}   
    <div className="absolute h-[500px] w-[500px] md:h-[980px] md:w-[980px] border border-white opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
    <div className="absolute h-2 w-2 bg-white rounded-full top-1/2 left-0 -translate-x-1/2 -translate-y-1/2"></div>
    <div className="absolute h-2 w-2 bg-white rounded-full top-1/2 left-full -translate-x-1/2 -translate-y-1/2"></div>
    </div>
    {/*End of ring3*/}   
    <div className="container relative mt-16">
      <h1 className="text-5xl font-semibold tracking-tighter md:text-[100px] md:leading-none bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center">ProofreadAI</h1>
      <p className="text-lg text-white/70 mt-5 text-center md:text-xl max-w-xl mx-auto">
        ProffreadAI is a platform that allows you to read and understand
        complex texts.
      </p>
      <div className="flex justify-center mt-5">
        <Button>Join Waitlist</Button>
      </div>
    </div>
   </section>
  );
};
