import React from "react";
import { Button, Card, Image } from "@nextui-org/react";
import DefaultLayout from "@/layouts/default";
import { title, features } from "@/components/primitives";
import { FaArrowRight } from 'react-icons/fa';
import Link from "next/link";

const WhiteLabelPage = () => {
    return (
        <DefaultLayout>
            <div className="flex flex-col items-center justify-center">

                <div className="flex flex-col space-y-6 w-full">
                <Card className="flex flex-col border-2 border-green-800 md:flex-row bg-white shadow-lg">
                    <Image
                        src="/images/hero.png" // Replace with your image path
                        alt="Turnkey Designs"
                        className="md:w-4/5 w-full"
                    />
                    <div className="flex flex-col  items-center justify-center md:p-1 md:mr-20 p-4 md:w-2/5 w-full ">
                        <h3 className={`${title({color:"violet", size:"lg"})} text-center md:text-2xl md:py-2`}>Turnkey Designs</h3>
                        <h4 className={`${features({color:"blue"})} text-lg p-2 text-center mb-2`}>Bespoke podcast content and state-of-the-art studio design.</h4>
                        <div className="flex justify-center">
                            <Link href="./contactus" passHref>
                                <Button 
                                    size="lg" 
                                    radius="full" 
                                    className="bg-gradient-to-tr from-[#03a07d] to-[#006400] hover:from-[#029d70] hover:to-[#005700] text-white shadow-lg transition-all duration-300 ease-in-out"
                                >
                                    More Info
                                    <FaArrowRight className="ml-2" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Card>

                <Card className="flex flex-col border-2 border-green-800 md:flex-row bg-white shadow-lg">
                    <div className="flex flex-col items-center justify-center md:p-1 md:ml-20 md: mr-20 p-4 md:w-2/5 w-full">
                        <h3 className={`${title({color:"violet", size:"lg"})} text-center md:text-2xl md:py-2`}>Podcast Production</h3>
                        <h4 className={`${features({color:"blue"})} text-lg p-2 text-center mb-2`}>Expert Hosting, Advanced Sound & Video Editing, and Creative Scriptwriting.</h4>
                        <div className="flex justify-center">
                            <Link href="./contactus" passHref>
                                <Button 
                                    size="lg" 
                                    radius="full" 
                                    className="bg-gradient-to-tr from-[#03a07d] to-[#006400] hover:from-[#029d70] hover:to-[#005700] text-white shadow-lg transition-all duration-300 ease-in-out"
                                >
                                    More Info
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

                    <Card className="flex flex-col border-2 border-green-800 md:flex-row bg-white shadow-lg">
                        <Image
                            src="/images/white3.png" // Replace with your image path
                            alt="Reliable Support"
                            className="md:w-4/5 md:ml-20 w-full"
                        />
                        <div className="flex flex-col items-center justify-center md:p-1 md:mr-20 p-4 md:w-2/5 w-full">
                            <h3 className={`${title({color:"violet", size:"lg"})} text-center md:text-2xl md:py-2`}>Podcast Analytics</h3>
                            <h4 className={`${features({color:"blue"})} text-lg p-2 text-center mb-2`}>Streamlined Tools for Enhanced Audience Engagement</h4>
                            <div className="flex justify-center">
                            <Link href="./contactus" passHref>
                                <Button 
                                    size="lg" 
                                    radius="full" 
                                    className="bg-gradient-to-tr from-[#03a07d] to-[#006400] hover:from-[#029d70] hover:to-[#005700] text-white shadow-lg transition-all duration-300 ease-in-out"
                                >
                                    More Info
                                    <FaArrowRight className="ml-2" />
                                </Button>
                            </Link>
                        </div>
                        </div>
                    </Card>
                </div>
            </div>
        </DefaultLayout>
    );
};

export default WhiteLabelPage;
