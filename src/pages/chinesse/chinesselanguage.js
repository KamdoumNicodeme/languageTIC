import React from 'react';
import Layout from "../../components/Layout";
import NavOne from "../../components/NavOne";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";
import Detail from "../../components/chinesse/Detail";
import Map from "../../components/Map";

const ChinesselanguagePage = () => {
    return (
        <Layout pageTitle="GFL-TIC | Chinois - Langues étrangères">
            <NavOne />
            <PageHeader title="Apprenez le chinois chez nous" />
            <Detail />
                        <Map></Map>          

            <Footer />
        </Layout>
    );
};

export default ChinesselanguagePage;
