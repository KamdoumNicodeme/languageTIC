import React from 'react';
import Layout from "../../components/Layout";
import NavOne from "../../components/NavOne";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";
import Detail from "../../components/english/Detail";
import Map from "../../components/Map";

const EnglishlanguagesPage = () => {
    return (
        <Layout pageTitle="GFL-TIC | Anglais - Langues étrangères">
            <NavOne />
            <PageHeader title="Apprenez l'anglais chez nous" />
            <Detail />
             <Map></Map>          

            <Footer />
        </Layout>
    );
};

export default EnglishlanguagesPage;
