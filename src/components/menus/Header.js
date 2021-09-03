import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Header extends Component {
    constructor(props) {
        super(props);
        this.mySidebar = React.createRef();
        this.overlayBg = React.createRef();
    }

    w3_open = () => {

        if (this.mySidebar.current.style.display === 'block') {
            this.mySidebar.current.style.display = 'none';
            this.overlayBg.current.style.display = "none";
        } else {
            this.mySidebar.current.style.display = 'block';
            this.overlayBg.current.style.display = "block";
        }
    }
    w3_close = () => {
        this.mySidebar.current.style.display = "none";
        this.overlayBg.current.style.display = "none";
    }
    render() {
        return (
            <div className="w3-light-grey">
                <div className="w3-container w3-top w3-padding w3-teal">
                    <div className="w3-bar w3-white w3-large w3-round" style={{ zIndex: 4 }}>
                        <button className="w3-bar-item w3-button w3-hover-none w3-hover-opacity w3-hide-large w3-text-dark-grey  " onClick={this.w3_open} ><i className="fa fa-bars"></i></button>
                        <span className="w3-bar-item w3-text-dark-grey w3-left">Logo</span>
                        <Link to="" className="w3-bar-item w3-text-dark-grey w3-right w3-hover-opacity"><i className="fa fa-search fa-fw "></i></Link>
                        <div className="w3-hide-medium w3-hide-small">
                            <span className="w3-bar-item w3-left">Cart</span>
                            <span className="w3-bar-item w3-left">Wishlist</span>
                            <span className="w3-bar-item w3-left">Orders</span>
                            <span className="w3-bar-item w3-left">News</span>
                            <span className="w3-bar-item w3-left">Notifications</span>
                            <div className="w3-dropdown-hover w3-hide-small">
                                <button className="w3-button w3-black">Others</button>
                                <div className="w3-dropdown-content w3-card-4 w3-bar-block" style={{ width: "300px" }}>
                                    <Link to="#" className="w3-bar-item w3-button">One new friend request</Link>
                                    <Link to="#" className="w3-bar-item w3-button">John Doe posted on your wall</Link>
                                    <Link to="#" className="w3-bar-item w3-button">Jane likes your post</Link>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
                <div className="w3-hide-large ">
                    <nav className="w3-sidebar w3-collapse w3-white w3-animate-left" style={{ zIndex: 5, width: '66%' }} ref={this.mySidebar}>
                        <div className="w3-khaki w3-center" style={{ height: "25%" }}>
                            <div >
                                <img src="store.png" className="w3-circle " style={{ width: '64px', marginTop: "20px" }} alt="" />
                                <h5>Store</h5>
                            </div>

                        </div>

                        <div className="w3-bar-block w3-padding ">
                            <Link to="#" className="w3-bar-item w3-padding w3-text-gray w3-hover-text-teal"><i className="fa fa-shopping-cart fa-fw w3-margin-right"></i>  Cart <i className="w3-right "> 4</i></Link>
                            <Link to="#" className="w3-bar-item w3-padding w3-text-gray w3-hover-text-teal"><i className="fa fa-bookmark fa-fw w3-margin-right"></i>  Wishlist <i className="w3-right "> 5</i></Link>
                            <Link to="#" className="w3-bar-item w3-padding w3-text-gray w3-hover-text-teal"><i className="fa fa-handshake-o fa-fw w3-margin-right"></i>  Orders <i className="w3-right "> 10</i></Link>
                            <Link to="#" className="w3-bar-item w3-padding w3-text-gray w3-hover-text-teal"><i className="fa fa-bullhorn fa-fw w3-margin-right"></i>  News <i className="w3-right "> 2</i></Link>
                            <Link to="#" className="w3-bar-item w3-padding w3-text-gray w3-hover-text-teal"><i className="fa fa-bell fa-fw w3-margin-right"></i>  Notifications <i className="w3-right "> 1</i></Link>   
                            <hr />
                            <Link to="#" className="w3-bar-item w3-padding w3-text-gray w3-hover-text-teal"><i className="fa fa-road fa-fw w3-margin-right"></i>  Instructions</Link>
                            <Link to="#" className="w3-bar-item w3-padding w3-text-gray w3-hover-text-teal"><i className="fa fa-cog fa-fw w3-margin-right"></i>  Settings</Link>
                            <Link to="#" className="w3-bar-item w3-padding w3-text-gray w3-hover-text-teal"><i className="fa fa-info-circle fa-fw w3-margin-right"></i>  About</Link>
                        </div>
                    </nav>
                </div>
                <div className="w3-overlay w3-hide-large w3-animate-opacity" onClick={this.w3_close} style={{ cursor: "pointer" }} title="close side menu" ref={this.overlayBg}></div>
            </div>
        )
    }
}
