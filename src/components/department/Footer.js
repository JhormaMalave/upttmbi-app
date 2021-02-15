import React from 'react';



const Footer = React.memo(() => {
    return (
        <footer className="block py-4 mt-10">
            <div className="container mx-auto px-4">
                <hr className="mb-4 border-b-1 border-gray-300" />
                <div className="flex flex-wrap justify-end w-full">
                    <p className="font-semibold text-gray-400 text-right text-sm pr-3">Universidad Politécnica Territorial del Estado Trujillo<br/>"Mario Briceño Iragorry"</p>
                    <img src="./assets/images/upttmbi.svg" alt="Logo de UPTT Mario Briceño Iragorry" />
                    <svg src="w-4" xmlns="./assets/images/upttmbi.svg"  viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" />
                </div>
            </div>
        </footer>
    );
});

export default Footer;