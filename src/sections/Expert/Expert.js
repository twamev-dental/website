import React from 'react';
import './Expert.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { BsFillCheckCircleFill } from "react-icons/bs";
import expertImg from '../../assets/expert.png';

const Expert = () => {
    return (
        <section className='expert-section' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="expert-text">
                            <SectionTitle 
                                subTitle="EXPERT DENTISTS IN Patna"
                                title="Top-Notch Dentistry at the Best Dental Clinic in Patna"
                                description="At Twamev Dental Clinic & Implant Centre, we deliver high-quality dental care using advanced technology and evidence-based techniques. Recognized by patients as one of the best dental clinics in Patna, we focus on painless treatments, ethical care, and long-lasting dental results."
                            />

                            <ul>
                                <li>
                                    <BsFillCheckCircleFill />
                                    Experienced and skilled dental team in Patna
                                </li>
                                <li>
                                    <BsFillCheckCircleFill />
                                    Personalized treatment plans
                                </li>
                                <li>
                                    <BsFillCheckCircleFill />
                                    State of the art dental services
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="expert-img">
                            <img src={expertImg} alt="expert" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Expert;