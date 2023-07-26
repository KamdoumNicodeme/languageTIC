import React from 'react';
import Layout from "../../components/Layout";
import NavOne from "../../components/NavOne";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";
import Map from "../../components/Map";
import GermanReturn from '../../components/german/GermanReturn';

const GermanA1Page = () => {
    return (
        <Layout pageTitle="GFL-TIC | Langues étrangères">
            <NavOne />
            <PageHeader title="Nos rentrées de cours d'allemand" />
            <GermanReturn />
            <Map></Map>         
            <Footer />
        </Layout>
    );
};

export default GermanA1Page;
