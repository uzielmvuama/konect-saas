import React, { useEffect, useState } from "react";
import InputWithIconImage from "@/Components/Input/InputWithIconImage";

interface SocialLinks {
  [key: string]: { uri: string; type: string };
}

interface SocialsLinkManagerProps {
  value: SocialLinks;
  onChange: (value: SocialLinks) => void;
}

const SocialsLinkManager: React.FC<SocialsLinkManagerProps> = ({ value, onChange }) => {
  const [socialLinks, setSocialLinks] = useState<SocialLinks>(value);

  useEffect(() => {
    onChange(socialLinks);
  }, [socialLinks]);

  const handleSocialChange = (name: string, val: string) => {
    setSocialLinks((prev) => ({
      ...prev,
      [name.split("-")[1]]: { uri: val, type: name.split("-")[1] },
    }));
  };

  return (
    <div>
      {/* Social Accounts */}
      <div className="py-6 sm:py-8 space-y-5 border-t border-gray-200 first:border-t-0 dark:border-neutral-700">
        <h2 className="font-semibold text-gray-800 dark:text-neutral-200">Social accounts</h2>
        {/* Grid */}
        <div className="grid sm:grid-cols-12 gap-y-1.5 sm:gap-y-0 sm:gap-x-5">
          <div className="sm:col-span-4 xl:col-span-3 2xl:col-span-2">
            <label
              htmlFor="hs-pro-dapsaurl"
              className="sm:mt-2.5 inline-block text-sm text-gray-500 dark:text-neutral-500"
            >
              URL
            </label>
          </div>
          {/* End Col */}
          <div className="sm:col-span-8 xl:col-span-8">
            <div className="grid md:grid-cols-2 col-1 gap-x-4 gap-y-2">
              <InputWithIconImage
                placeholder={"www.facebook.com/user"}
                iconSrc={"https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Blue-Logo.wine.svg"}
                name={"social-facebook"}
                value={socialLinks.facebook.uri}
                onChange={handleSocialChange}
                iconClassName="scale-[1.8]"
              />
              <InputWithIconImage
                placeholder={"www.instagram.com/user"}
                iconSrc={
                  "https://www.logo.wine/a/logo/Instagram/Instagram-Glyph-Color-Logo.wine.svg"
                }
                name={"social-instagram"}
                value={socialLinks.instagram.uri}
                onChange={handleSocialChange}
                iconClassName="scale-[1.8]"
              />
              <InputWithIconImage
                placeholder={"www.twitter.com/user"}
                iconSrc={
                  "https://images.seeklogo.com/logo-png/49/2/twitter-x-logo-png_seeklogo-492396.png"
                }
                name={"social-twitter"}
                value={socialLinks.twitter.uri}
                onChange={handleSocialChange}
                iconClassName="scale-[1.6]"
              />
              <InputWithIconImage
                placeholder={"www.linkedin.com/user"}
                iconSrc={"https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg"}
                name={"social-linkedin"}
                value={socialLinks.linkedin.uri}
                onChange={() => {}}
                iconClassName="scale-[1.3]"
              />
              <InputWithIconImage
                placeholder={"www.youtube.com/user"}
                iconSrc={
                  "https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg"
                }
                name={"social-youtube"}
                value={socialLinks.youtube.uri}
                onChange={handleSocialChange}
                iconClassName="scale-[1.3]"
              />
              <InputWithIconImage
                placeholder={"www.tiktok.com/user"}
                iconSrc={"https://www.logo.wine/a/logo/TikTok/TikTok-Icon-Logo.wine.svg"}
                name={"social-tiktok"}
                value={socialLinks.tiktok.uri}
                onChange={handleSocialChange}
                iconClassName="scale-[1.7]"
              />
              <InputWithIconImage
                placeholder={"www.pinterest.com/user"}
                iconSrc={"https://www.logo.wine/a/logo/Pinterest/Pinterest-Icon-Logo.wine.svg"}
                name={"social-pinterest"}
                value={socialLinks.pinterest.uri}
                onChange={handleSocialChange}
                iconClassName="scale-[1.8]"
              />
            </div>
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Social Accounts */}
    </div>
  );
};

export default SocialsLinkManager;
