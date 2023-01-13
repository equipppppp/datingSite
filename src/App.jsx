import React from "react";
import AllUsers from "./pages/AllUsers";
import Navigation from "./components/navigation";
import { Routes, Route, useNavigate } from "react-router-dom";
import UserInfo from "./pages/userInfo";
import EnterForm from "./pages/enterForm";
import RegistrationForm from "./pages/registrationForm";

function App() {
  const navigate = useNavigate();
  React.useEffect(() => {
    navigate("/login");
  }, []);
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/login" element={<EnterForm />} />
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="/users" element={<AllUsers />} />
        <Route path="/users/:id" element={<UserInfo />} />
      </Routes>
    </>
  );
}

export default App;
