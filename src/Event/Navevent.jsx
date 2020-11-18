import React from 'react';
import '../main.scss';
const Navevent = () => {
    return (
        <>
            <header >
                <nav className=" navbar navbar-expand-lg navbar-light navbar-fixed" >
                    <a className="navbar-brand" style={{ padding: "0 20px 0 4% " }} href="#">COMPNAME</a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{ marginRight: "4%" }}>

                        <span className="navbar-toggler-icon" ></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link " href="#">Events </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Create</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Sign Up</a>
                            </li>
                            <li className="nav-item" >
                                <a className="nav-link cur-nav" href="#"  >My Profile <span className="sr-only">(current)</span></a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>

            <main style={{ position: "relative" }} className="eventheader" id="mainevent">

                <h1 className="headingevent">Events Listing</h1>
                <h3 className="subheadingevent">Have a look at upcoming events.</h3>
            </main>
        </>
    );
}

export default Navevent;