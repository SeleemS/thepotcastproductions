import React from "react";
import { Card, Button, Image } from "@nextui-org/react";
import Link from "next/link";
import DefaultLayout from "@/layouts/default";
import { motion } from "framer-motion";
import { FaArrowRight } from 'react-icons/fa';
import { title, subtitle } from "@/components/primitives";

export default function IndexPage() {
    const cardVariants = {
        offscreen: {
            y: 50,
            opacity: 0
        },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.2
            }
        }
    };
    return (
        <DefaultLayout>
            {/* Flex container for centering */}
            <div className="flex flex-col items-center justify-center">
                {/* Grid for Cards and Button */}
                <div className="flex items-center justify-center min-h-[70vh]">
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 w-full max-w-6xl">
                        
                        {[...Array(3)].map((_, index) => (
                            <Link href="./productions" passHref key={index}>
                                <Card className="bg-transparent border-none cursor-pointer" isFooterBlurred radius="lg">
                                    <Image
                                        src={`./images/card${index + 1}.jpeg`}
                                        alt={`Card Image ${index + 1}`}
                                        objectFit="cover"
                                        width="100%"
                                        height="100%"
                                    />
                                </Card>
                            </Link>
                        ))}
                        {/* Button in the same grid */}
                        <div className="col-span-1 md:col-span-2 lg:col-span-3 flex justify-center">
                            <Link href="./productions">
                                <Button size="lg" radius="full" className="bg-gradient-to-tr bg-gray-800 hover:bg-gray-700 text-white shadow-lg">
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
                        <div className="md:w-1/2"> {/* Adjusted width for image */}
                            <Image
                                src="/images/whitehero.png" // Replace with your image path
                                objectFit="cover"
                                width="100%"
                                height="100%"
                                alt="White Label Services"
                            />
                        </div>
                        <div className="p-8 flex flex-col justify-center md:w-1/2">
                            <h3 className={`${title({color:"yellow"})} text-3xl font-semibold mb-4`}>White Label Solutions</h3>
                            <p className={`${subtitle()} text-lg`}>
                                Describe your white label services here. Include any relevant details
                                or features that would interest potential clients.
                            </p>

                            {/* See More Button */}
                            <div className="col-span-1 md:col-span-2 lg:col-span-3 flex justify-center">
                            <Link href="./whitelabel">
                                <Button size="lg" radius="full" className="bg-gradient-to-tr bg-gray-800 hover:bg-gray-700 text-white shadow-lg">
                                    See More
                                    <FaArrowRight className="ml-2" />
                                </Button>
                            </Link>
                        </div>
                        </div>
                    </Card>
                </div>

            </div>
            {/* Additional content */}
        </DefaultLayout>
    );
}
