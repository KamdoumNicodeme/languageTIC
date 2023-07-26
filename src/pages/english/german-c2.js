import React from 'react';
import Layout from "../../components/Layout";
import NavOne from "../../components/NavOne";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";
import GermanC2 from "../../components/german/GermanC2";
import Map from "../../components/Map";

const GermanC2Page = () => {
    return (
        <Layout pageTitle="GFL-TIC | Langues étrangères">
            <NavOne />
            <PageHeader title="Allemand - Le Niveau Expert (C2)" />
            <GermanC2 />
            <Map></Map>          
            <Footer />
        </Layout>
    );
};

export default GermanC2Page;
