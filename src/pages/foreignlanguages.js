import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import ForeignLanguages from "../components/ForeignLanguages";
// import CausesDetail from "../components/CausesDetail";
// import EventsDetail from "../components/EventsDetail";
// import EventsHome from "../components/EventsHome";
// import MakeWorldArea from "../components/MakeWorldArea";
// import GalleryCarousel from "../components/GalleryCarousel";
// import Donate from '../components/Donate';
// import Causes from "../components/Causes";
// import CausesArea from "../components/CausesArea";

const ForeignLanguagesPage = () => {
    return (
        <Layout pageTitle="GFL-TIC | Langues étrangères">
            <NavOne />
            <PageHeader title="Langues étrangères chez GFL-TIC" />
            <ForeignLanguages />
            {/* <Donate />
            <CausesDetail />
            <EventsDetail />
            <EventsHome />
            <MakeWorldArea />
            <GalleryCarousel /> */}
            
            <Footer />
        </Layout>
    );
};

export default ForeignLanguagesPage;
