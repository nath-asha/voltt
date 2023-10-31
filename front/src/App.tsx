import { BrowserRouter, Routes, Route } from "react-router-dom";
import TestimonialsPage from "./pages/TestimonialsPage";
import ProjectsPage from "./pages/ProjectsPage";
import ServicesPage from "./pages/ServicesPage";
import HomePage from "./pages/HomePage";
import ProjectDetail from "./components/projectDetail";
import ServiceDetail from "./components/serviceDetail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import FAQPage from "./pages/FAQPage";
import BucketList from './BucketList';

function App() {
  const s3ImageURL = "https://s3.ap-northeast-1.wasabisys.com/voltixteam/img2.jpg?AWSAccessKeyId=Z2UAWEK8UJ31HENFKN8H&Expires=1698767554&Signature=T26SIL%2FY3rvdz9zouETFQGMGVyc%3D";
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects/id" element={<ProjectDetail />} />
          <Route path="/services/id" element={<ServiceDetail />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/Contact" element={<ContactPage />} />
          <Route path="/FAQ" element={<FAQPage />} />
          <Route path="/bucketlist" element={<BucketList />} />
        </Routes>
        <div>
        <h2>Image from S3 Bucket:</h2>
        <img src={s3ImageURL} alt="S3 Bucket Image" />
      </div>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
