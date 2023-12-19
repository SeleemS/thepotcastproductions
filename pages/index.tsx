import React from "react";
import { Card, Button, Image } from "@nextui-org/react";
import Link from "next/link";
import DefaultLayout from "@/layouts/default";
import { motion } from "framer-motion";
import { FaArrowRight } from 'react-icons/fa';

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
            <h1>Original Productions</h1>
            <div className="flex flex-col items-center justify-center custom-flex-height">
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
            </div>
            {/* Additional content */}
        </DefaultLayout>
    );
}
