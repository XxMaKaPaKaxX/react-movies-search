import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-success text-center text-lg-start text-white">
            <div className="text-center p-3">
                © {new Date().getFullYear()} Copyright Text: Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, explicabo!
            </div>
        </footer>
    );
}

export default Footer;