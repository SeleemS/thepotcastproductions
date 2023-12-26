import React from "react";
import { Button, Card, Image } from "@nextui-org/react";
import DefaultLayout from "@/layouts/default";
import { title, features, subtitle } from "@/components/primitives";
import { FaArrowRight } from 'react-icons/fa';
import Link from "next/link";

const WhiteLabelPage = () => {
    
    return (
        <DefaultLayout>
            <div className="flex flex-col items-center justify-center">

                <div className="flex flex-col items-center justify-center mb-10">
                    <h2 className={`${title({color:"green"})} text-3xl text-center font-semibold px-2`}>We create premium, customized podcasts that amplify your brand message, engage your audience, and drive results. </h2>
                </div>

                <div className="flex flex-col space-y-6 w-full">

                    {/* Feature Card One */}
                    <Card className="flex flex-col border-4 border-green-800 lg:flex-row bg-white shadow-lg lg:max-w-9xl">
                        <div className="flex justify-center items-center w-full lg:w-4/5 p-5"> {/* Add margin-top on small screens, remove it on lg screens */}
                            <Image
                                src="/images/hero.png"
                                alt="Turnkey Designs"
                                className="w-full lg:w-auto" // Make sure the image takes the full width on small screens, and auto on larger screens
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center p-4 lg:p-1 w-full lg:mr-5 lg:w-2/5">
                            <h3 className={`${title({color:"violet", size:"lg"})} text-center text-2xl mt-[-15px] lg:mt-0 lg:py-2`}>Design</h3>
                            <h4 className={`${subtitle()} text-lg p-2 text-center mb-2`}>Our team specializes in creating captivating branding elements for your podcast. From logo design to set aesthetics and episode artwork, we ensure that your podcast visually aligns with your brand identity, leaving a lasting impression on your audience.</h4>
                        </div>
                    </Card>



                    {/* Feature Card Two */}
                    <Card className="flex flex-col border-4 border-green-800 md:flex-row bg-white shadow-lg md:max-w-9xl">
                        <div className="flex flex-col items-center justify-center md:p-1 md:ml-20 md: mr-20 p-4 md:w-2/5 w-full">
                            <h3 className={`${title({color:"violet", size:"lg"})} text-center md:text-2xl md:py-2`}>Podcast Production</h3>
                            <h4 className={`${features({color:"cyan"})} text-lg p-2 text-center mb-2`}>Advanced Sound & Video Editing, and Creative Scriptwriting.</h4>
                            <div className="flex justify-center">
                                <Link href="./contactus" passHref>
                                    <Button 
                                        size="lg" 
                                        radius="full" 
                                        className="bg-gradient-to-tr from-[#03a07d] to-[#006400] hover:from-[#029d70] hover:to-[#005700] text-white shadow-lg transition-all duration-300 ease-in-out"
                                    >
                                        Connect
                                        <FaArrowRight className="ml-2" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <Image
                            src="/images/whitehero.png" // Replace with your image path
                            alt="Scalable Solutions"
                            className="md:w-4/5 w-full object-cover"
                        />
                    </Card>

                    {/* Feature Card Three */}
                    <Card className="flex flex-col border-4 border-green-800 md:flex-row bg-white shadow-lg md:max-w-9xl">
                        <Image
                            src="/images/white3.png" // Replace with your image path
                            alt="Reliable Support"
                            className="md:w-4/5 md:ml-20 w-full"
                        />
                        <div className="flex flex-col items-center justify-center md:p-1 md:mr-20 p-4 md:w-2/5 w-full">
                            <h3 className={`${title({color:"violet", size:"lg"})} text-center md:text-2xl md:py-2`} >Podcast Analytics</h3>
                            <h4 className={`${features({color:"pink"})} text-lg p-2 text-center mb-2`}>Streamlined Tools for Enhanced Audience Engagement</h4>
                            <div className="flex justify-center">
                                <Link href="./contactus" passHref>
                                    <Button 
                                        size="lg" 
                                        radius="full" 
                                        className="bg-gradient-to-tr from-[#03a07d] to-[#006400] hover:from-[#029d70] hover:to-[#005700] text-white shadow-lg transition-all duration-300 ease-in-out"
                                    >
                                        Get Started
                                        <FaArrowRight className="ml-2" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </Card>

                    <div className="mt-10 flex flex-col items-center justify-center">
                        <h2 className="text-2xl font-bold text-center mb-2">Build a podcast that drives results.</h2>
                        <p className="mb-4 text-center px-2">Contact us today to ignite your brand story with audio</p>
                        <Link href="/contactus" passHref> {/* Update the href to your contact page route */}
                            <Button 
                                size="lg" 
                                radius="full" 
                                className="bg-gradient-to-tr from-[#03a07d] to-[#006400] hover:from-[#029d70] hover:to-[#005700] text-white shadow-lg transition-all duration-300 font-semibold  ease-in-out mb-4"
                            >
                                Contact Us
                                <FaArrowRight className="ml-2" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
};

export default WhiteLabelPage;
