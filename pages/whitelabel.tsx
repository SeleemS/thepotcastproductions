// Import necessary components
import React from "react";
import { Card, Image } from "@nextui-org/react";
import DefaultLayout from "@/layouts/default";
import { title, subtitle } from "@/components/primitives";

const WhiteLabelPage = () => {
    // Define the strengths or features
    const strengths = [
        {
            title: "Customization Flexibility",
            description: "Offering bespoke solutions tailored to client needs.",
            image: "/images/hero.png" // Replace with your image path
        },
        {
            title: "Scalable Solutions",
            description: "Easily scalable services to grow with your clients.",
            image: "/images/whitehero.png" // Replace with your image path
        },
        {
            title: "Reliable Support",
            description: "Dedicated support team ensuring service reliability.",
            image: "/images/white3.png" // Replace with your image path
        }
    ];

    return (
        <DefaultLayout>
            <div className="flex flex-col items-center justify-center ">
                <h1 className={`${title({color:"green"})} text-4xl mb-8`}>White Label Solutions</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {strengths.map((strength, index) => (
                        <Card key={index} className="bg-white shadow-lg">
                                <Image
                                    src={strength.image}
                                    alt={strength.title}
                                    objectFit="cover"
                                    width="100%"
                                    height={200}
                                />
                                <h3 className={`${title()} text-2xl mt-4`}>{strength.title}</h3>
                                <p className={`${subtitle()}`}>{strength.description}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </DefaultLayout>
    );
};

export default WhiteLabelPage;
