import React from "react";
import { Card, Button, Image } from "@nextui-org/react";
import Link from "next/link";
import DefaultLayout from "@/layouts/default";
import { motion } from "framer-motion";
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
            <div className="flex flex-col items-center justify-center">

                {/* Hero Container */}
                <div className="rounded-lg max-w-9xl mt-[-30px]">

                    {/* Title */}
                    <div className="flex flex-row items-center justify-center px-4 mt-[-4px] mb-4 md:mb-[-24px]">
                        <h2 className={`${title({ color: "green" })}  text-4xl`}>Streaming Now..</h2>
                    </div>

                    {/* Cards */}
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

                            {/* Button */}
                            <div className="col-span-1 md:col-span-2 lg:col-span-3 flex justify-center mb-[-10px]">
                                <Link href="./productions">
                                    <Button size="lg" className="bg-gradient-to-tr from-[#03a07d] to-[#006400] hover:from-[#029d70] hover:to-[#005700] text-white shadow-lg transition-all duration-300 font-semibold ease-in-out">
                                        Listen Now
                                        <FaArrowRight className="ml-2" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* White Label Services Card*/}
                <div className="w-full max-w-6xl md:mt-[-25px] mt-4">
                
                    <Link href="./whitelabel" passHref> {/* Wrap Card in Link */}
                        <Card isHoverable isPressable className="flex flex-col md:flex-row bg-white border-2 border-green-800 shadow-lg cursor-pointer">
                            <div className="md:w-1/2 p-4">
                                <Image
                                    src="/images/whitehero.png"
                                    width="100%"
                                    height="100%"
                                    alt="White Label Services"
                                />
                            </div>

                            {/* Card Body */}
                            <div className="p-8 flex flex-col justify-center md:w-1/2">

                                {/* Features */}
                                <h3 className={`${title({color:"violet"})} text-3xl font-semibold mt-[-15px] mb-4`}>White Label Solutions</h3>
                                <h4 className={`${features({color:"yellow"})} text-lg mb-2`}>Turnkey Designs</h4>
                                <h4 className={`${features({color:"blue"})} text-lg mb-2`}>Podcast Production</h4>
                                <h4 className={`${features({color:"violet"})} text-lg mb-2`}>Podcast Analytics</h4>

                                {/* Button */}
                                <div className="mt-4 mb-7 flex justify-center">
                                    <Button 
                                        size="lg" 
                                        radius="full" 
                                        className="bg-gradient-to-tr from-[#03a07d] to-[#006400] hover:from-[#029d70] hover:to-[#005700] text-white shadow-lg transition-all duration-300 font-semibold ease-in-out"
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
                    </Link>
                </div>
            </div>
        </DefaultLayout>
    );
}
