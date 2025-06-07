import React from "react";
import { usePage } from "@inertiajs/react";
import AppLayout from "@/Layouts/AppLayout";

interface PageProps {
  auth: {
    user: any;
  };
  laravelVersion: string;
  phpVersion: string;
  canLogin: boolean;
  canRegister: boolean;
}

export default function Dashboard() {
  // @ts-ignore
  const { props } = usePage<PageProps>();
    // console.log(props)

    const { auth, laravelVersion, phpVersion, canLogin, canRegister } = props;
  return <AppLayout title="Dashboard"></AppLayout>;
}
