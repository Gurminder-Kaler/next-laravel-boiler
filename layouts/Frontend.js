import React from 'react';
import Header from '../components/frontend/Header/index';
import Footer from '../components/frontend/Footer/index';

function frontend(props) {
    return (
        <div className="container-fluid">
            <Header></Header>
            {props.children}
            <Footer></Footer>
        </div>
    )
}

export default frontend
