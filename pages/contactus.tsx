import React from "react";
import { Card, Button, Input, Textarea } from "@nextui-org/react";
import DefaultLayout from "@/layouts/default";
import { FaPaperPlane } from 'react-icons/fa';

export default function ContactUsPage() {
    // You can add state and form handling logic here

    return (
        <DefaultLayout>
            <div className="flex flex-col items-center justify-center custom-flex-height mt-10">
                <Card className="bg-transparent border-none w-full md:max-w-md p-6" isBlurred radius="lg">
                    <h2 className="text-2xl font-semibold mb-4 text-center">Contact Us</h2>
                    
                    <form className="flex flex-col gap-4 ">
                        <Input
                            clearable
                            bordered={false} // Removed borders for a cleaner look
                            fullWidth
                            color="primary"
                            size="lg"
                            placeholder="Your Name"
                            className="bg-white shadow-sm" // Added background color and shadow
                        />
                        <Input
                            clearable
                            bordered={false}
                            fullWidth
                            color="primary"
                            size="lg"
                            placeholder="Your Email"
                            type="email"
                            className="bg-white shadow-sm"
                        />
                        <Textarea
                            bordered={false}
                            fullWidth
                            color="primary"
                            size="lg"
                            placeholder="Your Message"
                            className="bg-white shadow-sm"
                        />
                        <Button
                            size="lg"
                            className="bg-gray-800 hover:bg-gray-700 text-white shadow-lg" // Darker button color
                        >
                            Send Message
                            <FaPaperPlane className="ml-2" />
                        </Button>
                    </form>
                </Card>
            </div>
        </DefaultLayout>
    );
}
