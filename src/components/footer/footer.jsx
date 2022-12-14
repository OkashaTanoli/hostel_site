import React from 'react';
import './footer.css'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { MdLocationPin, MdCall, MdEmail } from 'react-icons/md';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer_sub_div'>
                <div className='footer_sub_div_block'>
                    <h2>Follow US</h2>
                    <p className='follow_us_text'>Follow us on social media</p>
                    <div className='icons_div'>
                        <div className='icon_div'>
                            <FaFacebookF size={18} color={"white"} />
                        </div>
                        <div className='icon_div'>
                            <FaTwitter size={18} color={"white"} />
                        </div>
                        <div className='icon_div'>
                            <FaInstagram size={18} color={"white"} />
                        </div>
                        <div className='icon_div'>
                            <FaYoutube size={18} color={"white"} />
                        </div>
                    </div>
                </div>
                <div className='footer_sub_div_block'>
                    <h2>Contact</h2>
                    <div className='contact_details'>
                        <div className='single_contact_detail'>
                            <MdLocationPin color='#745434' size={20} />
                            <p>Karachi, Sindh, Pakistan</p>
                        </div>
                        <div className='single_contact_detail'>
                            <MdCall color='#745434' size={20} />
                            <p>0334 2837453</p>
                        </div>
                        <div className='single_contact_detail'>
                            <MdEmail color='#745434' size={20} />
                            <p><a href='mailto:contact@easyaccomodations.com' style={{ textDecoration: 'none', color: 'rgb(39, 39, 39)' }}>contact@easyaccomodations.com</a></p>
                        </div>
                    </div>
                </div>
                <div className='footer_sub_div_block'>
                    <h2>Newsletter</h2>
                    <p className='follow_us_text'>Signup to our newsletter for exclusive offers</p>
                    <div className='news_letter_div'>
                        <input type="text" name='newsletter' />
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;