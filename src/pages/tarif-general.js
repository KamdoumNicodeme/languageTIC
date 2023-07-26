import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Map from "../components/Map";
import TarifGeneral from '../components/TarifGeneral';

const TarifGeneralPage = () => {
    return (
        <Layout pageTitle="GFL-TIC | Langues étrangères">
            <NavOne />
            <PageHeader title="GFL-TIC - Tous nos tarifs" />
             <TarifGeneral></TarifGeneral>
            <Map></Map>         
            <Footer />
        </Layout>
    );
};

export default TarifGeneralPage;
