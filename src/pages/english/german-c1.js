import React from 'react';
import Layout from "../../components/Layout";
import NavOne from "../../components/NavOne";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";
import GermanC1 from "../../components/german/GermanC1";
import Map from "../../components/Map";
// import ForeignLanguages from "../components/ForeignLanguages";
// import GermanDetail from "../components/GermanDetail";
// import EventsHome from "../components/EventsHome";
// import Causes from "../components/Causes";
// import CausesArea from "../components/CausesArea";
// import MakeWorldArea from "../components/MakeWorldArea";
// import GalleryCarousel from "../components/GalleryCarousel";
// import Donate from '../components/Donate';

const GermanC1Page = () => {
    return (
        <Layout pageTitle="GFL-TIC | Langues étrangères">
            <NavOne />
            <PageHeader title="Allemand - Le Niveau Professionnel (C1)" />
            <GermanC1 />
            <Map></Map>          
            <Footer />
        </Layout>
    );
};

export default GermanC1Page;
