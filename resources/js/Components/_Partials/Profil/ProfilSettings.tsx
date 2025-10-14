import React from "react";
import { TbBoxMultiple, TbLinkPlus, TbShieldLock, TbUser } from "react-icons/tb";
import GeneralSettings from "@/Components/_Partials/Profil/Settings/GeneralSettings";
import SocialInformationsSettings from "@/Components/_Partials/Profil/Settings/SocialInformationsSettings";
import SecuritySettings from "@/Components/_Partials/Profil/Settings/SecuritySettings";
import MediaSettings from "@/Components/_Partials/Profil/Settings/MediaSettings";
import ImageCropper from "@/Components/Image/ImageCropper";
import { usePage } from "@inertiajs/react";
import CoverUploader from "@/Components/Image/CoverUploader";
import AvatarUploader from "@/Components/Image/AvatarUploader";

interface ProfilSettingsProps {
  user: any;
}

const ProfilSettings: React.FC<ProfilSettingsProps> = ({ user }) => {
  const navs = [
    {
      name: "My Profile",
      icon: <TbUser />,
    },
    {
      name: "Email et Réseaux Sociaux",
      icon: <TbLinkPlus />,
    },
    {
      name: "Photos et Vidéos",
      icon: <TbBoxMultiple />,
    },
    {
      name: "Security & Password",
      icon: <TbShieldLock />,
    },
  ];

  const [currentTab, setCurrentTab] = React.useState<number>(0);
  const { medias, sftp_root_path } = usePage().props as any;
  // console.log(medias, sftp_root_path)

  // useEffect(() => {
  //     initializePreline();
  // }, []);

  return (
    <>
      <div className="mb-4">
        <div className="p-3 md:p-5 bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
          <div className="space-y-6">
            {/* Cover */}
            <CoverUploader
              initialCover={medias.cover ? (medias.cover.urls.thumb ?? null) : null}
              sftpRootPath={sftp_root_path}
            />

            {/* Avatar */}
            <AvatarUploader
              initialImage={medias.avatar ? medias.avatar.urls.thumb : null}
              sftpRootPath={sftp_root_path}
              user={user}
            />
          </div>

          {/* Header */}
          <div className="mt-4 md:mt-7 -mb-0.5 flex flex-col md:flex-row md:justify-between md:items-center gap-3">
            {/* Nav */}
            <div
              className="relative flex justify-center md:justify-start"
              data-hs-scroll-nav='{
        "autoCentering": true
      }'
            >
              <nav className="hs-scroll-nav-body flex flex-nowrap gap-x-1 overflow-x-auto [&::-webkit-scrollbar]:h-0 snap-x snap-mandatory pb-1.5">
                {navs.map((nav, index) => (
                  <span
                    key={index}
                    className={`cursor-pointer snap-start relative inline-flex flex-nowrap items-center gap-x-2 px-2.5 py-1.5 hover:bg-gray-100 text-gray-500 hover:text-gray-800 text-sm whitespace-nowrap rounded-lg disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 after:absolute after:-bottom-0.5 after:inset-x-0 after:z-10 after:w-1/4 after:h-0.5 after:rounded-full after:mx-auto after:pointer-events-none dark:text-neutral-500 dark:hover:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 ${currentTab == index && "bg-gray-100 bg-neutral-700 !text-gray-200 !dark:text-neutral-100"}`}
                    onClick={() => setCurrentTab(index)}
                  >
                    {nav.icon}
                    {nav.name}
                  </span>
                ))}
              </nav>
            </div>
            {/* End Nav */}
          </div>
          {/* End Header */}
        </div>

        {/* End User Profile Card */}
      </div>
      <div>
        {currentTab == 0 && <GeneralSettings />}
        {currentTab == 1 && <SocialInformationsSettings user={user} />}
        {currentTab == 2 && <MediaSettings />}
        {currentTab == 3 && <SecuritySettings />}
      </div>
      {}
    </>
  );
};

export default ProfilSettings;
