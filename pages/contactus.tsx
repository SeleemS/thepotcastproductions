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

    return (
        <DefaultLayout>
            <div className="flex flex-col items-center justify-center custom-flex-height  md:bg-[url('/images/landing2.png')] bg-no-repeat bg-contain bg-center">
                <Card className="bg-white/90 backdrop-blur-md border border-gray-200 w-full md:max-w-md p-6" isBlurred radius="lg">
                    <h2 className="text-2xl font-semibold mb-4 text-center">Contact Us</h2>
                    
                    <form className="flex flex-col gap-4">
                        <Input
                            isRequired
                            type="name"
                            label="Name"
                            className="max-w-full"
                            />
                         <Input
                            isRequired
                            type="email"
                            label="Email"
                            className="max-w-full"
                            />
                          <Input
                            type="tel"
                            label="Phone Number"
                            className="max-w-full"
                        />

                          {/* Dropdown for Subject */}
                        <Select
                            isRequired
                            label="Subject"
                            className="max-w-full"
                        >
                            {subjects.map((subject) => (
                                <SelectItem key={subject.value} value={subject.value}>
                                    {subject.label}
                                </SelectItem>
                            ))}
                        </Select>
                        
                        <Input
                            isRequired
                            type="message"
                            label="Message"
                            className="max-w-full"
                            size="lg"
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
