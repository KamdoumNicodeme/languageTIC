import React from 'react';
import Layout from "../../components/Layout";
import NavOne from "../../components/NavOne";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";
import Map from "../../components/Map";
import GermanTarif from '../../components/german/GermanTarifs';

const GermanA1Page = () => {
    return (
        <Layout pageTitle="GFL-TIC | Langues étrangères">
            <NavOne />
            <PageHeader title="Cours d'allemand - Nos tarifs" />
            <GermanTarif />
            <Map></Map>         
            <Footer />
        </Layout>
    );
};

export default GermanA1Page;
