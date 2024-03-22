import React from 'react';
import { useState } from 'react';
import logo from '../assets/Indira_Logo.jpg';
import hamburger from '../assets/hamburger.svg'
import hamburger_close from '../assets/hamburger-close.svg'


function NavBar() {
	const [showAnimated, setShowAnimated] = useState(false);
	return (
		<>
			<div className='header_img'>
				<img />
			</div>
			<nav className="navbar navbar-expand-lg ">
				<div className="container">
					<a className="navbar-brand" href="#">
          <img src={logo} style={{width:'50px',height:'50px', borderRadius: '50%'}}/>
					</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<div onClick={() => setShowAnimated((prev) => !prev)}>
							{showAnimated ? <img src={hamburger_close} /> : <img src={hamburger} />}
						</div>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<a className="nav-link" href="/">HOME</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/about">ABOUT</a>
							</li>
							<li className="nav-item">
								<a className="nav-link"  href="/projects">PROJECTS</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/contact">CONTACT</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	)
}

export default NavBar