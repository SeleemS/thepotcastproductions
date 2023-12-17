import React from "react";
import { Card, Image } from "@nextui-org/react";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
    return (
        <DefaultLayout>
            <div className="flex items-center justify-center custom-flex-height">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[...Array(3)].map((_, index) => (
                        <Card key={index} className="bg-transparent border-none" isFooterBlurred radius="lg">
                            <Image
                                src={`./images/card${index + 1}.jpeg`}
                                alt={`Card Image ${index + 1}`}
                                objectFit="cover"
                                width="100%"
                                height="auto"
                            />
                        </Card>
                    ))}
                </div>
            </div>
			<div className="container mx-auto my-8 px-6">
                <h2 className="text-2xl font-bold text-center mb-4">White Label Service</h2>
                <p className="text-center mb-4">Description...</p>
                {/* Additional content like images, text, etc. */}
            </div>
        </DefaultLayout>
    );
}
