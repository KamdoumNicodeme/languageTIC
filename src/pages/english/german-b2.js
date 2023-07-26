import React from 'react';
import Layout from "../../components/Layout";
import NavOne from "../../components/NavOne";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";
import GermanB2 from "../../components/german/GermanB2";
import Map from "../../components/Map";
// import ForeignLanguages from "../components/ForeignLanguages";
// import GermanDetail from "../components/GermanDetail";
// import EventsHome from "../components/EventsHome";
// import Causes from "../components/Causes";
// import CausesArea from "../components/CausesArea";
// import MakeWorldArea from "../components/MakeWorldArea";
// import GalleryCarousel from "../components/GalleryCarousel";
// import Donate from '../components/Donate';

const GermanB2Page = () => {
    return (
        <Layout pageTitle="GFL-TIC | Langues étrangères">
            <NavOne />
            <PageHeader title="Allemand - Le Niveau Intermédiaire (B2)" />
            <GermanB2 />
            <Map></Map>
           
            <Footer />
        </Layout>
    );
};

export default GermanB2Page;
