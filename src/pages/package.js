import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Map from "../components/Map";
import PackageArea from '../components/PackageArea';

const PackagePage = () => {
    return (
        <Layout pageTitle="GFL-TIC | Nos packages">
            <NavOne />
            <PageHeader title="Toutes les formations de GFL-TIC" />
            <PackageArea/>
            <Map></Map>          
            <Footer />
        </Layout>
    );
};

export default PackagePage;
