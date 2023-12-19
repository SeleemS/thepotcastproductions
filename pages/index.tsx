import React from "react";
import { Card, Image } from "@nextui-org/react";
import Link from "next/link";
import DefaultLayout from "@/layouts/default";
import { motion } from "framer-motion";

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
            <div className="flex items-center justify-center custom-flex-height">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[...Array(3)].map((_, index) => (
                        <motion.div
                            key={index}
                            initial={index >= 2 ? "offscreen" : {}}
                            animate={index >= 2 ? {} : "onscreen"}
                            whileInView={index >= 2 ? "onscreen" : {}}
                            viewport={{ once: true, amount: 0.8 }}
                            variants={cardVariants}
                        >
                            <Link href="./productions" passHref>
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
                        </motion.div>
                    ))}
                </div>
            </div>
            {/* Additional content */}
        </DefaultLayout>
    );
}
