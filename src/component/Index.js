import React from "react"
import About from './About';
import Contact from './Contact';
import Header from './Header';
import Home from './Home';
import Work from './Work';
import School from "./School";

function Index() {
    return (
        <div className="index">
            <Header />
            <Home />
            <About />
            <School />
            <Work />
            <Contact />
        </div>
    )
}

export default Index