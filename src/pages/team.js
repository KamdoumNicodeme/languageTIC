import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Team from "../components/Team";
import TeamArea from '../components/TeamArea';

const TeamPage = () => {
    return (
        <Layout pageTitle="GFL-TIC | Team">
            <NavOne />
            <PageHeader title="Notre équipe" />
            <TeamArea></TeamArea>
            {/* <Team /> */}
            <Footer />
        </Layout>
    );
};

export default TeamPage;
