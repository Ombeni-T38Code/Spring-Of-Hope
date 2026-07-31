import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './page/Home/Home';

// Core Parent Landing Hubs
import AboutUs from './page/AboutUs/AboutUs';
import WhatWeDo from './page/WhatWeDo/WhatWeDo';
import WhereWeWork from './page/WhereWeWork/WhereWeWork';
import OurImpact from './page/OurImpact/OurImpact';
import GetInvolved from './page/GetInvolved/GetInvolved';
import Donate from './page/Donate/Donate';

// Sub-Pages: About Us
import OurMission from './page/AboutUs/OurMission';
import TeamGovernance from './page/AboutUs/TeamGovernance';

// Sub-Pages: What We Do
import Livelihoods from './page/WhatWeDo/Livelihoods';
import OldEducationHubs from './page/WhatWeDo/EducationHubs';
import Healthcare from './page/WhatWeDo/Healthcare'; 
import Environment from './page/WhatWeDo/Environment';

// Sub-Pages: Our Impact
import MetricsData from './page/OurImpact/MetricsData';
import SuccessStories from './page/OurImpact/SuccessStories';

// Sub-Pages: Get Involved
import WaysToJoin from './page/GetInvolved/WaysToJoin';
import PartnerRegister from './page/GetInvolved/PartnerRegister';

// Scroll Management Component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { 
    window.scrollTo(0, 0); 
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div style={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column', }}>
        <Navbar />
        
        <div style={{ flex: '1 0 auto' }}>
          <Routes>
            {/* Core Route Anchor */}
            <Route path="/" element={<Home />} />
            
            {/* Parent Route Anchors */}
            <Route path="/about" element={<AboutUs />} />
            <Route path="/what-we-do" element={<WhatWeDo />} />
            <Route path="/where-we-work" element={<WhereWeWork />} />
            <Route path="/impact" element={<OurImpact />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/donate" element={<Donate />} />

            {/* About Us Sub-Branches */}
            <Route path="/about/mission" element={<OurMission />} />
            <Route path="/about/team" element={<TeamGovernance />} />

            {/* What We Do Sub-Branches */}
            <Route path="/what-we-do/education" element={<OldEducationHubs />} />
            <Route path="/what-we-do/livelihoods" element={<Livelihoods />} />
            <Route path="/what-we-do/healthcare" element={<Healthcare />} />
            <Route path="/what-we-do/environment" element={<Environment />} />

            {/* Our Impact Sub-Branches */}
            <Route path="/impact/metrics" element={<MetricsData />} />
            <Route path="/impact/stories" element={<SuccessStories />} />

            {/* Get Involved Sub-Branches */}
            <Route path="/get-involved/join" element={<WaysToJoin />} />
            <Route path="/get-involved/register" element={<PartnerRegister />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;