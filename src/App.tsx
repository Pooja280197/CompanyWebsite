import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import Career from './components/Career';

export default function App() {
  return (
    <BrowserRouter>
      <SiteLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/brand-strategy" element={<BrandStrategyService />} />
          <Route path="/services/web-development" element={<WebDevelopmentService />} />
          <Route path="/services/custom-software" element={<CustomSoftware />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketingService />} />
          <Route path="/services/ui-ux-design" element={<UiUxDesignService />} />
          <Route path="/services/analytics" element={<AnalyticsService />} />
          <Route path="/services/mobile-apps" element={<MobileAppsService />} />
          <Route path="/services/ai-solutions" element={<AiSolutionsService />} />
          <Route path="/services/cloud-services" element={<CloudServicesService />} />
          <Route path="/services/ecommerce" element={<EcommerceService />} />
          <Route path="/services/seo" element={<SeoService />} />
          <Route path="/services/consulting" element={<ConsultingService />} />
          <Route path="/services/devops" element={<DevopsService />} />
          <Route path="/services/maintenance-support" element={<MaintenanceSupportService />} />
          <Route path="/services/salesforce" element={<SalesforceService />} />

          <Route path="/whatWeDo/staffAugmentation" element={<StaffAugmentation />} />
          <Route path="/whatWeDo/cloud-and-devops" element={<CloudAndDevops />} />
          <Route path="/whatWeDo/ai-and-data" element={<AIandData />} />
          <Route path="/whatWeDo/productEngineering" element={<ProductEngineering />} />

          <Route path="/product/rexo-erp" element={<RexoERP />} />
          <Route path="/product/cleanplan" element={<CleanPlan />} />
          <Route path="/product/education-erp" element={<EducationERP />} />
          <Route path="/our-products" element={<OurProducts />} />

          <Route path="/our-work/smart-factory-iot" element={<CaseStudySmartFactory />} />
          <Route path="/our-work/diamond-similarity-ai" element={<DiamondSimilarity />} />
          <Route path="/our-work/cloud-optimization" element={<CloudOptimization />} />
          <Route path="/our-work/enterprise-data-pipeline" element={<DataPipeline />} />
          <Route path="/our-work/retail-ai-team" element={<RetailAiTeam />} />
          <Route path="/our-work/manufacturing-devops" element={<ManufacturingDevOps />} />
          <Route path="/our-work/healthcare-modernization" element={<HealthcareModernization />} />
          
          <Route path="/industries/healthcare-software-development" element={<IndustryHealthcare />} />
          <Route path="/industries/manufacturing-software-solutions" element={<IndustryManufacturing />} />
          <Route path="/industries/fintech-software-development" element={<IndustryFinance />} />
          <Route path="/industries/ecommerce-development" element={<IndustryEcommerce />} />
          <Route path="/industries/real-estate-software-development" element={<IndustryRealEstate />} />
          <Route path="/industries/travel-software-development" element={<IndustryTravel/>} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactUs" element={<Contact />} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/careers" element={<Career/>} />
        </Routes>
      </SiteLayout>
    </BrowserRouter>
  );
}
