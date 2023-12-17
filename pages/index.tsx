import React from "react";
import { Card, CardHeader, Image } from "@nextui-org/react";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
    return (
        <DefaultLayout>
            <div className="container mx-auto mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[...Array(3)].map((_, index) => (
                    <Card key={index} className="bg-transparent" isFooterBlurred
					radius="lg"
					className="border-none">
                        
                        <Image
                            src={`./images/card${index + 1}.jpeg`} // Replace with your image paths
                            alt={`Card Image ${index + 1}`}
                            objectFit="cover"
                            width="100%"
                            height="auto"
                        />
						
                    </Card>
                ))}
            </div>
        </DefaultLayout>
    );
}
