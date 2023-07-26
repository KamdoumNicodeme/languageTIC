import React from 'react';
import Layout from "../../components/Layout";
import NavOne from "../../components/NavOne";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";
import GermanA2 from "../../components/german/GermanA2";
import Map from "../../components/Map";

const GermanA2Page = () => {
    return (
        <Layout pageTitle="GFL-TIC | Langues étrangères">
            <NavOne />
            <PageHeader title="Allemand - Le Niveau Débutant (A2)" />
            <GermanA2 />
            <Map></Map>           
            <Footer />
        </Layout>
    );
};

export default GermanA2Page;
