// src/components/SocialLinksCard.tsx
import React from "react";

/** ---- Types ---- */
export type UserProfile = {
  vinfo?: {
    socialProfils?: Partial<
      Record<
        | "facebook"
        | "instagram"
        | "twitter" // alias historique de X
        | "youtube"
        | "tiktok"
        | "linkedin"
        | "pinterest",
        { uri: string; type: string }
      >
    >;
  };
};

type SocialName =
  | "facebook"
  | "instagram"
  | "x" // nouveau nom de Twitter
  | "youtube"
  | "tiktok"
  | "linkedin"
  | "pinterest"
  | "spotify";

export type SocialItem = {
  /** nom du réseau (utiliser "x" pour Twitter/X) */
  name: SocialName;
  /** url absolue (sera normalisée si besoin) */
  href: string;
  /** icône personnalisée (override) */
  icon?: React.ReactNode;
  /** libellé tooltip personnalisé (optionnel) */
  label?: string;
};

type Props = {
  title?: string;
  /** Tu peux passer user OU items, ou les deux (fusion + dédoublonnage) */
  user?: UserProfile;
  items?: SocialItem[]; // ordre d’affichage prioritaire si fourni
  extraItems?: SocialItem[]; // ajout/override d’items (avec icons custom possible)
  className?: string;
};

/** ---- Icônes SVG (par défaut) ---- */
const defaultIcons: Record<SocialName, React.ReactNode> = {
  facebook: (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-white" aria-hidden="true">
      <path d="M22 12.06C22 6.53 17.52 2 12 2S2 6.53 2 12.06c0 5 3.66 9.16 8.44 9.94v-7.03H7.9v-2.9h2.54V9.86c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.25.2 2.25.2v2.46h-1.27c-1.25 0-1.64.78-1.64 1.57v1.89h2.79l-.45 2.9h-2.34V22c4.78-.78 8.44-4.94 8.44-9.94z" />
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-white" aria-hidden="true">
      <path d="M23.5 7.2a4 4 0 0 0-2.8-2.8C18.8 4 12 4 12 4s-6.8 0-8.7.4A4 4 0 0 0 .5 7.2 41.6 41.6 0 0 0 0 12c0 1.6.2 3.2.5 4.8a4 4 0 0 0 2.8 2.8C5.2 20 12 20 12 20s6.8 0 8.7-.4a4 4 0 0 0 2.8-2.8c.3-1.6.5-3.2.5-4.8 0-1.6-.2-3.2-.5-4.8zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        ry="5"
        fill="none"
        stroke="white"
        strokeWidth="2"
      />
      <circle cx="12" cy="12" r="3.5" fill="none" stroke="white" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="white" />
    </svg>
  ),
  x: (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-white" aria-hidden="true">
      <path d="M18.146 2h3.223l-7.03 8.03L22 22h-6.91l-5.41-7.04L3.4 22H.176l7.5-8.58L2 2h6.91l4.98 6.53L18.146 2zM6.09 4.3l9.58 12.57h2.12L8.23 4.3H6.09z" />
    </svg>
  ),
  tiktok: (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-white" aria-hidden="true">
      <path d="M21 8.5a6.9 6.9 0 0 1-4.7-1.8v7.2a6 6 0 1 1-6-6c.46 0 .9.06 1.32.17v2.7a3.3 3.3 0 1 0 2.3 3.15V2h2.5a4.4 4.4 0 0 0 4.6 4.1z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-white" aria-hidden="true">
      <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5zM3 9h4v12H3zM9 9h3.8v1.64h.05c.53-.95 1.82-1.95 3.75-1.95 4.01 0 4.75 2.64 4.75 6.07V21h-4v-5.38c0-1.28-.02-2.93-1.79-2.93-1.8 0-2.07 1.4-2.07 2.84V21H9z" />
    </svg>
  ),
  pinterest: (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-white" aria-hidden="true">
      <path d="M12.04 2C6.55 2 3 5.6 3 10.1c0 3.2 1.8 5 2.8 5 .44 0 .7-1.2.7-1.6 0-.43-1.1-1.3-1.1-3.1 0-3.7 2.8-6.3 6.6-6.3 3.2 0 5.6 1.8 5.6 5 0 2.4-1.1 6.5-4.6 6.5-1.2 0-2.2-.9-1.9-2 0-.6.4-1.5.6-2.3.2-.8.4-1.6.5-2.1.1-.5-.2-.9-.7-.9-1.7 0-2.9 2.2-2.9 3.9 0 1.1.4 1.9.4 1.9l-1.5 6.2c-.5 2.2-.1 4.8-.1 5.1 0 .2.2.2.3.1.1-.1 1.6-2.1 2.1-4.1.1-.4.8-3.1.8-3.1.4.7 1.6 1.3 2.8 1.3 3.7 0 6.3-3.4 6.3-7.9C21.1 5.5 17.3 2 12.04 2z" />
    </svg>
  ),
  spotify: (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-white" aria-hidden="true">
      <path d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2zm4.56 14.46a.9.9 0 0 1-1.24.3c-3.4-2.08-7.69-1.27-7.73-1.27a.9.9 0 1 1-.35-1.77c.19-.04 4.9-.9 8.82 1.45.43.26.57.82.3 1.29zm1.07-3.12a1.08 1.08 0 0 1-1.49.36c-3.89-2.36-9.85-1.45-9.91-1.44a1.08 1.08 0 0 1-.34-2.12c.26-.05 6.5-1.06 10.95 1.65.52.32.68 1 .39 1.55zm.17-3.26c-4.42-2.63-11.2-1.83-11.29-1.82a1.25 1.25 0 0 1-.36-2.47c.3-.05 7.44-.92 12.56 2.1a1.25 1.25 0 1 1-1.3 2.19h-.01z" />
    </svg>
  ),
};

/** ---- Couleurs de fond par réseau ---- */
const bgClass: Record<SocialName, string> = {
  facebook: "bg-[#1778F2]",
  youtube: "bg-[#FF0000]",
  instagram:
    "bg-[radial-gradient(80%_120%_at_80%_0%,#FEDA75_0%,#F58529_25%,#DD2A7B_55%,#8134AF_78%,#515BD4_100%)]",
  x: "bg-black",
  tiktok: "bg-[linear-gradient(135deg,#25F4EE_0%,#FE2C55_100%)]",
  linkedin: "bg-[#0A66C2]",
  pinterest: "bg-[#E60023]",
  spotify: "bg-[#1DB954]",
};

/** ---- Normalisation & extraction ---- */
function ensureAbsoluteUrl(url: string | undefined | null): string | null {
  if (!url) return null;
  const v = url.trim();
  if (!v) return null;
  // Ajoute https si manquant
  if (!/^https?:\/\//i.test(v)) return `https://${v}`;
  return v;
}

/** Corrige les domaines approximatifs & mappe twitter->x */
function normalizeSocialHref(name: SocialName, href: string): string {
  try {
    const u = new URL(href);
    // corrections de domaine fréquentes
    const hostFixes: Partial<Record<SocialName, string>> = {
      x: "x.com",
      linkedin: "linkedin.com",
      facebook: "facebook.com",
      instagram: "instagram.com",
      youtube: "youtube.com",
      tiktok: "tiktok.com",
      pinterest: "pinterest.com",
      spotify: "spotify.com",
    };
    const expected = hostFixes[name];
    if (expected && u.hostname.replace(/^www\./, "") !== expected) {
      u.hostname = expected;
    }
    return u.toString();
  } catch {
    // si URL invalide, essaie de préfixer https
    return ensureAbsoluteUrl(href) ?? "";
  }
}

/** Lis le user.vinfo.socialProfils et retourne des SocialItem[] */
function extractFromUser(user?: UserProfile): SocialItem[] {
  const out: SocialItem[] = [];
  if (!user?.vinfo?.socialProfils) return out;

  const sp = user.vinfo.socialProfils;

  const pushIf = (name: SocialName, uri?: string) => {
    const abs = ensureAbsoluteUrl(uri);
    if (!abs) return;
    out.push({
      name,
      href: normalizeSocialHref(name, abs),
    });
  };

  pushIf("facebook", sp.facebook?.uri);
  pushIf("instagram", sp.instagram?.uri);
  // twitter → X
  pushIf("x", sp.twitter?.uri);
  pushIf("youtube", sp.youtube?.uri);
  pushIf("tiktok", sp.tiktok?.uri);
  pushIf("linkedin", sp.linkedin?.uri);
  pushIf("pinterest", sp.pinterest?.uri);

  // dédoublonnage par name
  const seen = new Set<string>();
  return out.filter((i) => {
    const key = i.name;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

/** Fusionne items explicites + extraItems + items extraits du user */
function mergeItems(
  base: SocialItem[] = [],
  extras: SocialItem[] = [],
  fromUser: SocialItem[] = []
): SocialItem[] {
  // priorité: items (ordre contrôlé) > extraItems > fromUser
  const map = new Map<SocialName, SocialItem>();
  for (const it of fromUser) map.set(it.name, it);
  for (const it of extras) map.set(it.name, { ...map.get(it.name), ...it });
  // garde l’ordre explicite si items fourni, sinon ordre de création
  if (base.length) {
    const result: SocialItem[] = [];
    for (const it of base) {
      const merged = { ...map.get(it.name), ...it };
      if (!merged?.href) continue;
      result.push(merged);
      map.delete(it.name);
    }
    // ajoute ce qui reste (extras/user) non listé dans items
    for (const rest of map.values()) {
      if (rest.href) result.push(rest);
    }
    return result;
  } else {
    // sans ordre imposé, renvoie map.values()
    return Array.from(map.values()).filter((x) => !!x.href);
  }
}

/** ---- Composant ---- */
export default function SocialLinksCard({
  title = "SOCIAL",
  user,
  items = [],
  extraItems = [],
  className = "",
}: Props) {
  const fromUser = extractFromUser(user);
  const merged = mergeItems(items, extraItems, fromUser);

  if (merged.length === 0) {
    return null; // rien à afficher
  }

  return (
    <>
      {merged.length > 0 && (
        <div className={"rounded-2xl bg-white/95 backdrop-blur p-4 md:p-5 " + className}>
          <h2 className="text-[11px] font-extrabold tracking-[0.15em] text-neutral-800 mb-2">
            {title}
          </h2>

          <div className="flex items-center gap-3 overflow-hidden overflow-x-auto">
            {merged.map(({ name, href, icon, label }) => {
              const tooltipId = `tip-${name}`;
              return (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label ?? name}
                  className={
                    "relative min-h-12 min-w-12 rounded-2xl flex items-center justify-center shadow-sm" +
                    " ring-1 ring-black/5 " +
                    "transition-transform duration-150 hover:-translate-y-0.5 active:translate-y-0 " +
                    bgClass[name]
                  }
                  data-hs-tooltip={`#${tooltipId}`}
                >
                  {icon ?? defaultIcons[name]}
                  <span
                    id={tooltipId}
                    className="hs-tooltip-content opacity-0 invisible transition-opacity hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible absolute z-10 -mt-12 rounded-md bg-neutral-900 px-2 py-1 text-[11px] font-medium text-white shadow-lg"
                    role="tooltip"
                  >
                    {(label ?? name).charAt(0).toUpperCase() + (label ?? name).slice(1)}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
