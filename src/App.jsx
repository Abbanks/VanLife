import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from './pages/Vans/About.jsx'
import Home from "./pages/Vans/Home.jsx";
import "./server"
import Vans from "./pages/Vans/Vans.jsx";
import VanDetail from "./pages/Vans/VanDetail.jsx";
import Layout from "./components/Layout.jsx";
import Dashboard from "./pages/Host/Dashboard"
import Income from "./pages/Host/Income"
import Reviews from "./pages/Host/Reviews"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/vans" element={<Vans />} />
                    <Route path="/vans/:id" element={<VanDetail />} />
                    <Route path="/host" element={<Dashboard />} />
                    <Route path="/host/income" element={<Income />} />
                    <Route path="/host/reviews" element={<Reviews />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;