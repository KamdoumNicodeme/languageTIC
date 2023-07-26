import React from 'react';
import Layout from "../../components/Layout";
import NavOne from "../../components/NavOne";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";
import Detail from "../../components/italian/Detail";
import Map from "../../components/Map";

const ItalianlanguagePage = () => {
    return (
        <Layout pageTitle="GFL-TIC | Italien - Langues étrangères">
            <NavOne />
            <PageHeader title="Apprenez l'italien chez nous" />
            <Detail />
                        <Map></Map>          

            <Footer />
        </Layout>
    );
};

export default ItalianlanguagePage;
