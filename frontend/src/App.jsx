import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Carousel from "./components/carousel/Carousel";
import Solutions from "./components/solutions/Solutions";
import Blog from "./components/blog/Blog";
import Comparison from "./components/comparison/Comparison";
import Testimony1 from "./components/testimony1/Testimony1";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/SFooter";
import Owners from "./pages/owners/Owners";
import WhoWeAre from "./pages/Whoweare/WhoWeAre";
import Blogs from "./pages/blogs/Blogs";
import Navbar from "./components/navbar/Navbar";

import ContactUs from "./pages/contactUs/ContactUs";

import BlogOneDetails from "./pages/blogs/BlogOneDetails";
import BlogTwoDetails from "./pages/blogs/BlogTwoDetails";
import BlogThreeDetails from "./pages/blogs/BlogThreeDetails";
import BlogFourDetails from "./pages/blogs/BlogFourDetails";
import BlogFiveDetails from "./pages/blogs/BlogFiveDetails";
import BlogsForm from "./pages/blogsForm/BlogsForm";
import Login from "./pages/blogsForm/Login";
import AllBlogs from "./pages/blogs/AllBlogs";
import SurveyForm from "./pages/surveyForm/SurveyForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/comparison" element={<Comparison />} />
        <Route path="/testimony" element={<Testimony1 />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/owners" element={<Owners />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/blogs/all-blogs" element={<AllBlogs />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="blogs/blog1" element={<BlogOneDetails />} />
        <Route path="blogs/blog2" element={<BlogTwoDetails />} />
        <Route path="blogs/blog3" element={<BlogThreeDetails />} />
        <Route path="blogs/blog4" element={<BlogFourDetails />} />
        <Route path="blogs/blog5" element={<BlogFiveDetails />} />
        <Route path="blogs-forms" element={<BlogsForm />} />
        <Route path="/survey" element={<SurveyForm />} />

        {/* <Route path="/vendors" element={<Vendors />} />
        <Route path="/project-team" element={<ProjectTeam />} /> */}
      </Routes>
    </Router>
  );
}

const Home = () => (
  <>
    <Navbar background="transparent" color="white" />
    <Carousel />
    <Solutions />
    <Comparison />
    <Projects />
    <Blog />
    <Testimony1 />
    <Footer />
    <ContactUs />
  </>
);

export default App;
