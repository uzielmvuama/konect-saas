export interface PagePropsType {
  auth: {
    user: {
      id: number;
      name: string;
      email: string;
    };
  };
  // ziggy: any; // si tu utilises Ziggy côté React
}

export interface TeamProps {
  id: number;
  name: string;
  email: string;
}
export type MediaUploadType = "profile" | "cover" | "activity-images" | "activity-videos";

export type UserProfile = {
    name: string;
    firstname: string;
    email: string;
    vinfo: {
        names: {
            givenName: string;
            familyName: string;
            middleName: string;
            prefix: string;
        };
        emails: {
            text: string;
            type: string;
        }[];
        socialProfils: {
            facebook: {
                uri: string;
                type: "facebook";
            };
            instagram: {
                uri: string;
                type: "instagram";
            };
            twitter: {
                uri: string;
                type: "twitter";
            };
            youtube: {
                uri: string;
                type: "youtube";
            };
            tiktok: {
                uri: string;
                type: "tiktok";
            };
            linkedin: {
                uri: string;
                type: "linkedin";
            };
            pinterest: {
                uri: string;
                type: "pinterest";
            };
        };
        urls: {
            type: string;
            uri: string;
        }[];
        videoLinks: string[];
        imageLinks: string[];
        note: {
            text: string;
        };
        location: {
            ip: string | null;
            iso_code: string | null;
            country: string | null;
            city: string | null;
            state: string | null;
            state_name: string | null;
            postal_code: string | null;
            lat: number | null;
            lon: number | null;
            timezone: string | null;
            continent: string | null;
            currency: string | null;
            deFault: string | null;
        };
        phones: {
            text: string;
            type: string;
        }[];
        title: string;
    };
    uuid: string;
    profile_photo_path: string | null;
    created_at: string; // format ISO 8601
    vconfig: {
        isCardActivated: boolean;
        configTheme: {
            primaryColor: string;
            kpZoom: "normal" | "small" | "large";
            themeMode: "light" | "dark";
        };
        showKonects: boolean;
        showLocalization: boolean;
    };
    role: string;
    kpoint: number;
    referal_code: string | null;
    referal_from: string | null;
    konects: unknown[]; // si tu connais la structure des objets konects je peux la détailler
    konects_count: number | null;
};
