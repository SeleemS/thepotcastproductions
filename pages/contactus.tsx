import React, { useState, FormEvent, useRef } from "react";
import { useRouter } from 'next/router';
import { Card, Button, Input, Textarea, Select, SelectItem } from "@nextui-org/react";
import DefaultLayout from "@/layouts/default";
import { title } from "@/components/primitives";
import { FaPaperPlane } from 'react-icons/fa';
import {Head} from '@/layouts/head';

export default function ContactUsPage() {
    const subjects = [
        { value: 'Advertising', label: 'Advertising' },
        { value: 'Branded Podcasts', label: 'Branded Podcasts' },
        { value: 'Feedback', label: 'Feedback' },
        { value: 'General Inquiry', label: 'General Inquiry' }
    ];

    const [submissionSuccess, setSubmissionSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const router = useRouter();
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
    
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
    
            if (data.success) {
                setSuccessMessage('Thank you for your message. We will get back to you soon!');
                setSubmissionSuccess(true);

                // Check if the form is still mounted and then reset
                if (formRef.current) {
                    formRef.current.reset();
                }
            } else {
                // Handle failure
                console.error('Failed to send message:', data.message);
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };
    
    

    return (
        <DefaultLayout>

            <Head
                title="The Potcast Productions | Contact Us"
                description="Reach out to us for any inquiries, feedback, or advertising opportunities."
                ogTitle="The Potcast Productions | Contact Us"
                ogDescription="Reach out to us for any inquiries, feedback, or advertising opportunities."
            />

            <div className="flex flex-col items-center justify-center mx-auto w-[325px] md:w-[500px] mt-[-5px]">
                <Card className="bg-white/90 backdrop-blur-md border-4 border-green-800 w-full p-4 " isBlurred radius="lg">
                    <h2 className={`${title({ color: "green" })} font-semibold mb-4 text-center`}>Contact Us</h2>
                    
                    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <Input
                        isRequired
                        type="name"
                        name="name"
                        label="Name"
                        className="max-w-full border-2 border-green-800 rounded-lg"
                        />
                        <Input
                        isRequired
                        type="email"
                        name="email" 
                        label="Email"
                        className="max-w-full border-2 border-green-800 rounded-lg"
                        />
                        <Input
                        type="tel"
                        name="phone" 
                        label="Phone Number"
                        className="max-w-full border-2 border-green-800 rounded-lg"
                        />

                        {/*Dropdown for Subject*/}
                        <Select
                        isRequired
                        name="subject"
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
                        name="message"
                        label="Message"
                        placeholder="How can we help?"
                        className="max-w-full border-2 border-green-800 rounded-lg mb-[-7px]"
                        rows={3}
                        />
                        <Button
                        type="submit"  // Change to submit type
                        size="lg"
                        className="bg-gradient-to-tr from-[#03a07d] to-[#006400] hover:from-[#029d70] hover:to-[#005700] text-white shadow-lg transition-all duration-300 ease-in-out"
                        >
                        Send Message
                        <FaPaperPlane className="ml-2" />
                        </Button>
                    </form>
                </Card>

                {submissionSuccess && (
                    <div className="text-center text-green-500 mt-4">
                        {successMessage}
                    </div>
                )}
            </div>
        </DefaultLayout>
    );
}
