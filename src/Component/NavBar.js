import React, { Component } from 'react'


export default class NavBar extends Component {

    render() {
        return (
            <div>
                <nav className=" navbar-expand-lg  navbar navbar-dark navbar-Light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">NewsHunt</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link-Light nav-link active" aria-current="page" href="/" >Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link nav-link-Light" href="/about" >About</a>
                                </li>


                            </ul>

                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
