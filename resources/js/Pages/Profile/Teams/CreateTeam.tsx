import React from "react";
import { usePage } from "@inertiajs/react";
import AppLayout from "@/Layouts/AppLayout";
import CreateTeamForm from "@/Pages/Profile/Teams/Partials/CreateTeamForm";

export default function CreateTeam() {
  // @ts-ignore
  const {
    auth: { user },
    jetstream,
  } = usePage().props as any;
  return (
    <AppLayout title="Create Company">
      <CreateTeamForm />
    </AppLayout>
  );
}
