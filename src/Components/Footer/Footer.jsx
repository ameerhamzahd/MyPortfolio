import React from 'react';

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal footer-center bg-black text-gray-300 p-4 border-t-2 max-w-7xl mx-auto border-t-gray-300">
            <aside>
                <p className='font-special'>Copyright © {new Date().getFullYear()} - Ameer Hamzah Daiyan | All rights reserved.</p>
            </aside>
        </footer>
    );
};

export default Footer;