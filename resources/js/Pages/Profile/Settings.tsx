import React from "react";
import AppLayout from "@/Layouts/AppLayout";
import ProfilSettings from "@/Components/_Partials/Profil/ProfilSettings";
import { usePage } from "@inertiajs/react";
import Breadcrumb from "@/Components/Breadcrumb/Breadcrumb";
import { AiFillHome } from "react-icons/ai";
import { TbArrowsLeftRight } from "react-icons/tb";
import { HiOutlineCog } from "react-icons/hi";

export default function Settings() {
  const { user } = usePage().props;

  return (
    <AppLayout title="Dashboard">
      <Breadcrumb
        items={[
          { name: "Accueil", href: "/", icon: <AiFillHome /> },
          { name: "Settings", icon: <HiOutlineCog /> },
        ]}
      />
      <ProfilSettings user={user} />
    </AppLayout>
  );
}
