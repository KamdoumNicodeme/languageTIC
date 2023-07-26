import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
// import Contact from "../components/Contact";
import Contact from "../components/ContactMail";
import Map from "../components/Map";


const ContactPage = () => {
    return (
        <Layout pageTitle="GFL-TIC | Nous contacter">
            <NavOne />
            <PageHeader title="Nous contacter" />
            <Contact />
            <Map />
            <Footer />
        </Layout>
    );
};

export default ContactPage;
