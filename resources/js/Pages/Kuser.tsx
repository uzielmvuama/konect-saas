import React from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import {Head, router, usePage} from "@inertiajs/react";
import {ucfirst} from "@/Utils/Functions/globals";
import ContactCard from "@/Components/_Partials/Vcard/ContactCard";
import {UserProfile} from "@/Types/types";
import {useShare} from "@/Hooks/useShare";
import axios from "axios";
import KonectFeeback from "@/Components/_Partials/KonectFeeback";

export default function Kuser({
  user,
  vcard_path,
  cover_path,
  avatar_path,
  meta,
}: {
  user: UserProfile;
  vcard_path: string;
  cover_path: string;
  avatar_path: string;
  meta: any;
}) {
  const { share } = useShare();
  const [isLoading, setIsLoading] = React.useState(false);
    const [showFeedback, setShowFeedback] = React.useState(false);
    const [copied, setCopied] = React.useState(false);
    const props_ = usePage().props as unknown as any;
    const ROOT_FILES_URL = props_.sftp_root_path as string;
  async function onShare(e: React.FormEvent) {
    e.preventDefault();
    const res = await share({ title: meta.title, text: meta.description, url: meta.url });


    if (!res.native) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

    async function onSave(e: React.FormEvent) {
        e.preventDefault();
        setIsLoading(true);
        try {
            // Téléchargement du vCard
            window.location.assign(vcard_path ? ROOT_FILES_URL + "/" + vcard_path : "#");

            // Ajout côté backend
            await axios.post("/add-konect", { uuid: user.uuid, way: 1 });

            // Ouvre la modale feedback
            setShowFeedback(true);
        } catch (error) {
            console.error(error);
            // (optionnel) notifier l'erreur
        } finally {
            setIsLoading(false);
        }
    }

    async function onContactFeed({ firstname, name, email, phone, comment } : { firstname: string, name: string, email: string, phone: string, comment: string }) {
        await axios.post("/add-feed/" + user.uuid, {
            uuid: user.uuid,
            firstname,
            name,
            email,
            phone,
            comment
        });
    }
  return (
    <GuestLayout
      title={`Kuser - ${ucfirst(user.firstname)} ${ucfirst(user.name)}`}
      showFooter={false}
      showHeader={false}
      showChat={false}
    >
      <Head title={meta.title}>
        <meta name="description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
        <meta property="og:url" content={meta.url} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="flex justify-center">
        <div className="h-screen w-full">
          <ContactCard
            onSave={onSave}
            onShare={onShare}
            user={user}
            vcard_path={vcard_path}
            cover_path={cover_path}
            avatar_path={avatar_path}
            subtitle={"Graphisme et Design"}
            about="American actor, comedian, musician and writer..."
          />

            <KonectFeeback
                open={showFeedback}
                onClose={() => setShowFeedback(false)}
                defaultFirstname={""}
                defaultName={""}
                defaultEmail={""}
                defaultPhone={""}
                onSubmit={onContactFeed}
            />
        </div>
      </div>
    </GuestLayout>
  );
}
