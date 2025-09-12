import React from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { usePage } from "@inertiajs/react";
import { ucfirst } from "@/Utils/Functions/globals";
import ImagesVcard from "@/Components/_Partials/Vcard/ImagesVcard";
import GeneralVcard from "@/Components/_Partials/Vcard/GeneralVcard";

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
          <ImagesVcard />
            <br/>
            <GeneralVcard firstname={"Uziel"} name={"Mvuama"}/>
        </div>
      </div>
    </GuestLayout>
  );
}
