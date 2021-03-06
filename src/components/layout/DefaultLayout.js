import React from "react";
import PropTypes from "prop-types";
import MainNavbar from "./MainNavbar";
import MainFooter from "./MainFooter";
import "../../styles/Animation.css";

const DefaultLayout = ({contained, children, noNavbar, noFooter}) => (
    <div className={`${contained ? "" : ""} drop-in-animation`}>
        <div id={'mainHeaderNavBarDisplay'}>{!noNavbar && <MainNavbar/>}</div>
        <div id={'mainContentDisplay'}>{children}</div>
        <div id={'mainFootBarDisplay'}>{!noFooter && <MainFooter/>}</div>
    </div>
);

DefaultLayout.propTypes = {
    /**
     * Whether the content is contained, or not.
     */
    contained: PropTypes.bool,
    /**
     * Whether to display the Navbar, or not.
     */
    noNavbar: PropTypes.bool,
    /**
     * Whether to display the footer, or not.
     */
    noFooter: PropTypes.bool
};

DefaultLayout.defaultProps = {
    contained: false,
    noNavbar: false,
    noFooter: false
};

export default DefaultLayout;
