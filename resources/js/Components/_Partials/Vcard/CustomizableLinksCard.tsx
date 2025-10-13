// src/components/CustomizableLinksCard.tsx
import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { UserProfile } from "@/Types/types";

type LinkItem = {
  title: string;
  href: string;
  imageUrl: string;
  targetBlank?: boolean;
};

type Props = {
  title?: string;
  items: any[];
  defaultOpen?: boolean;
  className?: string;
};

export default function CustomizableLinksCard({
  title = "CUSTOMIZABLE LINKS",
  items,
  defaultOpen = true,
  className = "",
}: Props) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <>
        {
            items.length > 0 && (
                <section className={"rounded-2xl bg-white/95 backdrop-blur " + className}>
                    {/* Header (toggle) */}
                    <button
                        type="button"
                        onClick={() => setOpen((s) => !s)}
                        className="w-full flex items-center justify-between px-4 py-3 text-left"
                        aria-expanded={open}
                    >
                        <h2 className="text-[11px] font-extrabold tracking-[0.15em] text-neutral-800 mb-2">
                            {title}
                        </h2>
                        <ChevronDown
                            className={"h-5 w-5 text-neutral-500 transition-transform " + (open ? "rotate-180" : "")}
                        />
                    </button>

                    {/* List */}
                    {open && (
                        <ul role="list" className="divide-y divide-neutral-200">
                            {items.map((it, i) => (
                                <li key={i} className="px-4">
                                    <a
                                        href={it.uri}
                                        target={"_blank"}
                                        rel={"noopener noreferrer"}
                                        className="flex items-center gap-3 py-3 group"
                                    >
                                        <img
                                            src={it.imageUrl}
                                            alt=""
                                            className="h-11 w-11 rounded-xl object-cover ring-1 ring-black/5"
                                        />
                                        <div className="min-w-0 flex-1">
                                            <div className="text-[15px] leading-6 text-neutral-900 line-clamp-2 font-bold">
                                                {it.type}
                                            </div>
                                            <div className="text-sm leading-6 text-neutral-900 line-clamp-2">{it.uri}</div>
                                        </div>
                                        <ChevronRight className="h-5 w-5 text-neutral-400 group-hover:text-neutral-500" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}
                </section>
            )
        }
    </>
  );
}
