import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/forms/login";
import HomePage from "./components/pages/homePage";
import BusinessForm from "./components/forms/addBusiness";
import SignUp from "./components/forms/signin";
import ResetPassword from "./components/forms/resetPassword";
import ProfileForm from "./components/forms/addGuides";
import AboutPage from "./components/pages/aboutPage";
<<<<<<< HEAD
import Sidebar from "./components/admin/menuAdmin";
=======
import AdminPage from "./components/pages/adminPage";
import AdminProfile from "./components/admin/AdminProfile";


>>>>>>> main
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signin" element={<SignUp/>}/>
        <Route path="/forget_password" element={<ResetPassword/>}/>
        <Route path="/profileGuide" element={<ProfileForm/>} />
        <Route path="/AddBuss" element={<BusinessForm />} />
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/create_signup" element={<SignUp/>}/>
        <Route path="/signup_login" element={<LoginPage/>}/>
        <Route path="/your-cancel-destination" element={<HomePage/>}/>
<<<<<<< HEAD
        <Route path="/admin" element={<Sidebar/>}/>
=======
        <Route path="/admin" element={<AdminPage/>}/>
        <Route path="/admin-profile" element={<AdminProfile />} />
        
        
        

>>>>>>> main
      </Routes>
      
    </Router>
  );
}

export default App;


