// src/components/MobileContactCard.tsx
import React from "react";
import {
  Download,
  Share2,
  Repeat2,
  ChevronLeft,
  ChevronRight,
  Plus,
  MoreHorizontal,
} from "lucide-react";
import AppLogo from "@/Components/_Partials/AppLogo";
import MainButton from "@/Components/Buttons/MainButton";

type ContactCardProps = {
  domain?: string;
  logoText?: string;
  ctaText?: string;
  portraitUrl: string;
  fullName: string;
  subtitle: string;
  about: string;
  pagesCount?: number;
  onSave?: () => void;
  onExchange?: () => void;
  onShare?: () => void;
};

const ContactCard: React.FC<ContactCardProps> = ({
  domain = "tapr.ca",
  logoText = "tapr",
  ctaText = "Get your card",
  portraitUrl,
  fullName,
  subtitle,
  about,
  pagesCount = 4,
  onSave,
  onExchange,
  onShare,
}) => {
  return (
    <div className="w-full flex items-center justify-center bg-neutral-900/95 p-6">
      {/* Phone body */}
      <div className="min-h-screen w-[360px] max-w-[92vw] rounded-[38px] bg-neutral-50 shadow-[0_40px_120px_rgba(0,0,0,.55)] ring-1 ring-black/10 overflow-hidden">

        {/* Hero */}
        <div className="relative rounded-br-4xl overflow-hidden">
          <img src={portraitUrl} alt={fullName} className="h-[400px] w-full object-cover" />
          {/* Gradient bottom overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

          {/* Logo + CTA */}
          <div className="absolute top-8 left-5 right-5 flex items-center justify-between">
            <AppLogo width={7} />

              {/*<MainButton title={ctaText} asType={"link"} href={'/products'} paddindClassYX={" py-2 px-1.5"}  />*/}

          </div>

          {/* Name + subtitle */}
          <div className="absolute bottom-5 left-5 right-5">
            <h1 className="text-white text-[28px] leading-7 font-extrabold drop-shadow">
              {fullName}
            </h1>
            <p className="mt-1 text-neutral-200 text-sm">{subtitle}</p>
          </div>
        </div>

        {/* Action buttons */}
        <div className="px-4 pb-3">
          <div className="mt-3 grid grid-cols-2 gap-3">
            <button
              onClick={onSave}
              className="group inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900 px-4 py-3 text-white hover:bg-neutral-800 transition-all"
            >
              <Download className="h-4 w-4" />
              <span className="text-sm font-semibold">Save contact</span>
            </button>
            <button
              onClick={onExchange}
              className="group inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900 px-4 py-3 text-white hover:bg-neutral-800 transition-all"
            >
              <Repeat2 className="h-4 w-4" />
              <span className="text-sm font-semibold">Exchange contact</span>
            </button>
          </div>
        </div>

        {/* About */}
        <div className="bg-white px-4 pb-5 pt-3">
          <h2 className="text-[11px] font-extrabold tracking-[0.15em] text-neutral-800">BIO</h2>
          <p className="mt-2 text-[13px] leading-5 text-neutral-700">{about}</p>
        </div>


      </div>
    </div>
  );
};

export default ContactCard;
