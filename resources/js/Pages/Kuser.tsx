import React from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { usePage } from "@inertiajs/react";
import { ucfirst } from "@/Utils/Functions/globals";
import ContactCard from "@/Components/_Partials/Vcard/ContactCard";
import {UserProfile} from "@/Types/types";

export default function Kuser() {
  const user= usePage().props.user as unknown as UserProfile;
    console.log(user.vinfo)

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
              user={user}
            portraitUrl={"https://images.pexels.com/photos/3031397/pexels-photo-3031397.jpeg"}
            subtitle={"Graphisme et Design"}
            about="American actor, comedian, musician and writer..."
          />
        </div>
      </div>
    </GuestLayout>
  );
}
