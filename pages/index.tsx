import React from "react";
import { Card, Button, Image } from "@nextui-org/react";
import Link from "next/link";
import DefaultLayout from "@/layouts/default";
import { motion } from "framer-motion";
import { FaArrowRight, FaBroadcastTower } from 'react-icons/fa';
import { title, subtitle, features } from "@/components/primitives";
import NextLink from 'next/link';

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
            {/* Flex container for centering */}
            <div className="flex flex-col items-center justify-center">
                <div className="flex items-center justify-center mt-[-4px] mb-4 md:mb-[-24px]">
                        
                        {/* Static Streaming Now Text */}
                        <h2 className={`${title({ color: "violet" })} text-4xl`}>
                            Streaming Now
                        </h2>
                        {/* Animated Broadcasting Icon */}
                        <motion.div
                            variants={pulseVariants}
                            initial="pulse"
                            animate="pulse"
                        >
                            <FaBroadcastTower className="text-4xl ml-4" />
                        </motion.div>
                    </div>
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
                                    <Card className="bg-transparent border-2 border-green-800 cursor-pointer" isFooterBlurred radius="lg">
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
                <div className="w-full max-w-6xl mt-4">
                
                    <NextLink href="./whitelabel" passHref>
        <Card isHoverable isPressable className="flex flex-col md:flex-row bg-white border-2 border-green-800 shadow-lg cursor-pointer">
            <div className="md:w-1/2 p-4">
                <Image
                    src="/images/whitehero.png"
                    width="100%"
                    height="100%"
                    alt="White Label Services"
                />
            </div>
            <div className="p-8 flex flex-col justify-center md:w-1/2">
                <h3 className={`${title({color:"violet"})} text-3xl font-semibold mt-[-15px] mb-4`}>White Label Solutions</h3>
                <h4 className={`${features({color:"yellow"})} text-lg mb-2`}>Turnkey Designs</h4>
                <h4 className={`${features({color:"blue"})} text-lg mb-2`}>Podcast Production</h4>
                <h4 className={`${features({color:"violet"})} text-lg mb-2`}>Podcast Analytics</h4>

                {/* See More Button */}
                <div className="mt-4 mb-4 flex justify-center">
                    <Button 
                        size="lg" 
                        radius="full" 
                        className="bg-gradient-to-tr from-[#03a07d] to-[#006400] hover:from-[#029d70] hover:to-[#005700] text-white shadow-lg transition-all duration-300 ease-in-out"
                    >
                        Connect
                        <FaArrowRight className="ml-2" />
                    </Button>
                </div>

                {/* Additional Image */}
                <div className="max-w-[400px] mx-auto">
                    <Image
                        src="/images/hero.png"
                        alt="Additional Details"
                        width="100%"
                        height="auto"
                    />
                </div>
            </div>
        </Card>
    </NextLink>
                </div>

            </div>
            {/* Additional content */}
        </DefaultLayout>
    );
}
