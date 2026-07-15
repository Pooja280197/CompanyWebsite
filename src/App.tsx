import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SiteLayout from './layouts/SiteLayout';
import HomePage from './pages/HomePage';
import {
  BrandStrategyService,
  WebDevelopmentService,
  CustomSoftware,
  DigitalMarketingService,
  UiUxDesignService,
  AnalyticsService,
  MobileAppsService,
  AiSolutionsService,
  CloudServicesService,
  EcommerceService,
  SeoService,
  ConsultingService,
  DevopsService,
  MaintenanceSupportService,
  SalesforceService,
} from './components/service-pages';
import StaffAugmentation from './components/pillars/StaffAugmentation';
import CloudAndDevops from './components/pillars/CloudAndDevops';
import AIandData from './components/pillars/AIandData';
import ProductEngineering from './components/pillars/ProductEngineering';
import RexoERP from './components/products/RexoErp';
import CleanPlan from './components/products/CleanPlan';
import EducationERP from './components/products/EducationErp';
import ShowTimeBro from './components/products/ShowTimeBro';
import OurProducts from './components/products/OurProducts';
import CaseStudySmartFactory from './components/caseStudies/CaseStudySmartFactory';
import DiamondSimilarity from './components/caseStudies/DiamondSimilarity';
import CloudOptimization from './components/caseStudies/CloudOptimization';
import DataPipeline from './components/caseStudies/DataPipeline';
import RetailAiTeam from './components/caseStudies/RetailAiTeam';
import HealthcareModernization from './components/caseStudies/HealthcareModernization';
import IndustryHealthcare from './components/industries/HealthCare';
import ManufacturingDevOps from './components/caseStudies/ManufacturingDevops';
import AboutUs from './components/AboutUs';
import IndustryManufacturing from './components/industries/Manufacturing';
import IndustryFinance from './components/industries/Finance';
import IndustryEcommerce from './components/industries/Ecommerce';
import IndustryRealEstate from './components/industries/RealEstate';
import IndustryTravel from './components/industries/Travel';
import Contact from './components/ContactUs';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import Career from './components/Career';
import OurWorkHub from './components/caseStudies/OurWorkHub';
import Sports from './components/industries/Sports';
import IndustryEducation from './components/industries/Education';
import IndustriesHub from './components/industries/IndustriesHub';

export default function App() {
  return (
    <BrowserRouter>
      <SiteLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />

          {/* Pillars */}
          <Route path="/product-engineering" element={<ProductEngineering />} />
          <Route path="/ai-data" element={<AIandData />} />
          <Route path="/cloud-devops" element={<CloudAndDevops />} />
          <Route path="/staff-augmentation" element={<StaffAugmentation />} />

          {/* Services */}
          <Route path="/custom-software-development" element={<CustomSoftware />} />
          <Route path="/web-development-and-design" element={<WebDevelopmentService />} />
          <Route path="/mobile-app-development" element={<MobileAppsService />} />
          <Route path="/ui-ux-design" element={<UiUxDesignService />} />
          <Route path="/ai-ml-development-services" element={<AiSolutionsService />} />
          <Route path="/data-science-and-analytics" element={<AnalyticsService />} />
          <Route path="/iot-solutions" element={<ConsultingService />} />
          <Route path="/cloud-solutions" element={<CloudServicesService />} />
          <Route path="/devops-development" element={<DevopsService />} />
          <Route path="/software-maintenance-support" element={<MaintenanceSupportService />} />
          <Route path="/salesforce-development" element={<SalesforceService />} />

          {/* Legacy services still publicly linked historically */}
          <Route path="/services/brand-strategy" element={<BrandStrategyService />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketingService />} />
          <Route path="/services/ecommerce" element={<EcommerceService />} />
          <Route path="/services/seo" element={<SeoService />} />

          {/* Products */}
          <Route path="/rexo-erp" element={<RexoERP />} />
          <Route path="/cleanplan" element={<CleanPlan />} />
          <Route path="/erp-solutions-for-education" element={<EducationERP />} />
          <Route path="/showtimebro" element={<ShowTimeBro />} />
          <Route path="/our-products" element={<OurProducts />} />

          {/* Case studies */}
          <Route path="/our-work" element={<OurWorkHub />} />
          <Route path="/our-work/smart-factory-iot" element={<CaseStudySmartFactory />} />
          <Route path="/our-work/diamond-similarity-ai" element={<DiamondSimilarity />} />
          <Route path="/our-work/cloud-optimization" element={<CloudOptimization />} />
          <Route path="/our-work/enterprise-data-pipeline" element={<DataPipeline />} />
          <Route path="/our-work/retail-ai-team" element={<RetailAiTeam />} />
          <Route path="/our-work/manufacturing-devops" element={<ManufacturingDevOps />} />
          <Route path="/our-work/healthcare-patient-management" element={<HealthcareModernization />} />

          {/* Industries */}
          <Route path="/industries" element={<IndustriesHub />} />
          <Route path="/industries/healthcare-software-development" element={<IndustryHealthcare />} />
          <Route path="/industries/manufacturing-software-solutions" element={<IndustryManufacturing />} />
          <Route path="/industries/education-software-development" element={<IndustryEducation />} />
          <Route path="/industries/fintech-software-development" element={<IndustryFinance />} />
          <Route path="/industries/ecommerce-development" element={<IndustryEcommerce />} />
          <Route path="/industries/real-estate-software-development" element={<IndustryRealEstate />} />
          <Route path="/industries/travel-software-development" element={<IndustryTravel />} />
          <Route path="/industries/sports-software-development" element={<Sports />} />

          {/* Company */}
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/careers" element={<Career />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />

          {/* ── Old → new redirects ── */}
          <Route path="/whatWeDo/productEngineering" element={<Navigate to="/product-engineering" replace />} />
          <Route path="/whatWeDo/ai-and-data" element={<Navigate to="/ai-data" replace />} />
          <Route path="/whatWeDo/cloud-and-devops" element={<Navigate to="/cloud-devops" replace />} />
          <Route path="/whatWeDo/staffAugmentation" element={<Navigate to="/staff-augmentation" replace />} />

          <Route path="/services/custom-software" element={<Navigate to="/custom-software-development" replace />} />
          <Route path="/services/web-development" element={<Navigate to="/web-development-and-design" replace />} />
          <Route path="/services/mobile-apps" element={<Navigate to="/mobile-app-development" replace />} />
          <Route path="/services/ui-ux-design" element={<Navigate to="/ui-ux-design" replace />} />
          <Route path="/services/ai-solutions" element={<Navigate to="/ai-ml-development-services" replace />} />
          <Route path="/services/analytics" element={<Navigate to="/data-science-and-analytics" replace />} />
          <Route path="/services/consulting" element={<Navigate to="/iot-solutions" replace />} />
          <Route path="/services/cloud-services" element={<Navigate to="/cloud-solutions" replace />} />
          <Route path="/services/devops" element={<Navigate to="/devops-development" replace />} />
          <Route path="/services/maintenance-support" element={<Navigate to="/software-maintenance-support" replace />} />
          <Route path="/services/salesforce" element={<Navigate to="/salesforce-development" replace />} />

          <Route path="/product/rexo-erp" element={<Navigate to="/rexo-erp" replace />} />
          <Route path="/product/cleanplan" element={<Navigate to="/cleanplan" replace />} />
          <Route path="/product/education-erp" element={<Navigate to="/erp-solutions-for-education" replace />} />

          <Route path="/our-work/healthcare-modernization" element={<Navigate to="/our-work/healthcare-patient-management" replace />} />

          <Route path="/aboutus" element={<Navigate to="/about-us" replace />} />
          <Route path="/contactUs" element={<Navigate to="/contact-us" replace />} />
          <Route path="/contact" element={<Navigate to="/contact-us" replace />} />
        </Routes>
      </SiteLayout>
    </BrowserRouter>
  );
}
