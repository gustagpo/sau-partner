import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from '../pages/Home';
import Users from '../pages/users';
import CreateUsers from '../pages/users/create';
import EditUsers from '../pages/users/edit';
import Discounts from '../pages/Discounts';
import Clients from '../pages/Clients';
import SignIn from '../pages/SignIn';
import Login from '../pages/Login';

export default function Index() {
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
    )
}