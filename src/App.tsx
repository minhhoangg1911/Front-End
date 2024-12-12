import Layout from "./components/design/Layout/Layout"
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Room from "./pages/Rooms/Room";
import PrevRoom from "./pages/Rooms/PrevRoom";
import Blogs from "./pages/Blogs/Blogs";
import PrevBlog from "./pages/Blogs/PrevBlog";
import FAQ from "./pages/FAQ/FAQ";
import Reviews from "./pages/Reviews/Reviews";
import PrevReview from "./pages/Reviews/PrevReview";
import Guide from "./pages/Guide/Guide";
import RoomDetail from "./pages/Home/ListRoom/RoomDetail";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import TermCondition from "./pages/TermCondition/TermCondition";
import Changelog from "./pages/Changelog/Changelog";
import License from "./pages/License/License";
function App() {

  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/rooms" element={<Room />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/guide" element={<Guide />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />

            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermCondition />} />
            <Route path="/changelog" element={<Changelog />} />
            <Route path="/license" element={<License />} />




            <Route path="/room-detail" element={<RoomDetail />} />


            <Route path='/prev-room' element={<PrevRoom />} />
            <Route path='/prev-blog' element={<PrevBlog />} />
            <Route path='/prev-review' element={<PrevReview />} />

          </Routes>
        </Layout>
      </Router>
    </>
  )
}

export default App





