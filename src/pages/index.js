import React from 'react';
import 'swiper/swiper-bundle.min.css';
import 'rc-drawer/assets/index.css';
import 'react-modal-video/css/modal-video.min.css';

import { StickyProvider } from 'contexts/app/app.provider';
import SEO from 'components/seo';
import Layout from 'components/layout';

import Banner from 'sections/banner';
import Services from 'sections/services';
import Testimonials from 'sections/testimonials';
import CustomerSupport from 'sections/customer-support';
import Feature from 'sections/feature';
// import VideoOne from 'sections/video-one';
import CallToAction from 'sections/call-to-action';
import BoostAgencies from 'sections/boost-agencies';

export default function IndexPage() {
  return (
    <StickyProvider>
      <Layout>
        <SEO
          description="Work on Real world projects with Real clients for Real money"
          title="Deepockets"
        />
        <Banner />
        <Services />
        <BoostAgencies />
        {/* <VideoOne /> */}
        <Testimonials />
        <CustomerSupport />
        <Feature />
        <CallToAction />
      </Layout>
    </StickyProvider>
  );
}
