import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './Services.scss';
import ServicesData from './ServiceData';
import Service from '../../components/Service/Service';
// import { Link } from 'react-router-dom';
// import { BsFillArrowRightCircleFill } from "react-icons/bs";


const ServicesSection = () => {
    return (
        <section className='service-section pt-100 pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-sm-6">
                        <SectionTitle title="Advanced Dental Treatments at the Best Dental Clinic in Patna" subTitle="OUR DENTAL SERVICES IN Patna"/>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                        <p className='service-title-text'>At Twamev Dental Clinic & Implant Centre, we offer comprehensive and painless dental services using modern technology. From preventive care to advanced procedures, our clinic is trusted by patients seeking the best dental treatment in Patna.</p>
                    </div>
                </div>

                <div className="row">
                    {
                        ServicesData.map(singleService => <Service serviceList={singleService}/>)
                    }
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;