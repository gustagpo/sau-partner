import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Home from "../pages/Home";
import Users from "../pages/users";
import CreateUsers from "../pages/users/create";
import EditUsers from "../pages/users/edit";
import Discounts from "../pages/Discounts";
import Clients from "../pages/Clients";
import SignIn from "../pages/SignIn";
import Login from "../pages/Login";
import { useAuth } from "../stores/use-auth";
import Cookies from "js-cookie";

export default function Index() {
  const navigate = useNavigate();

  const { getUser, user } = useAuth((store) => {
    return { getUser: store.getUser, user: store.user };
  });

  const token = Cookies.get("@sau_benefits_token");

  React.useEffect(() => {
    if (!token) {
      navigate("/login");
    }

    if (!user && token) getUser();
  }, [user, token, getUser, navigate]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />
      <Route path="/users/create" element={<CreateUsers />} />
      <Route path="/users/edit" element={<EditUsers />} />
      <Route path="/discounts" element={<Discounts />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="*" element={<p>There's nothing here: 404!</p>} />
    </Routes>
  );
}
