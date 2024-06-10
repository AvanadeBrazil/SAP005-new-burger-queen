import React from 'react';

const Footer = (props) => {
    const { children } = props;
    return (
        <footer className="footer">
            {children}
        </footer>
    );
}

export default Footer;