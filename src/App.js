import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Agenda from "./pages/Agenda";
import Mission from "./pages/Mission";
import Vision from "./pages/Vision";
import About from "./pages/About";
import CoreValues from "./pages/CoreValues";
import Organogram from "./pages/Organogram";
import Policy from "./pages/Policy";
import ProjectDetail from "./pages/ProjectDetail";
import CommunityBuilding from "./pages/CommunityBuilding";
import WomenEmpowerment from "./pages/WomenEmpowerment";
import EnvironmentArmour from "./pages/EnvironmentArmour";
import EducationInitiative from "./pages/EducationInitiative";
import RuralDevelopment from "./pages/RuralDevelopment";
import MentalHealth from "./pages/MentalHealth";
import HumanRights from "./pages/HumanRights";
import OldAgeOrphanage from "./pages/OldAgeOrphanage";
import SportsTrainingSupport from "./pages/SportsTrainingSupport";
import TrueEternalWorriors from "./pages/TrueEternalWorriors";
import TrainingSkillDevelopment from "./pages/TrainingSkillDevelopment";
import TrueWisdom from "./pages/TrueWisdom";
import VigourVitality from "./pages/VigourVitality";
import VoicelessSoulsProtection from "./pages/VoicelessSoulsProtection";
import CRM from "./pages/CRM";
import Dashboard from "./pages/Dashboard";
import ManageEmployee from "./pages/ManageEmployee";
import ManageEvent from "./pages/ManageEvent";
import ManageEvents from "./pages/ManageEvents";
import ManageFeedback from "./pages/ManageFeedback";
import ManageLeaves from "./pages/ManageLeaves";
import FAQ from "./pages/FAQ";
import Career from "./pages/Career";
import Management from "./pages/Management";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<div className="py-8 text-center">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/agenda" element={<Agenda />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/core-values" element={<CoreValues />} />
            <Route path="/organogram" element={<Organogram />} />
            <Route path="/policy" element={<Policy />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/projects/women-empowerment" element={<WomenEmpowerment />} />
            <Route path="/projects/environment-armour" element={<EnvironmentArmour />} />
            <Route path="/projects/education-initiative" element={<EducationInitiative />} />
            <Route path="/projects/mental-health" element={<MentalHealth />} />
            <Route path="/projects/rural-development" element={<RuralDevelopment />} />
            <Route path="/projects/human-right" element={<HumanRights />} />
            <Route path="/projects/old-age-orphanage-blind-home" element={<OldAgeOrphanage />} />
            <Route path="/projects/sports-training-support" element={<SportsTrainingSupport />} />
            <Route path="/projects/true-eternal-worriors" element={<TrueEternalWorriors />} />
            <Route path="/projects/training-and-skill-development" element={<TrainingSkillDevelopment />} />
            <Route path="/projects/true-wisdom" element={<TrueWisdom />} />
            <Route path="/projects/vigour-and-vitality" element={<VigourVitality />} />
            <Route path="/projects/voiceless-souls-protection" element={<VoicelessSoulsProtection />} />
            <Route path="/projects/community-building" element={<CommunityBuilding />} />
            <Route path="/crm" element={<CRM />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/manage-employee" element={<ManageEmployee />} />
            <Route path="/manage-event" element={<ManageEvent />} />
            <Route path="/manage-events" element={<ManageEvents />} />
            <Route path="/manage-feedback" element={<ManageFeedback />} />
            <Route path="/manage-leaves" element={<ManageLeaves />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/career" element={<Career />} />
            <Route path="/management" element={<Management />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
