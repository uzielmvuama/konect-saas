import React from "react";
import ConnectionsList from "@/Components/Connection/ConnectionsList";
import AppLayout from "@/Layouts/AppLayout";
import Breadcrumb from "@/Components/Breadcrumb/Breadcrumb";
import { TbArrowsLeftRight } from "react-icons/tb";
import { AiFillHome } from "react-icons/ai";

interface ConnectionsProps {
  user: any;
}

const Connections: React.FC<ConnectionsProps> = ({ user }) => {
  return (
    <AppLayout>
      <Breadcrumb
        items={[
          { name: "Accueil", href: "/", icon: <AiFillHome /> },
          { name: "Connections", icon: <TbArrowsLeftRight /> },
        ]}
      />
      <ConnectionsList initialDisplayType={"grid"} konects={user.konects} />
    </AppLayout>
  );
};

export default Connections;
