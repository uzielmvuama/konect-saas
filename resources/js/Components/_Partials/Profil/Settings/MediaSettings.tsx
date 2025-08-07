import React, { FormEvent, useRef } from "react";
import SettingsLayout from "@/Layouts/SettingsLayout";
import { useForm, usePage } from "@inertiajs/react";
import LoginHistoryCard from "@/Components/Cards/LoginHistoryCard";
import SecureConfirmDialog from "@/Components/ButtonModals/ButtonSecureConfirmDialog";
import FormError from "@/Components/Errors/FormError";
import MainButton from "@/Components/Buttons/MainButton";

interface MediaSettingsProps {
    // Props ici
}

const MediaSettings: React.FC<MediaSettingsProps> = (props) => {
    return (
        <SettingsLayout title={"Photos et Vidéos"} description={"Manage your name, password and account settings."}>

        </SettingsLayout>
    );
};

export default MediaSettings;
