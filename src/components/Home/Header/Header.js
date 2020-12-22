import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Menu from '../Menu/Menu';
const Header = () => {
    return (
        <div className="container">
            <Menu></Menu>
            <HeaderMain></HeaderMain>
        </div>
    );
};

export default Header;