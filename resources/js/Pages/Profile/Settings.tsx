import React from "react";
import AppLayout from "@/Layouts/AppLayout";
import ProfilSettings from "@/Components/_Partials/Profil/ProfilSettings";
import { usePage } from "@inertiajs/react";

export default function Settings() {
  const { user } = usePage().props;

  return (
    <AppLayout title="Dashboard">
      <ProfilSettings user={user} />
    </AppLayout>
  );
}
