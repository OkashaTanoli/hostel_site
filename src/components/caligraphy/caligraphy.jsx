import React, { useState } from 'react';
import './caligraphy.css';
import Img1 from '../../images/caligraphy/1.jpeg'
import Img2 from '../../images/caligraphy/2.jpeg'
import Img3 from '../../images/caligraphy/3.jpeg'
import Img4 from '../../images/caligraphy/4.jpeg'
import Img5 from '../../images/caligraphy/5.jpeg'
import { ImCross } from 'react-icons/im';
import { CgMaximizeAlt } from 'react-icons/cg'

function Caligraphy() {
    const [current, setCurrent] = useState('first')
    const [showLargeImage, setShowLargeImage] = useState(false)
    const [image, settImage] = useState(false)
    return (
        <div className='main_our_partner'>
            <div className='large_img' style={{ visibility: `${showLargeImage ? 'visible' : 'hidden'}` }}>
                <div className='cancel_large_img_div'>
                    <ImCross size={30} color='white' onClick={() => { setShowLargeImage(false) }} style={{ cursor: 'pointer' }} />
                </div>
                <img src={image} alt="img" />
            </div>
            <div className='our_parnters'>
                <h1>Our Partner</h1>
            </div>
            <div className='our_partner_details'>
                <ul>
                    <li>Normal sized canvases with only names of Allah: Rs. 1500 each</li>
                    <li>Normal sized canvases with proper ayats: Rs. 2000 each</li>
                    <li>Large sized canvases: Rs. 3000-4000 (depending on the ayat size)</li>
                </ul>
            </div>
            <div className='caligraphy'>

                <div
                    onMouseOver={() => { setCurrent('first') }}
                    className={`caligraphy_img_div ${current === 'first' ? 'max' : 'min'}`}
                    style={{ background: `url(${Img1})`, backgroundSize: 'cover' }}>
                    <div onClick={() => { settImage(Img1); setShowLargeImage(true) }} className='caligraphy_img_max_div' style={{ display: current === 'first' ? 'flex' : 'none' }}>
                        <CgMaximizeAlt size={70} color='white' />
                    </div>
                </div>
                <div
                    onMouseOver={() => { setCurrent('second') }}
                    className={`caligraphy_img_div ${current === 'second' ? 'max' : 'min'}`}
                    style={{ background: `url(${Img2})`, backgroundSize: 'cover' }}>
                    <div onClick={() => { settImage(Img2); setShowLargeImage(true) }} className='caligraphy_img_max_div' style={{ display: current === 'second' ? 'flex' : 'none' }}>
                        <CgMaximizeAlt size={70} color='white' />
                    </div>
                </div>
                <div
                    onMouseOver={() => { setCurrent('third') }}
                    className={`caligraphy_img_div ${current === 'third' ? 'max' : 'min'}`}
                    style={{ background: `url(${Img3})`, backgroundSize: 'cover' }}>
                    <div onClick={() => { settImage(Img3); setShowLargeImage(true) }} className='caligraphy_img_max_div' style={{ display: current === 'third' ? 'flex' : 'none' }}>
                        <CgMaximizeAlt size={70} color='white' />
                    </div>
                </div>
                <div
                    onMouseOver={() => { setCurrent('fourth') }}
                    className={`caligraphy_img_div ${current === 'fourth' ? 'max' : 'min'}`}
                    style={{ background: `url(${Img4})`, backgroundSize: 'cover' }}>
                    <div onClick={() => { settImage(Img4); setShowLargeImage(true) }} className='caligraphy_img_max_div' style={{ display: current === 'fourth' ? 'flex' : 'none' }}>
                        <CgMaximizeAlt size={70} color='white' />
                    </div>
                </div>
                <div
                    onMouseOver={() => { setCurrent('fifth') }}
                    className={`caligraphy_img_div ${current === 'fifth' ? 'max' : 'min'}`}
                    style={{ background: `url(${Img5})`, backgroundSize: 'cover' }}>
                    <div onClick={() => { settImage(Img5); setShowLargeImage(true) }} className='caligraphy_img_max_div' style={{ display: current === 'fifth' ? 'flex' : 'none' }}>
                        <CgMaximizeAlt size={70} color='white' />
                    </div>
                </div>
            </div>
          
        </div>
    );
}

export default Caligraphy;