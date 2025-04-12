import React, {useEffect} from 'react';
import Footer from "@/Components/_Partials/Footer";
import Banner from "@/Components/_Partials/Banner";
import {Head, usePage} from '@inertiajs/react';
import Header from "@/Components/_Partials/Header";
import TeamSection from "@/Components/_Partials/TeamSection";
import PrelineProviderLayout from "@/Layouts/PrelineProviderLayout";
interface PageProps {
    auth: {
        user: any;
    };
    laravelVersion: string;
    phpVersion: string;
    canLogin: boolean;
    canRegister: boolean;
}

export default function Welcome() {
    // @ts-ignore
    const {props} = usePage<PageProps>();
    const {auth, laravelVersion, phpVersion, canLogin, canRegister} = props;

    const page = usePage();


    return (
        <PrelineProviderLayout>
            <Head title="Welcome"/>
            <Header/>
            <Banner/>
            <TeamSection/>

            <Footer/>
        </PrelineProviderLayout>
    );
}
