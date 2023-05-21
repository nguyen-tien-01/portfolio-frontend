import React from "react"

function Header() {
    return (
        <div className="header">
            <h3 className="my_name">Tiến Nguyễn</h3>
            <div className="nav">
                <ul className="ul_header">
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skill">Skill</a></li>
                    <li><a href="#schools">School</a></li>
                    <li><a href="#work">Work</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header