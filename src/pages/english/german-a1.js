import React from 'react';
import Layout from "../../components/Layout";
import NavOne from "../../components/NavOne";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";
import GermanA1 from "../../components/german/GermanA1";
import Map from "../../components/Map";

const GermanA1Page = () => {
    return (
        <Layout pageTitle="GFL-TIC | Langues étrangères">
            <NavOne />
            <PageHeader title="Allemand - Le Niveau Préparatoire (A1)" />
            <GermanA1 />
            <Map></Map>          
            <Footer />
        </Layout>
    );
};

export default GermanA1Page;
