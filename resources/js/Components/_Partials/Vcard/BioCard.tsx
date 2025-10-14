// src/components/BioCard.tsx
import React from "react";
import DOMPurify from "dompurify";

type Props = {
  title?: string; // "Bio" par défaut
  text: string; // le contenu de la bio (peut contenir des sauts de ligne)
  className?: string;
};

export default function BioCard({ title = "BIO", text, className = "" }: Props) {
  return (
    <>
      {text && (
        <section className={"rounded-2xl bg-white/95 backdrop-blur p-4 md:p-5 " + className}>
          <h2 className="text-[11px] font-extrabold tracking-[0.15em] text-neutral-800 mb-2">
            {title}
          </h2>

          {/* whitespace-pre-line permet de respecter les retours à la ligne comme sur la maquette */}
          <p
            className="text-[15px] leading-6 !text-neutral-800 !dark:text-neutral-800 whitespace-pre-line [&_*]:text-neutral-900"
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(text) }}
          />
        </section>
      )}
    </>
  );
}
