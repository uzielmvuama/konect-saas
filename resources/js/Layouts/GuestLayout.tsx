import React from 'react';
import {Head} from '@inertiajs/react';
import PrelineProviderLayout from "@/Layouts/PrelineProviderLayout";
import Header from "@/Components/_Partials/Header";
import Footer from "@/Components/_Partials/Footer";

// import {initializePreline} from "@/preline-init";


interface Props {
    title?: string;
    showHeader?: boolean;
    showFooter?: boolean;
    children?: React.ReactNode;
}

export default function GuestLayout({title, children, showHeader = true, showFooter = true}: Props) {

    return (
        <PrelineProviderLayout>
            <Head title={title}/>
            {showHeader && <Header/>}
            {children}
            {showFooter && <Footer/>}
        </PrelineProviderLayout>
    );
}
