import React from 'react';

const Nav = (props) => {
    return (

        <div className="nav">
            <h1 className="title">Company name</h1>
            <img className="logo-puce" src="https://making-the-web.com/sites/default/files/clipart/176482/sim-card-png-transparent-images-176482-3736944.png" />
            <div className="items-card">
                <div className="items">
                    <h2 className="num-card">{props.num.slice(0, 17)}</h2>
                    <h2 className="date-expiration">{props.delai.slice(0,2) + '/' + props.delai.slice(2, 4)}</h2>
                    <h2 className="name">{props.nom.toUpperCase()}</h2>
                </div>
                <div className="img">
                    <img className="logo-master" src="https://www.pikolin.si/iimg/3860/i.jpg"></img>
                </div>
            </div>
        </div>


    );
}

export default Nav;