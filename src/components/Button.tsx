import React from "react";

export const Button = (props: React.PropsWithChildren) => {
  return (
    <button className="relative px-4 py-2 rounded-lg font-medium text-xs sm:text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_10px_rgba(140,69,255,0.9)]">
      <div className="absolute inset-0">
        <div className="rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
        <div className="rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
        <div className="absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,0.9)] rounded-lg"></div>
      </div>
      <span className="relative z-10">{props.children}</span>
    </button>
  );
};