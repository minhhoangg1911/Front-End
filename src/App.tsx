import Layout from "./components/Layout/Layout"
import { BrowserRouter as Router, Route, Routes, Navigate, } from 'react-router-dom';
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
import UserInfo from "./pages/UserInfo/UserInfo";
import Payment from "./pages/Payment/Payment";

import { useShoppingCartQuery } from "./utils/api/query/useShoppingCart";
import { useShoppingCartStore } from "./store";
import { useEffect } from "react";
import Checkout from "./components/shared/Header/Checkout";

function App() {
  const setShoppingCart = useShoppingCartStore((state) => state.setShoppingCart);
  const userString = localStorage.getItem('user') ?? '{}'; // Gán giá trị mặc định nếu null
  const user = JSON.parse(userString);
  const { data } = useShoppingCartQuery(user?.userId)
  useEffect(() => {
    if (data) {
      // Khi dữ liệu giỏ hàng được tải thành công, cập nhật vào zustand store
      setShoppingCart(data?.cartItems);
    }
  }, [data]);
  console.log
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
            <Route path="/user-info" element={user ? <UserInfo /> : <Navigate to='/login' />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermCondition />} />
            <Route path="/changelog" element={<Changelog />} />
            <Route path="/license" element={<License />} />
            <Route path="/room-detail/:id" element={<RoomDetail />} />
            <Route path='/prev-room' element={<PrevRoom />} />
            <Route path='/prev-blog' element={<PrevBlog />} />
            <Route path='/prev-review' element={<PrevReview />} />
            <Route path='/payment' element={<Payment />} />

            <Route path="/checkout" element={<Checkout />} />
            <Route path="/success" element={<h1>Thanh toán thành công!</h1>} />
            <Route path="/cancel" element={<h1>Thanh toán bị hủy!</h1>} />


          </Routes>
        </Layout>
      </Router>
    </>
  )
}

export default App





