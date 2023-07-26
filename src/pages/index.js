import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import Footer from "../components/Footer";
import SliderOne from "../components/SliderOne";
import VideoArea from "../components/EntryArea";
import ServiceArea from "../components/ServiceArea";
import OurFormationArea from "../components/CausesArea";
import TeamArea from "../components/TeamArea";
import ContactUsArea from "../components/CallToAction";
import NextReturnsArea from "../components/BlogHome";
import Map from "../components/Map";
import TarifsAndPackagesArea from "../components/CallToActionTwo";
import GalleryCarousel from '../components/GalleryCarousel';

// import News from "../components/News";
// import MixerAreaThree from "../components/MixerAreaThree";
// import MixerAreaTwo from "../components/MixerAreaTwo";
// import NavTwo from "../components/NavTwo";
// import NewsSingle from "../components/NewsSingle";
// import GiveArea from "../components/GiveArea";
// import MixerArea from "../components/MixerArea";
// import HiwArea from "../components/HiwArea";
// import ClientsLogo from "../components/ClientsLogo";
// import HelpingArea from "../components/HelpingArea";



const HomePage = () => {
    return (
        <Layout pageTitle="GFL-TIC  Go For Languages and TIC">
          <NavOne />
          <SliderOne />
          <VideoArea />
          <GalleryCarousel></GalleryCarousel>
          <OurFormationArea />

          {/* <HiwArea /> */}
          <ServiceArea />
          <TeamArea />
          <Map />
          {/* <MixerArea /> */}
          {/* <CausesArea /> */}
          <div className="section-divider"></div>
          {/* <ClientsLogo /> */}
          {/* <HelpingArea /> */}
          <ContactUsArea />
          <NextReturnsArea />
          <TarifsAndPackagesArea />
          {/* <hr></hr>
          <Layout></Layout>
          <News>
          </News>
          <MixerAreaThree></MixerAreaThree>
          <MixerAreaTwo></MixerAreaTwo>
          <NavOne></NavOne>
          <NavTwo></NavTwo>
          <NewsSingle></NewsSingle>
          <GiveArea></GiveArea> */}

          <Footer />
        </Layout>
    );
};

export default HomePage;
