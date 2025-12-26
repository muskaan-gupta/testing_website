import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Agenda from "./pages/Agenda";
import Mission from "./pages/Mission";
import Vision from "./pages/Vision";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import About from "./pages/About";
import CoreValues from "./pages/CoreValues";
import Organogram from "./pages/Organogram";
import Policy from "./pages/Policy";
import ProjectDetail from "./pages/ProjectDetail";
import CommunityBuilding from "./pages/CommunityBuilding";
import WomenEmpowerment from "./pages/WomenEmpowerment";
import EnvironmentArmour from "./pages/EnvironmentArmour";
import EducationInitiative from "./pages/EducationInitiative";
import HealthcareAccess from "./pages/HealthcareAccess";
import RuralDevelopment from "./pages/RuralDevelopment";
import ChildWelfare from "./pages/ChildWelfare";
import SeniorCare from "./pages/SeniorCare";
import SkillDevelopment from "./pages/SkillDevelopment";
import DigitalLiteracy from "./pages/DigitalLiteracy";
import CleanWater from "./pages/CleanWater";
import FoodSecurity from "./pages/FoodSecurity";
import DisasterRelief from "./pages/DisasterRelief";
import MentalHealth from "./pages/MentalHealth";
import CRM from "./pages/CRM";
import FAQ from "./pages/FAQ";
import Career from "./pages/Career";
import Management from "./pages/Management";
import Contact from "./pages/Contact";

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
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:id" element={<CourseDetail />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/core-values" element={<CoreValues />} />
            <Route path="/organogram" element={<Organogram />} />
            <Route path="/policy" element={<Policy />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/projects/women-empowerment" element={<WomenEmpowerment />} />
            <Route path="/projects/environment-armour" element={<EnvironmentArmour />} />
            <Route path="/projects/education-initiative" element={<EducationInitiative />} />
            <Route path="/projects/healthcare-access" element={<HealthcareAccess />} />
            <Route path="/projects/rural-development" element={<RuralDevelopment />} />
            <Route path="/projects/child-welfare" element={<ChildWelfare />} />
            <Route path="/projects/senior-care" element={<SeniorCare />} />
            <Route path="/projects/skill-development" element={<SkillDevelopment />} />
            <Route path="/projects/digital-literacy" element={<DigitalLiteracy />} />
            <Route path="/projects/clean-water" element={<CleanWater />} />
            <Route path="/projects/food-security" element={<FoodSecurity />} />
            <Route path="/projects/disaster-relief" element={<DisasterRelief />} />
            <Route path="/projects/mental-health" element={<MentalHealth />} />
            <Route path="/projects/community-building" element={<CommunityBuilding />} />
            <Route path="/crm" element={<CRM />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/career" element={<Career />} />
            <Route path="/management" element={<Management />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
