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
            <div className="flex flex-col items-center justify-center ">
                {/* Grid for Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                    {[...Array(3)].map((_, index) => (
                        <Link href="./productions" passHref key={index}>
                            <Card className="bg-transparent border-none cursor-pointer" isFooterBlurred radius="lg">
                                <Image
                                    src={`./images/card${index + 1}.jpeg`}
                                    alt={`Card Image ${index + 1}`}
                                    objectFit="cover"
                                    width="100%"
                                    height="auto"
                                />
                            </Card>
                        </Link>
                    ))}
                </div>
                {/* Button */}
                <Link href="./productions">
                    <Button size="lg" radius="full" className="bg-gradient-to-tr bg-gray-800 hover:bg-gray-700 text-white shadow-lg">
                        See More
                        <FaArrowRight className="ml-2" /> {/* Icon added here */}
                    </Button>
                </Link>

                {/* White Label Services Card */}
                <Card isHoverable isPressable className="w-full md:max-w-5xl flex flex-col md:flex-row bg-white shadow-lg my-5">
                    <div className="md:w-2/3">
                        <Image
                            src="/images/whitehero.png" // Replace with your image path
                            objectFit="cover"
                            width="100%"
                            height="100%"
                            alt="White Label Services"
                        />
                    </div>
                    <div className="p-6 flex flex-col justify-center md:w-1/3">
                        <h3 className={`${title()} text-2xl font-semibold mb-3`}>White Label Services</h3>
                        <p className={`${subtitle()} mb-4`}>
                            Describe your white label services here. Include any relevant details
                            or features that would interest potential clients.
                        </p>
                        {/* Add more content or buttons as needed */}
                    </div>
                </Card>
            </div>
            {/* Additional content */}
        </DefaultLayout>
    );
}
