import React from 'react';
import Layout from "../../components/Layout";
import NavOne from "../../components/NavOne";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";
import GermanB1 from "../../components/german/GermanB1";
import Map from "../../components/Map";

const GermanB1Page = () => {
    return (
        <Layout pageTitle="GFL-TIC | Langues étrangères">
            <NavOne />
            <PageHeader title="Allemand - Le Niveau Préparatoire (B1)" />
            <GermanB1 />
            <Map></Map>         
            <Footer />
        </Layout>
    );
};

export default GermanB1Page;
