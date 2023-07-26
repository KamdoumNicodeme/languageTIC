import React from 'react';
import Layout from "../../components/Layout";
import NavOne from "../../components/NavOne";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";
import Detail from "../../components/german/Detail";
import Map from "../../components/Map";

const GermanLanguagesPage = () => {
    return (
        <Layout pageTitle="GFL-TIC | Allemand - Langues étrangères">
            <NavOne />
            <PageHeader title="Apprenez l'allemand chez nous" />
            <Detail />
                        <Map></Map>          

            <Footer />
        </Layout>
    );
};

export default GermanLanguagesPage;
