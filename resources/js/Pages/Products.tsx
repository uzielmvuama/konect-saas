import React from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import NFCCard from "@/Components/Gadgets/Card/NFCCard";

export default function Products() {
  return (
    <GuestLayout title="Products">
      <div className="flex justify-center">
        <div className="max-w-6xl w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-3">
            <NFCCard
              bgColor="bg-white"
              firstname="Uziel"
              lastname="Mvuama"
              title="CEO Konect"
              link="/payment/card-details"
              iconColorClass="text-gray-800"
            />
            <NFCCard
              bgColor="bg-white"
              firstname="Uziel"
              lastname="Mvuama"
              title="CEO Konect"
              link="/payment/new-card-order-details"
              iconColorClass="text-gray-800"
              type="bottom"
            />
          </div>
        </div>
      </div>
    </GuestLayout>
  );
}
