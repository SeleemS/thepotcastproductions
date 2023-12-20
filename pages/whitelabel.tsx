import React from "react";
import { Card, Image } from "@nextui-org/react";
import DefaultLayout from "@/layouts/default";
import { title, features } from "@/components/primitives";

const WhiteLabelPage = () => {
    return (
        <DefaultLayout>
            <div className="flex flex-col items-center justify-center">
                <h1 className={`${title({color:"green"})} text-4xl mb-8`}>White Label Solutions</h1>
                <div className="flex flex-col space-y-6 w-full">
                    <Card className="flex flex-col md:flex-row bg-white shadow-lg">
                        <Image
                            src="/images/hero.png" // Replace with your image path
                            alt="Turnkey Designs"
                            className="md:w-4/5 w-full"
                        />
                        <div className="flex flex-col items-center p-4 md:w-1/5 w-full">
                            <h3 className={`${title()} text-lg md:text-xl`}>Turnkey Designs</h3>
                            <h4 className={`${features({color:"yellow"})} text-lg mb-2`}>Bespoke podcast content and state-of-the-art studio design.</h4>
                        </div>
                    </Card>

                    <Card className="flex flex-col md:flex-row bg-white shadow-lg">
                        <Image
                            src="/images/whitehero.png" // Replace with your image path
                            alt="Scalable Solutions"
                            className="md:w-4/5 w-full"
                        />
                        <div className="flex flex-col items-center p-4 md:w-1/5 w-full">
                            <h3 className={`${title()} text-lg md:text-xl`}>Podcast Production</h3>
                            <h4 className={`${features({color:"blue"})} text-lg mb-2`}>Expert Hosting, Advanced Sound & Video Editing, and Creative Scriptwriting.</h4>
                        </div>
                    </Card>

                    <Card className="flex flex-col md:flex-row bg-white shadow-lg">
                        <Image
                            src="/images/white3.png" // Replace with your image path
                            alt="Reliable Support"
                            className="md:w-4/5 w-full"
                        />
                        <div className="flex flex-col items-center p-4 md:w-1/5 w-full">
                            <h3 className={`${title()} text-lg md:text-xl`}>Podcast Analytics</h3>
                            <h4 className={`${features({color:"cyan"})} text-lg mb-2`}>Streamlined Tools for Enhanced Audience Engagement</h4>
                        </div>
                    </Card>
                </div>
            </div>
        </DefaultLayout>
    );
};

export default WhiteLabelPage;
