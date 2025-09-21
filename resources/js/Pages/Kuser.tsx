import React from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { usePage } from "@inertiajs/react";
import { ucfirst } from "@/Utils/Functions/globals";
import ContactCard from "@/Components/_Partials/Vcard/ContactCard";

export default function Kuser() {
  const { user } = usePage().props as any;
  console.log(usePage().props.user);

  return (
    <GuestLayout
      title={`Kuser - ${ucfirst(user.firstname)}`}
      showFooter={false}
      showHeader={false}
      showChat={false}
    >
      <div className="flex justify-center">
        <div className="h-screen w-full">
          <ContactCard
            portraitUrl={"https://images.pexels.com/photos/3031397/pexels-photo-3031397.jpeg"}
            fullName={"Yoan" + " Delfy"}
            subtitle={"Graphisme et Design"}
            about="American actor, comedian, musician and writer..."
          />
        </div>
      </div>
    </GuestLayout>
  );
}
