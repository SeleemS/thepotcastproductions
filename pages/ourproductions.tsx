import DefaultLayout from '@/layouts/default';
import { Card, Image } from '@nextui-org/react';
import React from 'react';

const OurProductionsPage = () => {
    return (
        <DefaultLayout>
            <div className="container mx-auto p-6">
                <h1 className="text-3xl font-bold text-center mb-10">Our Productions</h1>
                
                <div className="flex flex-col md:flex-row items-center mb-5">
                    <Image src="./images/card1.jpeg" width={500} height={500} alt="Image Description" objectFit="cover" />
                    <div className="text-center md:text-left md:ml-4">
                        <h2 className="text-2xl font-bold my-2">اشتري مني</h2>
                        <p className="text-lg">
إحنا ٣ أصحاب بنتكلم من ٣ وجهات نظر مختلفة، قعدتنا مفيهاش استفادة لو مش بتعتبر الانبساط ده استفادة. من إنتاج ذا بوتكاست برودكشنز.</p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center mb-5">
                    <Image src="./images/card2.jpeg" width={500} height={500} alt="Image Description" objectFit="cover" />
                    <div className="text-center md:text-left md:ml-4">
                        <h2 className="text-2xl font-bold my-2">اشتري مني</h2>
                        <p className="text-lg">
إحنا ٣ أصحاب بنتكلم من ٣ وجهات نظر مختلفة، قعدتنا مفيهاش استفادة لو مش بتعتبر الانبساط ده استفادة. من إنتاج ذا بوتكاست برودكشنز.</p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center mb-5">
                    <Image src="./images/card3.jpeg" width={500} height={500} alt="Image Description" objectFit="cover" />
                    <div className="text-center md:text-left md:ml-4">
                        <h2 className="text-2xl font-bold my-2">اشتري مني</h2>
                        <p className="text-lg">
إحنا ٣ أصحاب بنتكلم من ٣ وجهات نظر مختلفة، قعدتنا مفيهاش استفادة لو مش بتعتبر الانبساط ده استفادة. من إنتاج ذا بوتكاست برودكشنز.</p>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
};

export default OurProductionsPage;
