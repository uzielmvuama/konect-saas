import React from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { usePage } from "@inertiajs/react";
import { ucfirst } from "@/Utils/Functions/globals";
import ContactCard from "@/Components/_Partials/Vcard/ContactCard";
import { UserProfile } from "@/Types/types";

export default function Kuser({user, vcard_path}: {user: UserProfile; vcard_path: string;}) {
    return (
    <GuestLayout
      title={`Kuser - ${ucfirst(user.firstname)} ${ucfirst(user.name)}`}
      showFooter={false}
      showHeader={false}
      showChat={false}
    >
      <div className="flex justify-center">
        <div className="h-screen w-full">
          <ContactCard
              onSave={(e) => {

              }}
            user={user}
              vcard_path={vcard_path}
            subtitle={"Graphisme et Design"}
            about="American actor, comedian, musician and writer..."
          />
        </div>
      </div>
    </GuestLayout>
  );
}
