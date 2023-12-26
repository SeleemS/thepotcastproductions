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

                <div className="flex flex-col items-center justify-center mb-10 lg:px-20">
                    <h2 className={`${title({color:"green"})} text-3xl text-center font-semibold`}>We create premium, customized podcasts that amplify your brand message, engage your audience, and drive results. </h2>
                </div>

                <div className="flex flex-col space-y-6 w-full items-center">

                    {/* Feature Card One */}
                    <Card className="flex flex-col border-4 border-green-800 lg:flex-row bg-white shadow-lg lg:max-w-7xl">
                        <div className="flex justify-center items-center w-full lg:w-4/5 p-5"> {/* Add margin-top on small screens, remove it on lg screens */}
                            <Image
                                src="/images/hero2.jpg"
                                alt="Turnkey Designs"
                                className="w-full lg:w-auto max-w-xl" // Make sure the image takes the full width on small screens, and auto on larger screens
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center p-4 lg:p-1 w-full lg:mr-5 lg:w-2/5">
                            <h3 className={`${title({color:"violet", size:"lg"})} text-center text-2xl mt-[-15px] lg:mt-0 lg:py-2`}>Design</h3>
                            <h4 className={`${subtitle()} text-lg p-2 text-center mb-2`}>Our team specializes in creating captivating branding elements for your podcast. From logo design to set aesthetics and episode artwork, we ensure that your podcast visually aligns with your brand identity, leaving a lasting impression on your audience.</h4>
                        </div>
                    </Card>



                    {/* Feature Card Two */}
                    <Card className="flex flex-col border-4 border-green-800 lg:flex-row bg-white shadow-lg lg:max-w-7xl">
                        <div className="flex justify-center items-center w-full lg:w-4/5 p-5"> {/* Add margin-top on small screens, remove it on lg screens */}
                            <Image
                                src="/images/whitehero.png"
                                alt="Turnkey Designs"
                                className="w-full lg:w-auto max-w-xl" // Make sure the image takes the full width on small screens, and auto on larger screens
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center p-4 lg:p-1 w-full lg:mr-10 lg:w-2/5">
                            <h3 className={`${title({color:"violet", size:"lg"})} text-center text-2xl mt-[-15px] lg:mt-0 lg:py-2`}>Content</h3>
                            <h4 className={`${subtitle()} text-lg p-2 text-center mb-2`}>We understand the significance of compelling content in podcasting. Our services include comprehensive consultation sessions, research to identify relevant topics, development of engaging narratives, and proficient writing that resonates with your target audience. We strive to deliver content that keeps your listeners engaged and coming back for more.</h4>
                        </div>
                    </Card>

                    {/* Feature Card Three */}
                    <Card className="flex flex-col border-4 border-green-800 lg:flex-row bg-white shadow-lg lg:max-w-7xl">
                        <div className="flex justify-center items-center w-full lg:w-4/5 p-5"> {/* Add margin-top on small screens, remove it on lg screens */}
                            <Image
                                src="/images/white3.png"
                                alt="Turnkey Designs"
                                className="w-full lg:w-auto max-w-xl" // Make sure the image takes the full width on small screens, and auto on larger screens
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center p-4 lg:p-1 w-full lg:mr-10 lg:w-2/5">
                            <h3 className={`${title({color:"violet", size:"lg"})} text-center text-2xl mt-[-15px] lg:mt-0 lg:py-2`}>Production</h3>
                            <h4 className={`${subtitle()} text-lg p-2 text-center mb-2`}>With our expertise in production, we take care of the technical aspects of podcasting. Our services encompass professional recording, ensuring high-quality audio, as well as sound design to enhance the overall listening experience. Additionally, we offer video shooting services for those looking to incorporate visual elements into their podcasts, allowing you to connect with your audience on multiple platforms.</h4>
                        </div>
                    </Card>

                    {/* Feature Card Four */}
                    <Card className="flex flex-col border-4 border-green-800 lg:flex-row bg-white shadow-lg lg:max-w-7xl">
                        <div className="flex justify-center items-center w-full lg:w-4/5 p-5"> {/* Add margin-top on small screens, remove it on lg screens */}
                            <Image
                                src="/images/card4.png"
                                alt="Turnkey Designs"
                                className="w-full lg:w-auto max-w-xl" // Make sure the image takes the full width on small screens, and auto on larger screens
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center p-4 lg:p-1 w-full lg:mr-10 lg:w-2/5">
                            <h3 className={`${title({color:"violet", size:"lg"})} text-center text-2xl mt-[-15px] lg:mt-0 lg:py-2`}>Publishing</h3>
                            <h4 className={`${subtitle()} text-lg p-2 text-center mb-2`}>We provide seamless solutions for hosting your podcast, ensuring its accessibility to listeners across various podcast platforms. Additionally, we offer YouTube management services, enabling you to expand your reach and leverage the power of video content. Our publishing services guarantee that your podcast is readily available to your audience, maximizing its visibility and impact.</h4>
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
