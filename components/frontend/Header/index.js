import React from 'react';
import Link from 'next/link';
function index() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link href="/"><a className="navbar-brand" >LOGO</a></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link href="/"><a className="nav-link">Home</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/about"><a className="nav-link">About</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/contact"><a className="nav-link">Contact</a></Link>
                    </li>
                </ul>
                <span className="navbar-text">
                    Navbar text with an inline element
                </span>
            </div>
        </nav>
    );
}

export default index
