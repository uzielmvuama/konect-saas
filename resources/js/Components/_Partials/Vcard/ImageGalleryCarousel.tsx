// src/components/ImageGalleryCarousel.tsx
import React, { useCallback, useEffect, useState } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

type GalleryImage = {
  src: string; // image url
  alt?: string; // accessibilité
};

type Props = {
  title?: string; // "Customizable links" (optionnel)
  images: GalleryImage[]; // uniquement des images (pas de texte)
  options?: EmblaOptionsType; // pour custom (loop, align, etc.)
  className?: string;
  showDots?: boolean; // points de pagination (par défaut: true)
};

export default function ImageGalleryCarousel({
  title = "GALLERY",
  images,
  options = { align: "start", loop: true, dragFree: false },
  className = "",
  showDots = true,
}: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <>
      {images.length > 0 && (
        <section className={"rounded-2xl bg-white/95 backdrop-blur " + className}>
          {/* Header */}
          <div className="px-4 pt-3 pb-2 flex items-center justify-between">
            <h2 className="text-[11px] font-extrabold tracking-[0.15em] text-neutral-800 mb-2">
              {title}
            </h2>
          </div>

          {/* Carousel viewport */}
          <div className="relative px-2 pb-2">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-3 pl-2">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setLightboxIndex(idx)}
                    className="flex-[0_0_78%] sm:flex-[0_0_45%] md:flex-[0_0_33%] lg:flex-[0_0_28%]
                           aspect-[4/5] overflow-hidden rounded-2xl ring-1 ring-black/5 shadow-sm
                           bg-neutral-100 hover:brightness-95 active:brightness-90 transition"
                    aria-label={img.alt ?? `Image ${idx + 1}`}
                  >
                    <img
                      src={img.src}
                      alt={img.alt ?? ""}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Arrow controls (flottants, style iOS) */}
            <div className="pointer-events-none">
              <button
                type="button"
                onClick={scrollPrev}
                disabled={!canScrollPrev}
                className="pointer-events-auto absolute top-1/2 -translate-y-1/2 left-2
                       h-9 w-9 rounded-full bg-white shadow-lg ring-1 ring-black/10
                       flex items-center justify-center disabled:opacity-50"
                aria-label="Previous"
              >
                <svg viewBox="0 0 20 20" className="h-5 w-5 text-neutral-700">
                  <path
                    d="M12.5 15L7.5 10l5-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>

              <button
                type="button"
                onClick={scrollNext}
                disabled={!canScrollNext && !options.loop}
                className="pointer-events-auto absolute top-1/2 -translate-y-1/2 right-2
                       h-9 w-9 rounded-full bg-white shadow-lg ring-1 ring-black/10
                       flex items-center justify-center disabled:opacity-50"
                aria-label="Next"
              >
                <svg viewBox="0 0 20 20" className="h-5 w-5 text-neutral-700">
                  <path
                    d="M7.5 5l5 5-5 5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            {/* Dots */}
            {showDots && (
              <div className="flex items-center justify-center gap-2 pt-2 pb-3">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => emblaApi?.scrollTo(i)}
                    className={
                      "h-1.5 w-1.5 rounded-full transition-all " +
                      (i === selectedIndex ? "w-4 bg-neutral-900" : "bg-neutral-300")
                    }
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Lightbox preview */}
          <Lightbox
            open={lightboxIndex !== null}
            close={() => setLightboxIndex(null)}
            index={lightboxIndex ?? 0}
            slides={images.map((img) => ({ src: img.src, alt: img.alt }))}
            plugins={[Zoom]}
            // styles plus sobres
            render={{
              buttonPrev: () => null, // on garde les contrôles par défaut (gesture + clic)
            }}
          />
        </section>
      )}
    </>
  );
}
