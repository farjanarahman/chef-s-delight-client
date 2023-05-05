import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer>
                <section className="bg-dark p-5 text-white mt-5">

                    <div className="container my-5">
                        <div className="row">
                            <div className="col pe-5">
                            <h3 className='text-center'>Stay Connected</h3>
                                <p className="text-white-50">Join our community of foodies and share your own recipes for a chance to be featured on our website.</p>
                            </div>
                            <div className="col pe-5">
                                <h3 className="mb-5">Useful Link</h3>
                                <ul className="text-white-50">
                                    <li className="mb-1">Home</li>
                                    <li className="mb-1">About Us</li>
                                    <li className="mb-1">Blog</li>
                                    <li className="mb-1">Contact Us</li>
                                </ul>
                            </div>
                            <div className="col pe-5">
                                <h3 className="mb-5">Contact Now</h3>
                                <div className="text-white-50">
                                    <p>555 4th 5t NW, Washington <br /> DC 20530, United States</p>
                                </div>
                                <div className="text-white-50">
                                    <p>+88 01750 000 000 <br /> +88 01750 000 000</p>
                                </div>
                                <div className="text-white-50">
                                    <p>food@gmail.com <br /> food@gmail.com </p>
                                </div>
                            </div>
                            {/* <div className="col pe-5">
                                <h3 className="mb-5">Subscribe</h3>
                                <p className="text-white-50">Subscribe for our latest recipes.</p>
                                <input type="text" name="email" id="email" placeholder="Email Address" className="px-4 py-3 rounded" />
                            </div> */}
                        </div>
                    </div>
                </section>
            </footer>
        </div>
    );
};

export default Footer;
