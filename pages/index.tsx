import React from "react";
import { Card, Button, Image } from "@nextui-org/react";
import Link from "next/link";
import DefaultLayout from "@/layouts/default";
import { motion } from "framer-motion";
import { FaArrowRight } from 'react-icons/fa';
import { title, subtitle, features } from "@/components/primitives";

export default function IndexPage() {
    const cardVariants = {
        offscreen: { rotate: 0 },
        onscreen: {
            rotate: [0, 5, -5, 5, -5, 0],
            transition: { duration: 0.5 }
        }
    };

    return (
        <DefaultLayout>
            {/* Flex container for centering */}
            <div className="flex flex-col items-center justify-center">
                <h2 className={`${title({color:"green"})} text-4xl mt-[-4px] mb-4 md:mb-[-24px]`}>Streaming Now..</h2>
                {/* Grid for Cards and Button */}
                <div className="flex items-center justify-center min-h-[70vh]">
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 w-full max-w-6xl">
                        
                        
                        {[...Array(3)].map((_, index) => (
                            <Link href="./productions" passHref key={index}>
                                <motion.div
                                    variants={cardVariants}
                                    initial="offscreen"
                                    animate="onscreen"
                                >
                                    <Card className="bg-transparent border-none cursor-pointer" isFooterBlurred radius="lg">
                                        <Image
                                            src={`./images/card${index + 1}.jpeg`}
                                            alt={`Card Image ${index + 1}`}
                                            width="100%"
                                            height="100%"
                                        />
                                    </Card>
                                </motion.div>
                            </Link>
                        ))}
                        {/* Button in the same grid */}
                        <div className="col-span-1 md:col-span-2 lg:col-span-3 flex justify-center">
                            <Link href="./productions">
                            <Button 
                                size="lg" 
                                radius="full" 
                                className="bg-gradient-to-tr from-[#03a07d] to-[#006400] hover:from-[#029d70] hover:to-[#005700] text-white shadow-lg transition-all duration-300 ease-in-out"
                            >
                                    See More
                                    <FaArrowRight className="ml-2" />
                                    </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* White Label Services Card with more space for text */}
                <div className="w-full max-w-6xl px-4 my-5">
                    <Card isHoverable isPressable className="flex flex-col md:flex-row bg-white shadow-lg">
                        <div className="md:w-1/2">
                            <Image
                                src="/images/whitehero.png"
                                width="100%"
                                height="100%"
                                alt="White Label Services"
                            />
                        </div>
                        <div className="p-8 flex flex-col justify-center md:w-1/2">
                            <h3 className={`${title({color:"green"})} text-3xl font-semibold mb-4`}>White Label Solutions</h3>
                            <h4 className={`${features({color:"yellow"})} text-lg mb-2`}>Podcast Editing</h4>
                            <h4 className={`${features({color:"blue"})} text-lg mb-2`}>Podcast Hosting</h4>
                            <h4 className={`${features({color:"cyan"})} text-lg mb-2`}>Podcast Analytics</h4>

                            {/* See More Button */}
                            <div className="mt-4 mb-4 flex justify-center">
                                <Link href="./whitelabel">
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

                            {/* Additional Image */}
                            <div className="max-w-[425px] mx-auto">  {/* Adjusted to max-w-sm for a smaller image */}
                                <Image
                                    src="/images/hero.png" // Replace with your desired image path
                                    alt="Additional Details"
                                    width="100%"
                                    height="auto"
                                />
                            </div>
                        </div>
                    </Card>
                </div>

            </div>
            {/* Additional content */}
        </DefaultLayout>
    );
}
