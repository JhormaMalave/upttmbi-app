import React from 'react';
import Logo from '../../assets/Logo';



const Footer = React.memo(() => {
    return (
        <footer className="block py-4 mt-10">
            <div className="container mx-auto px-4">
                <hr className="mb-4 border-b-1 border-gray-300" />
                <div className="flex flex-wrap justify-end w-full">
                    <p className="font-semibold text-gray-400 text-right text-sm pr-3">Universidad Politécnica Territorial del Estado Trujillo<br/>"Mario Briceño Iragorry"</p>
                    <Logo className="h-12"/>
                </div>
            </div>
        </footer>
    );
});

export default Footer;