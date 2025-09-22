// src/components/ContactInfoCard.tsx
import React from "react";
import { Phone, Mail, Globe, MapPin, ChevronRight } from "lucide-react";

/** ---- Types ---- */
export type UserProfile = {
    vinfo: {
        emails: { text: string; type: string }[];
        phones: { text: string; type: string }[];
        urls: { type: string; uri: string }[];
        location: {
            country: string | null;
            city: string | null;
            state: string | null;
            state_name: string | null;
            postal_code: string | null;
        };
    };
};

type BuiltInType = "phone" | "email" | "website" | "address";
type ContactItemType = BuiltInType | "custom";

/** Un item = une ligne dans un groupe. `icons` et `group` servent à créer/overrider un groupe (section). */
export type ContactItem = {
    /** Pour les types built-in, group = type. Pour "custom", précise group pour regrouper plusieurs lignes sous une même icône/titre. */
    type: ContactItemType;
    /** Label de ligne (ex: "Work", "Mobile", "Support") */
    label?: string;
    /** Valeur visible (ex: "+1 613...", "hello@site.com", "veraup.com") */
    value: string;
    /** Lien de la ligne ; si absent, on le déduit pour les built-ins */
    href?: string;
    /** Icône du groupe (override). Utilise-le pour extraItems custom OU pour remplacer l’icône par défaut d’un type built-in. */
    icon?: React.ReactNode;
    /** Nom de groupe (ex: "WhatsApp", "Support", "Social"). Pour "custom" c’est recommandé. */
    group?: string;
    /** Titre de groupe (override) affiché en petit au-dessus des lignes du groupe. */
    groupLabel?: string;
};

/** ---- Icônes par défaut pour built-in ---- */
const defaultIconByType: Record<BuiltInType, React.ReactNode> = {
    phone: <Phone className="h-5 w-5 text-neutral-700" />,
    email: <Mail className="h-5 w-5 text-neutral-700" />,
    website: <Globe className="h-5 w-5 text-neutral-700" />,
    address: <MapPin className="h-5 w-5 text-neutral-700" />,
};

/** ---- Helpers ---- */
function defaultLineLabel(t: BuiltInType): string {
    switch (t) {
        case "phone":
            return "Mobile";
        case "email":
            return "Mail";
        case "website":
            return "Website";
        case "address":
            return "Address";
    }
}

function buildHrefFromBuiltIn(t: BuiltInType, value: string): string | undefined {
    switch (t) {
        case "phone":
            return `tel:${value.replace(/\s+/g, "")}`;
        case "email":
            return `mailto:${value}`;
        case "website": {
            const v = value?.trim();
            if (!v) return undefined;
            return v.startsWith("http") ? v : `https://${v}`;
        }
        case "address":
            return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(value)}`;
    }
}

function normalizePhone(p: string): string {
    return p.trim().replace(/\s+/g, " ");
}

function buildAddressString(loc: UserProfile["vinfo"]["location"]): string | null {
    if (!loc) return null;
    const parts = [loc.city, loc.state_name ?? loc.state, loc.postal_code, loc.country]
        .filter(Boolean)
        .map(String)
        .map((s) => s.trim());
    return parts.length ? parts.join(", ") : null;
}

/** Extrait les items "ligne" depuis le profil (sans icônes répétées) */
function extractLinesFromUser(user: UserProfile): ContactItem[] {
    const out: ContactItem[] = [];

    if (Array.isArray(user.vinfo?.phones)) {
        for (const p of user.vinfo.phones) {
            const value = normalizePhone(p.text);
            if (!value) continue;
            out.push({ type: "phone", value, label: p.type || "Mobile" });
        }
    }

    if (Array.isArray(user.vinfo?.emails)) {
        for (const e of user.vinfo.emails) {
            const value = e?.text?.trim();
            if (!value) continue;
            out.push({ type: "email", value, label: e.type || "Mail" });
        }
    }

    // if (Array.isArray(user.vinfo?.urls)) {
    //     for (const u of user.vinfo.urls) {
    //         const value = u?.uri?.trim();
    //         if (!value) continue;
    //         out.push({ type: "website", value, label: u.type || "Website" });
    //     }
    // }

    const addr = buildAddressString(user.vinfo?.location || ({} as any));
    if (addr) {
        out.push({ type: "address", value: addr, label: "" });
    }

    // dédupe simple (type+value)
    const seen = new Set<string>();
    return out.filter((it) => {
        const key = `${it.type}|${it.value.toLowerCase()}`;
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
    });
}

/** ---- Grouping ---- */
type Group = {
    key: string;
    icon: React.ReactNode;
    title: string; // petit titre au-dessus (ex: "PHONES", "EMAILS", "WEBSITES")
    rows: Array<{ label?: string; value: string; href?: string }>;
    isExternal?: boolean; // pour décider du target _blank si pertinent
};

function groupTitleForBuiltIn(t: BuiltInType): string {
    switch (t) {
        case "phone":
            return "PHONES";
        case "email":
            return "EMAILS";
        case "website":
            return "WEBSITES";
        case "address":
            return "ADDRESS";
    }
}

function buildGroups(items: ContactItem[]): Group[] {
    const groups = new Map<string, Group>();

    for (const it of items) {
        const isBuiltIn = it.type !== "custom";
        const groupKey = it.group ?? (isBuiltIn ? it.type : "custom");

        // Déterminer icône + titre de groupe
        let icon: React.ReactNode | undefined = it.icon;
        let title: string | undefined = it.groupLabel;
        let isExternal = false;

        if (!icon && isBuiltIn) {
            icon = defaultIconByType[it.type as BuiltInType];
        }
        if (!title && isBuiltIn) {
            title = groupTitleForBuiltIn(it.type as BuiltInType);
        }
        // Comportement lien externe par défaut pour le groupe websites
        if (isBuiltIn && it.type === "website") {
            isExternal = true;
        }

        // href ligne
        const href = it.href ?? (isBuiltIn ? buildHrefFromBuiltIn(it.type as BuiltInType, it.value) : undefined);

        // Récupérer ou créer le groupe
        const g = groups.get(groupKey) ?? {
            key: groupKey,
            icon: icon ?? <div className="h-5 w-5" />, // placeholder si rien
            title: (title ?? groupKey).toString().toUpperCase(),
            rows: [],
            isExternal,
        };

        // si un extraItem veut override l’icons/titre du groupe, on respecte le dernier défini
        if (it.icon) g.icon = it.icon;
        if (it.groupLabel) g.title = it.groupLabel.toUpperCase();

        // @ts-ignore
        g.rows.push({ label: it.label, value: it.value, href });
        groups.set(groupKey, g);
    }

    // ordre: phones, emails, websites, address, puis customs
    const order: string[] = ["phone", "email", "website", "address"];
    return Array.from(groups.values()).sort((a, b) => {
        const ia = order.indexOf(a.key);
        const ib = order.indexOf(b.key);
        if (ia === -1 && ib === -1) return a.key.localeCompare(b.key);
        if (ia === -1) return 1;
        if (ib === -1) return -1;
        return ia - ib;
    });
}

/** ---- Composant ---- */
type Props = {
    user: UserProfile;
    title?: string;
    className?: string;
    /** Ajoute des sections/lignes custom ou override une section existante. */
    extraItems?: ContactItem[];
    /** Afficher ou non le chevron à droite de chaque groupe (pas sur chaque ligne). */
    showChevron?: boolean;
};

export default function ContactInfoCard({
                                            user,
                                            title = "CONTACT",
                                            className = "",
                                            extraItems = [],
                                            showChevron = true,
                                        }: Props) {
    const baseLines = extractLinesFromUser(user);
    const allItems = [...baseLines, ...extraItems].filter((it) => it?.value?.trim());
    const groups = buildGroups(allItems);

    return (
        <div className={"rounded-2xl bg-white/95 backdrop-blur p-4 md:p-5 " + className}>
            <h2 className="text-[11px] font-extrabold tracking-[0.15em] text-neutral-800 mb-2">
                {title}
            </h2>

            <ul role="list" className="divide-y divide-neutral-200">
                {groups.map((g, gi) => (
                    <li key={g.key + "-" + gi} className="first:pt-1 last:pb-1">
                        <div className="flex items-start gap-3 py-3">
                            {/* Icône du groupe (unique) */}
                            <div className="flex-shrink-0 rounded-xl bg-neutral-100 ring-1 ring-black/5 h-10 w-10 flex items-center justify-center">
                                {g.icon}
                            </div>

                            {/* Contenu du groupe */}
                            <div className="min-w-0 flex-1">
                                <div className="text-[11px] font-bold tracking-[0.14em] text-neutral-500 mb-1">
                                    {g.title}
                                </div>

                                {/* Lignes du groupe */}
                                <div className="flex flex-col gap-1">
                                    {g.rows.map((r, ri) => {
                                        const common = (
                                            <span className="text-[15px] leading-6 text-neutral-900 truncate">
                        {r.value}
                      </span>
                                        );
                                        return (
                                            <div key={`${g.key}-row-${ri}`} className="flex items-center gap-2">
                                                {r.label && (
                                                    <span className="text-[12px] font-medium text-neutral-500">
                            {r.label}:
                          </span>
                                                )}
                                                {r.href ? (
                                                    <a
                                                        href={r.href}
                                                        target={g.isExternal ? "_blank" : undefined}
                                                        rel={g.isExternal ? "noopener noreferrer" : undefined}
                                                        className="truncate hover:underline"
                                                    >
                                                        {common}
                                                    </a>
                                                ) : (
                                                    common
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Chevron (au niveau du groupe) */}
                            {showChevron && <ChevronRight className="mt-1 h-5 w-5 text-neutral-400" />}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
