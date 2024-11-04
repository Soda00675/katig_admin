import React from "react";
import { ASSETS } from "@/constants";

export const AuthLayout: React.FC = () => {
  return (
    <div className="h-screen w-screen bg-primary1 flex justify-center pt-[10%]">
      <div className="flex flex-col gap-y-5">
        <img src={ASSETS.brandlogo} alt="brand-logo-white.png" />
      </div>
    </div>
  );
};
