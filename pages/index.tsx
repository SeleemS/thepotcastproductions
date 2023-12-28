import React, {useState, useEffect} from "react";
import { Head } from "@/layouts/head";
import { Card, Button, Image } from "@nextui-org/react";
import Link from "next/link";
import DefaultLayout from "@/layouts/default";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowRight, FaBroadcastTower } from 'react-icons/fa';
import { title, subtitle, features } from "@/components/primitives";

export default function IndexPage() {

    const cardVariants = {
        offscreen: { rotate: 0 },
        onscreen: {
            rotate: [0, 5, -5, 5, -5, 0],
            transition: { duration: 0.5 }
        }
    };

    const pulseVariants = {
        pulse: {
            scale: [1, 1.05, 1],
            transition: {
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop" as "loop" // Explicitly specify the type
            }
        }
    };

    return (
        <DefaultLayout>

            <Head
                title="The Potcast Productions | ذا بوتكاست بروداكشنز"
                description="Top-charting podcasts exploring fascinating genres and captivating narratives you won't find anywhere else."
                ogTitle="The Potcast Productions | ذا بوتكاست بروداكشنز"
                ogDescription="Top-charting podcasts exploring fascinating genres and captivating narratives you won't find anywhere else."
            />

            <div className="flex flex-col items-center justify-center">

                <Card className="w-full max-w-7xl mb-10">
                    <Image
                        src="/images/onload2.png"
                        alt="The Potcast Productions"
                        width="auto"
                        height="auto"
                        className="max-h-[500px]"
                    />
                </Card>


                 {/* Original Productions */}
                 <Card className="flex flex-col border-4 border-green-800 lg:flex-row bg-white shadow-lg lg:max-w-7xl lg:w-[90vw] mb-10">
                    <div className="flex justify-center items-center w-full lg:w-4/5 p-5"> {/* Add margin-top on small screens, remove it on lg screens */}
                        <Image
                            src="/images/hero2.jpg"
                            alt="Original Productions"
                            className="w-full lg:w-auto max-w-xl" // Make sure the image takes the full width on small screens, and auto on larger screens
                        />
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 lg:p-1 w-full lg:mr-5 lg:w-2/5">
                        <div>
                            <h3 className={`${title({color:"green", size:"lg"})} text-center text-2xl mt-[-15px] lg:mt-0 lg:py-2`}>Original Productions</h3>
                            <h4 className={`${subtitle({color:"green"})} text-lg p-2 text-center mb-2`}>Top Charting Content</h4>
                        </div>
                        {/* Button */}
                        <div className="col-span-1 md:col-span-3 lg:col-span-3 flex justify-center items-center">
                            <Link href="./productions">
                                <Button 
                                    size="lg" 
                                    radius="full" 
                                    className="bg-gradient-to-tr from-[#03a07d] to-[#006400] hover:from-[#029d70] hover:to-[#005700] text-white shadow-lg transition-all duration-300 font-semibold  ease-in-out lg:mb-8 mb-4"
                                >
                                    Listen Now
                                    <FaArrowRight className="ml-2" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Card>


                {/* White Label Card */}
                <Card className="flex flex-col border-4 border-green-800 lg:flex-row bg-white shadow-lg lg:max-w-7xl lg:w-[90vw] ">
                    <div className="flex justify-center items-center w-full lg:w-4/5 p-5"> {/* Add margin-top on small screens, remove it on lg screens */}
                        <Image
                            src="/images/whitehero.jpg"
                            alt="Branded Podcasts"
                            className="w-full lg:w-auto max-w-xl" // Make sure the image takes the full width on small screens, and auto on larger screens
                        />
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 lg:p-1 w-full lg:mr-5 lg:w-2/5">
                        <div>
                            <h3 className={`${title({color:"green", size:"lg"})} text-center text-2xl mt-[-15px] lg:mt-0 lg:py-2`}>Branded Podcasts</h3>
                            <h4 className={`${subtitle({color:"green"})} text-lg p-2 text-center mb-2`}>360 Production</h4>
                        </div>
                        {/* Button */}
                        <div className="col-span-1 md:col-span-3 lg:col-span-3 flex justify-center items-center">
                            <Link href="./whitelabel">
                                <Button 
                                    size="lg" 
                                    radius="full" 
                                    className="bg-gradient-to-tr from-[#03a07d] to-[#006400] hover:from-[#029d70] hover:to-[#005700] text-white shadow-lg transition-all duration-300 font-semibold  ease-in-out lg:mb-8 mb-4"
                                >
                                    See More
                                    <FaArrowRight className="ml-2" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Card>
            </div>
        </DefaultLayout>
    );
}
