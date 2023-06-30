import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "../components/screens/login/Login";
import Home from "../components/screens/home/Home";
import NotFound404 from "../components/screens/error-pages/NotFound404";

export default function MainRouter() {
	return (
		<>
			<Routes>
				<Route
					exact
					path="/"
					element={<Navigate to="/login" replace />}
				/>
				<Route path="/login" element={<Login />} />
				<Route path="/country" element={<Home />} />
				<Route exact path="*" element={<NotFound404 />} />
			</Routes>
		</>
	);
}
