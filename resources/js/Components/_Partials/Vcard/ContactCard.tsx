// src/components/MobileContactCard.tsx
import React, { useEffect, useState } from "react";
import {
  Download,
  Share2,
  Repeat2,
  ChevronLeft,
  ChevronRight,
  Plus,
  MoreHorizontal,
  Save,
} from "lucide-react";
import AppLogo from "@/Components/_Partials/AppLogo";
import MainButton from "@/Components/Buttons/MainButton";
import SocialLinksCard from "@/Components/_Partials/Vcard/SocialLinksCard";
import ContactInfoCard, { ContactItem } from "@/Components/_Partials/Vcard/ContactInfoCard";
import BioCard from "@/Components/_Partials/Vcard/BioCard";
import CustomizableLinksCard from "@/Components/_Partials/Vcard/CustomizableLinksCard";
import ImageGalleryCarousel from "@/Components/_Partials/Vcard/ImageGalleryCarousel";
import { UserProfile } from "@/Types/types";
import { usePage } from "@inertiajs/react";
import { FaWhatsapp } from "react-icons/fa6";
import { ucfirst } from "@/Utils/Functions/globals";

type ContactCardProps = {
  user: UserProfile;
  domain?: string;
  logoText?: string;
  ctaText?: string;
  subtitle: string;
  about: string;
  pagesCount?: number;
  onSave?: (e: React.FormEvent) => void;
  onExchange?: () => void;
  onShare?: () => void;
};

const ContactCard: React.FC<ContactCardProps> = ({
  user,
  domain = "tapr.ca",
  logoText = "tapr",
  ctaText = "Get your card",
  subtitle,
  about,
  pagesCount = 4,
  onSave,
  onExchange,
  onShare,
}) => {
  const { vinfo, firstname, name, profile_photo_path } = user;
  const props_= usePage().props as unknown as any;
  const ROOT_FILES_URL = props_.sftp_root_path as string;
  const vcard_file= props_.medias.vcard ? props_.medias.vcard.urls.original as string : null;
  const [profilImg, setProfilImg] = useState<string>("/assets/images/icons/user.jpg");

  useEffect(() => {
    if (profile_photo_path) {
      setProfilImg(ROOT_FILES_URL + "/" + profile_photo_path);
    }
  }, []);

  const extras: ContactItem[] = [
    // Groupe custom "WhatsApp" avec son icône, deux lignes
    // {
    //     type: "custom",
    //     group: "whatsapp",
    //     groupLabel: "WhatsApp",
    //     icons: <FaWhatsapp className="h-5 w-5 text-neutral-700" />,
    //     label: "Main",
    //     value: "+1 613 555 1111",
    //     href: "https://wa.me/16135551111",
    // },
    // {
    //     type: "custom",
    //     group: "whatsapp",
    //     value: "+1 819 555 2222",
    //     href: "https://wa.me/18195552222",
    // },
    // Override du groupe EMAILS pour lui mettre une autre icône (facultatif)
    // {
    //     type: "email",
    //     groupLabel: "Emails",
    //     icons: <Mail className="h-5 w-5 text-neutral-700" />,
    //     value: "contact@veraup.com",
    //     // href sera auto "mailto:"
    // },
  ];

  return (
    <div className="w-full flex items-center justify-center bg-neutral-900/95 p-6">
      {/* Phone body */}
      <div className="min-h-screen w-[360px] max-w-[92vw] rounded-[38px] bg-neutral-50 shadow-[0_40px_120px_rgba(0,0,0,.55)] ring-1 ring-black/10 overflow-hidden">
        {/* Hero */}
        <div className="relative rounded-br-4xl overflow-hidden">
          <img src={profilImg} alt={"Profil Image"} className="h-[400px] w-full object-cover" />
          {/* Gradient bottom overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

          {/* Logo + CTA */}
          <div className="absolute top-8 left-5 right-5 flex items-center justify-between">
            <span className="bg-neutral-900 w-14 h-14 rounded-full flex justify-center items-center">
              <AppLogo width={5} />
            </span>

            {/*<MainButton title={ctaText} asType={"link"} href={'/products'} paddindClassYX={" py-2 px-1.5"}  />*/}
          </div>

          {/* Name + subtitle */}
          <div className="absolute bottom-5 left-5 right-5">
            <h1 className="text-white text-[28px] leading-7 font-black drop-shadow">
              {ucfirst(firstname) + " " + ucfirst(name)}
            </h1>
            <p className="mt-1 text-neutral-200 text-sm">{subtitle}</p>
          </div>
        </div>

        {/* Action buttons */}
        <div className="px-4 pb-3">
          <div className="mt-3 grid grid-cols-2 gap-3">
            <MainButton
              onClick={onSave}
              title={"Save"}
              asType={"link"}
              href={vcard_file ? ROOT_FILES_URL + "/" + vcard_file : "#"}
              paddindClassYX={" py-3 px-1.5"}
              customClassName={"!bg-neutral-900 text-yellow-600 font-bold"}
              icon={Save}
              iconClass={"h-6.5 w-6.5 p-1 rounded-full bg-yellow-800 text-black"}
            />

            <MainButton
              onClick={onExchange}
              title={"Exchange"}
              asType={"link"}
              href={"/products"}
              paddindClassYX={" py-3 px-1.5"}
              customClassName={"!bg-neutral-900 text-white"}
              icon={Share2}
              iconClass={"h-4 w-4"}
            />
          </div>
        </div>

        <SocialLinksCard title={"SOCIAL"} user={user} />

        <ContactInfoCard user={user} title="CONTACT" extraItems={extras} showChevron />

        <CustomizableLinksCard items={vinfo.urls} />

        <ImageGalleryCarousel
          images={[
            { src: "/images/gorman.jpg", alt: "Amanda Gorman" },
            { src: "/images/tower.jpg", alt: "Skyscraper" },
            { src: "/images/event.jpg", alt: "Conference" },
            { src: "/images/city.jpg", alt: "City" },
          ]}
          // loop pour slider infini
          options={{ loop: true, align: "start" }}
        />

        <BioCard text={vinfo.note.text} />
      </div>
    </div>
  );
};

export default ContactCard;
