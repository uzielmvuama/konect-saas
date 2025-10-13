import React from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import {Head, usePage} from "@inertiajs/react";
import { ucfirst } from "@/Utils/Functions/globals";
import ContactCard from "@/Components/_Partials/Vcard/ContactCard";
import { UserProfile } from "@/Types/types";
import {useShare} from "@/Hooks/useShare";

export default function Kuser({user, vcard_path, cover_path, avatar_path, meta}: {user: UserProfile; vcard_path: string; cover_path: string; avatar_path: string; meta: any;}) {
    const { share } = useShare();
    const [copied, setCopied] = React.useState(false);

    async function onShare(e: React.FormEvent) {
        e.preventDefault();
        const res = await share({ title:meta.title, text: meta.description, url: meta.url });
        console.log(meta)

        if (!res.native) {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
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
              onSave={(e) => {

              }}
              onShare={onShare}
            user={user}
              vcard_path={vcard_path}
              cover_path={cover_path}
              avatar_path={avatar_path}
            subtitle={"Graphisme et Design"}
            about="American actor, comedian, musician and writer..."
          />
        </div>
      </div>
    </GuestLayout>
  );
}
