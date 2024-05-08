import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import Button from '../components/Button';
import Cta from '../components/Cta';
import Div from '../components/Div';
import Layout from '../components/Layout';
import PageHeading from '../components/PageHeading';
import SectionHeading from '../components/SectionHeading';
import Spacing from '../components/Spacing';

export default function Projects() {
  const router = useRouter();
  const portfolioId = router.query.portfolioId;
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <PageHeading
          title="Projects"
          bgSrc="/images/service_hero_bg.jpeg"
          pageLinkText="Projects"
        />
        <Spacing lg="150" md="80" />
        <Div className="container">
          <img
            src="/images/portfolio_details_1.jpeg"
            alt="Details"
            className="cs-radius_15 w-100"
          />
          <Spacing lg="90" md="40" />
          <Div className="row">
            <Div className="col-lg-6">
              <SectionHeading title="Jamii Tours" subtitle="Creative">
                <Spacing lg="40" md="20" />
                <p>
                  Project that involved modifying their website and doing graphic design and their posters to. 
                </p>
                <Spacing lg="10" md="10" />
               {/*  <p>
                  Ipsum quia dolor sit amet, consectetur, adipisci velit, sed
                  quia non numquam eius modi tempora incidunt ut labore et
                  dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
                  veniam, quis nostrum exercitationem ullam corporis suscipit.
                </p> */}
              </SectionHeading>
            </Div>
            <Div className="col-lg-5 offset-lg-1">
              <Spacing lg="60" md="40" />
              <h2 className="cs-font_30 cs-font_26_sm cs-m0">Project Info -</h2>
              <Spacing lg="50" md="30" />
              <Div className="row">
                <Div className="col-6">
                  <h3 className="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">
                    Category:
                  </h3>
                  <p className="cs-m0">Web design || Social media marketing</p>
                  <Spacing lg="30" md="30" />
                </Div>
                <Div className="col-6">
                  <h3 className="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">
                    Location:
                  </h3>
                  <p className="cs-m0">Nairobi</p>
                  <Spacing lg="30" md="30" />
                </Div>
                {/* <Div className="col-6">
                  <h3 className="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">
                    Software:
                  </h3>
                  <p className="cs-m0"></p>
                  <Spacing lg="30" md="30" />
                </Div> */}
                <Div className="col-6">
                  <h3 className="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">
                    Dated:
                  </h3>
                  <p className="cs-m0">14-Aug-2022</p>
                  <Spacing lg="30" md="30" />
                </Div>
                <Div className="col-6">
                  <h3 className="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">
                    Client:
                  </h3>
                  <p className="cs-m0">Jamii Tours</p>
                  <Spacing lg="30" md="30" />
                </Div>
              </Div>
            </Div>
          </Div>
          <Spacing lg="65" md="10" />
          <Div className="cs-page_navigation cs-center">
            <Div>
              <Button
                btnLink="/portfolio/portfolio-details"
                btnText="Prev Project"
                variant="cs-type1"
              />
            </Div>
            <Div>
              <Button
                btnLink="/portfolio/portfolio-details"
                btnText="Next Project"
              />
            </Div>
          </Div>
        </Div>
        <Spacing lg="145" md="80" />
        <Cta
          title="agency@arino.com"
          bgSrc="/images/cta_bg_2.jpeg"
          variant="rounded-0"
        />
      </Layout>
    </>
  );
}