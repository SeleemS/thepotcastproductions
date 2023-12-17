import React from "react";
import { Card, Image } from "@nextui-org/react";
import Link from "next/link";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
    return (
        <DefaultLayout>
            <div className="flex items-center justify-center custom-flex-height">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[...Array(3)].map((_, index) => (
                        <Link key={index} href="./ourproductions" passHref>
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
            </div>
            {/* Additional content */}
        </DefaultLayout>
    );
}
