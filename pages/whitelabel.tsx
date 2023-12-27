import React from "react";
import { Button, Card, Image } from "@nextui-org/react";
import DefaultLayout from "@/layouts/default";
import { title, features, subtitle } from "@/components/primitives";
import { FaArrowRight } from 'react-icons/fa';
import Link from "next/link";
import { Head } from "@/layouts/head";

const WhiteLabelPage = () => {
    
    return (
        <DefaultLayout>

            <Head
                title="The Potcast Productions | Branded Podcasts"
                description="Premium, customized podcasts that amplify your brand message, engage your audience, and drive results."
                ogTitle="The Potcast Productions | Branded Podcasts"
                ogDescription="Premium, customized podcasts that amplify your brand message, engage your audience, and drive results."
            />
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
                            <h3 className={`${title({color:"green", size:"lg"})} text-center text-2xl mt-[-15px] lg:mt-0 lg:py-2`}>Design</h3>
                            <h4 className={`${subtitle({color:"green"})} text-lg p-2 text-center mb-2`}>Elevate your podcast&apos;s visual appeal with our expert design services. We craft striking logos, set designs, and episode artwork that perfectly embody your brand, making a memorable impact on your audience.</h4>
                        </div>
                    </Card>



                    {/* Feature Card Two */}
                    <Card className="flex flex-col border-4 border-green-800 lg:flex-row bg-white shadow-lg lg:max-w-7xl">
                        <div className="flex justify-center items-center w-full lg:w-4/5 p-5"> {/* Add margin-top on small screens, remove it on lg screens */}
                            <Image
                                src="/images/whitehero.jpg"
                                alt="Turnkey Designs"
                                className="w-full lg:w-auto max-w-xl" // Make sure the image takes the full width on small screens, and auto on larger screens
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center p-4 lg:p-1 w-full lg:mr-10 lg:w-2/5">
                            <h3 className={`${title({color:"green", size:"lg"})} text-center text-2xl mt-[-15px] lg:mt-0 lg:py-2`}>Content</h3>
                            <h4 className={`${subtitle({color:"green"})} text-lg p-2 text-center mb-2`}>Enhance your podcast with our content mastery. We offer in-depth consultations, targeted research for hot topics, captivating storytelling, and skilled writing that connects with your audience. Our goal? To create content that captivates your listeners, keeping them eager for your next episode.</h4>
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
                            <h3 className={`${title({color:"green", size:"lg"})} text-center text-2xl mt-[-15px] lg:mt-0 lg:py-2`}>Production</h3>
                            <h4 className={`${subtitle({color:"green"})} text-lg p-2 text-center mb-2`}>Streamline your podcast production with our technical prowess. We provide professional recording for crystal-clear audio and dynamic sound design for an immersive listening experience. Plus, our video shooting services enable visual storytelling, broadening your reach across various platforms. Let us handle the technicalities, so you can focus on your message.</h4>
                        </div>
                    </Card>

                    {/* Feature Card Four */}
                    <Card className="flex flex-col border-4 border-green-800 lg:flex-row bg-white shadow-lg lg:max-w-7xl">
                        <div className="flex justify-center items-center w-full lg:w-4/5 p-5"> {/* Add margin-top on small screens, remove it on lg screens */}
                            <Image
                                src="/images/arabnarrative.png"
                                alt="Turnkey Designs"
                                className="w-full lg:w-auto max-w-xl" // Make sure the image takes the full width on small screens, and auto on larger screens
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center p-4 lg:p-1 w-full lg:mr-10 lg:w-2/5">
                            <h3 className={`${title({color:"green", size:"lg"})} text-center text-2xl mt-[-15px] lg:mt-0 lg:py-2`}>Publishing</h3>
                            <h4 className={`${subtitle({color:"green"})} text-lg p-2 text-center mb-2`}>Our hosting solutions make your podcast easily accessible across multiple platforms. We also manage YouTube channels, helping you tap into the world of video content. With our publishing expertise, your podcast gains maximum visibility and impact, ensuring your audience never misses an episode.</h4>
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
