import React from "react";
import { Card, Button, Input, Textarea, Select, SelectItem } from "@nextui-org/react";
import DefaultLayout from "@/layouts/default";
import { FaPaperPlane } from 'react-icons/fa';

export default function ContactUsPage() {
    const subjects = [
        { value: 'Advertising', label: 'Advertising' },
        { value: 'White Label Services', label: 'White Label Services' },
        { value: 'Feedback', label: 'Feedback' },
        { value: 'General Inquiry', label: 'General Inquiry' }
    ];

    const inputStyle = {
        border: "1px solid black", // Define the border color and width
        // Add more styles if needed
    };

    return (
        <DefaultLayout>
            <div className="flex flex-col items-center justify-center   mt-[-20px] md:bg-[url('/images/landing2.png')] bg-no-repeat bg-contain bg-center">
                <Card className="bg-white/90 backdrop-blur-md border border-gray-200 w-full md:max-w-md p-4" isBlurred radius="lg">
                    <h2 className="text-2xl font-semibold mb-4 text-center">Contact Us</h2>
                    
                    <form className="flex flex-col gap-4">
                        <Input
                            isRequired
                            type="name"
                            label="Name"
                            className="max-w-full border-2 border-green-800 rounded-lg"
                            />
                         <Input
                            isRequired
                            type="email"
                            label="Email"
                            className="max-w-full border-2 border-green-800 rounded-lg"
                            />
                          <Input
                            type="tel"
                            label="Phone Number"
                            className="max-w-full border-2 border-green-800 rounded-lg"
                        />

                          {/* Dropdown for Subject */}
                        <Select
                            isRequired
                            label="Subject"
                            className="max-w-full border-2 border-green-800 rounded-lg"
                        >
                            {subjects.map((subject) => (
                                <SelectItem key={subject.value} value={subject.value}>
                                    {subject.label}
                                </SelectItem>
                            ))}
                        </Select>
                        
                        <Textarea
                            isRequired
                            label="Message"
                            placeholder="How can we help?"
                            className="max-w-full border-2 border-green-800 rounded-lg mb-[-7px]"
                            rows={3} // Adjust the number of rows as needed
                        />
                        <Button
                            size="lg"
                            className="bg-gradient-to-tr from-[#03a07d] to-[#006400] hover:from-[#029d70] hover:to-[#005700] text-white shadow-lg transition-all duration-300 ease-in-out"
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
