import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './listing.css'
import { useParams } from 'react-router-dom';
import Header from '../../components/header/header';
import SliderComp from '../../components/slider/slider';
import data from '../../data/data';
import { ImPriceTag } from 'react-icons/im';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import { GiCash, GiElectric, GiGuards, GiPersonInBed, GiRollingEnergy, GiVacuumCleaner } from 'react-icons/gi'
import { GrLounge } from 'react-icons/gr'
import { MdBedroomParent, MdWaterDrop, MdMonitor, MdOutlineRestaurantMenu, MdSportsTennis, MdLocationOn, MdErrorOutline } from 'react-icons/md';
import { SiSpringsecurity } from 'react-icons/si';
import { BiWifi } from 'react-icons/bi'
import { TbChecks } from 'react-icons/tb'
import Footer from '../../components/footer/footer';
import Caligraphy from '../../components/caligraphy/caligraphy';

function Listing() {
    const { name } = useParams()
    const [filteredData, setFilteredData] = useState({})
    const [isSent, setIsSent] = useState(false)
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const form = useRef();


    useEffect(() => {
        setFilteredData(data.find((val) => val.name === name))
    }, [])

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true)

        emailjs.sendForm('service_g0ig3u5', 'template_47jov24', form.current, 'uTH6DzZj2GuDd747H')
            .then((result) => {
                setIsSent(true)
            }, (error) => {
                setIsError(true);
            }).
            finally(() => {
                setIsLoading(false)
                setTimeout(() => {
                    setIsError(false)
                    setIsSent(false)
                }, 3000);
            });

    };

    return (
        <div>
            <Header />
            <div className='main_div'>
                <div className='main_block'>
                    <div className='slider_div'>
                        <SliderComp images={filteredData.images} />
                    </div>
                    <div className='enquiry_details'>
                        <p className='enquiry_heading'>MAKE AN ENQUIRY</p>
                        <div className='enquiry_form'>
                            <form ref={form} onSubmit={sendEmail}>
                                <div className='enquiry_form_fields'>
                                    <p>NAME*</p>
                                    <input required type="text" name='name' />
                                </div>
                                <div className='enquiry_form_fields'>
                                    <p>EMAIL*</p>
                                    <input required type="email" name='email' />
                                </div>
                                <div className='enquiry_form_fields'>
                                    <p>MOBILE*</p>
                                    <input required type="NUMBER" name='number' />
                                </div>
                                <div className='enquiry_form_fields'>
                                    <p>MESSAGE*</p>
                                    <textarea required id="" cols="25" rows="6" name='message'></textarea>
                                </div>
                                <div className='submit_btn_div'>
                                    {
                                        isLoading ? <button disabled className='loader_div'><div class="loader"></div></button> :
                                        isSent ? <button disabled className='sent_message'>Message Sent <TbChecks size={20} /></button> :
                                            isError ? <button disabled className='error_message'>Message Not Sent <MdErrorOutline size={20} /></button> :
                                                <button type='submit'>SUBMIT</button>
                                    }
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <p className='hostel_list_name'>{filteredData.name}</p>


                {/* Overview */}

                <div className='over_view_div'>
                    <p className='over_view_heading'>Overview</p>
                    <div className='over_view_content_div'>
                        {
                            [
                                { name: "Separate room- single bed", price: filteredData.single_bed, beds: 1 },
                                { name: "Double and triple bed sharing", price: filteredData.double_bed, beds: 2 }
                            ]
                                .map((val, index) => {
                                    return (
                                        <div className='over_view_content' key={index}>
                                            <div className='bed_info_div'>
                                                <BsFillInfoCircleFill size={16} />
                                                {val.name}
                                            </div>
                                            <div className='pricing_div'>
                                                <ImPriceTag size={20} />
                                                <span>Price:</span> PKR {val.price}
                                            </div>
                                            <div className='bed_quantity'>
                                                <GiPersonInBed size={25} />
                                                <span>Beds:</span> {val.beds}
                                            </div>
                                        </div>
                                    )
                                })
                        }

                    </div>
                </div>


                {/* Common Facilities */}

                <div className='over_view_div'>
                    <p className='over_view_heading'>Common Facilities</p>
                    <div className='over_view_content_div'>
                        <div className='facilities_content'>
                            {
                                [
                                    { name: 'Furnished Rooms', icon: <MdBedroomParent size={18} /> },
                                    { name: 'Safety and Security', icon: <SiSpringsecurity size={18} /> },
                                    { name: 'Cleaning ', icon: <GiVacuumCleaner size={18} /> },
                                    { name: 'Clean Drinking Water', icon: <MdWaterDrop size={18} /> },
                                    { name: 'Electricity', icon: <GiElectric size={18} /> },
                                    { name: 'Standby Generator Facility', icon: <GiRollingEnergy size={18} /> },
                                    { name: 'Internet Facility', icon: <BiWifi size={18} /> },
                                ]
                                    .map((val, index) => {
                                        return (
                                            <div className='facility_info_div' key={index}>
                                                {val.icon}
                                                {val.name}
                                            </div>
                                        )
                                    })
                            }

                        </div>
                    </div>
                </div>


                {/* Specific Facilities */}

                <div className='over_view_div'>
                    <p className='over_view_heading'>Specific Facilities</p>
                    <div className='over_view_content_div'>
                        <div className='facilities_content'>

                            {
                                [
                                    { name: 'TV in rooms', icon: <MdMonitor size={18} /> },
                                    { name: 'General TV lounge', icon: <GrLounge size={18} /> },
                                    { name: 'Guard security ', icon: <GiGuards size={18} /> },
                                    { name: 'Quality Mess System', icon: <MdOutlineRestaurantMenu size={18} /> },
                                    { name: 'Indoor sports', icon: <MdSportsTennis size={18} /> },
                                ]
                                    .map((val, index) => {
                                        return (
                                            <div className='facility_info_div' key={index}>
                                                {val.icon}
                                                {val.name}
                                            </div>
                                        )
                                    })
                            }

                        </div>
                        <p className='note'>Note: If you want to avail these facilities, you would have to pay extra money.</p>
                    </div>
                </div>
                <div className='location_commission_div'>
                    <div className='location_div'>
                        <MdLocationOn size={18} />
                        LOCATION FOR ALL HOSTELS: NEAR IQRA UNIVERSITY
                    </div>
                    <div className='location_div'>
                        <GiCash size={18} />
                        SERVICE COMMISSION: RS 1000/-
                    </div>
                </div>
                <Caligraphy />
            </div>
            <Footer />
        </div>
    );
}

export default Listing;