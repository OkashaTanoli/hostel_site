import React from 'react';
import './listingcard.css'
import data from '../../data/data';
import { GoDiffRenamed } from 'react-icons/go'
import { GiCash } from 'react-icons/gi'
import { Link } from 'react-router-dom';


function Listingcard() {
    console.log(data)
    return (
        <div className='main_div'>
            <div className='hotel_listing_heading'>
                <div className='hotel_listing_heading_dots'>
                    <div>.....</div>
                    <div>.....</div>
                    <div>.....</div>
                    <div>.....</div>
                    <div>.....</div>
                </div>
                <p>Hostel Listing</p>
            </div>

            <div className='listing_div'>
                {
                    data.map((val, index) => {
                        return (
                            <Link to={`/hostels/${val.name}`} key={index} style={{textDecoration:"none"}}>
                                <div className='individual_listing_div' >
                                    <div className='img_div'>
                                        <img src={val.images[0]} alt="" />
                                    </div>
                                    <div className='details_div'>
                                        <p className='hostel_name'><GoDiffRenamed color='#745434' />{val.name}</p>
                                        <p className='price'><GiCash color='#745434' size={20} />RS: {val.double_bed}</p>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }

            </div>
            {/* <div className='row_block'>
                <div className='first_block'>
                    <div className='top_circle'>
                    </div>
                    <div className='straight_line'></div>
                </div>
                <div className='second_block'>
                    <p>New Dolat Kada Boys Hostel</p>
                    <img src={Img} alt="" />
                </div>
            </div>
            <div className='row_block'>
                <div className='first_block'>
                    <div className='top_circle'>
                    </div>
                    <div className='straight_line'></div>
                </div>
                <div className='second_block'>
                    <p>New Dolat Kada Boys Hostel</p>
                    <img src={Img} alt="" />
                </div>
            </div> */}

        </div>
    );
}

export default Listingcard;