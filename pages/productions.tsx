import DefaultLayout from '@/layouts/default';
import { Card, Image } from '@nextui-org/react';
import React from 'react';
import { FaYoutube, FaSpotify, FaApple } from 'react-icons/fa';

const ProductionsPage = () => {
    return (
        <DefaultLayout>
            <div className="container mx-auto p-6">
                
            <div className="flex flex-col md:flex-row items-center mb-5">
            <div className="flex-shrink-0" style={{ width: '500px', height: '500px' }}>
                <Image src="./images/card1.jpeg" alt="Image Description" objectFit="cover" width="100%" height="100%" />
            </div>
            <div className="text-right md:text-right md:ml-4 flex-grow md:max-h-[500px] overflow-auto">
                <h2 className="text-2xl font-bold my-2">اشتري مني</h2>
                <p className="text-lg">إحنا ٣ أصحاب بنتكلم من ٣ وجهات نظر مختلفة، قعدتنا مفيهاش استفادة لو مش بتعتبر الانبساط ده استفادة. من إنتاج ذا بوتكاست برودكشنز.</p>
                        <div className="mt-4 flex justify-end gap-2">
                            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-red-600 text-white rounded-full flex items-center justify-center gap-2">
                                <FaYoutube /> YouTube
                            </a>
                            <a href="https://www.spotify.com" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-green-600 text-white rounded-full flex items-center justify-center gap-2">
                                <FaSpotify /> Spotify
                            </a>
                            <a href="https://www.apple.com/apple-music/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gray-800 text-white rounded-full flex items-center justify-center gap-2">
                                <FaApple /> Apple
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center mb-5">
                    <div className="flex-shrink-0" style={{ width: '500px' }}>
                        <Image src="./images/card2.jpeg" alt="Image Description" objectFit="cover" width="100%" height="500px" />
                    </div>
                    <div className="text-right md:text-right md:ml-4 flex-grow">
                        <h2 className="text-2xl font-bold my-2">كبرني بودكاست</h2>
                        <p className="text-lg">في أي قاعدة صُلح أو اختلاف في الكلام، بيبقى في حد لازم (نكبره).. احنا هنا هنكبر بعض، ونكبركم، ونكبر حاجات ملهاش حد يكبرها..بس من وجهة نظر بولا وريم</p>
                        <div className="mt-4 flex justify-end gap-2">
                            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-red-600 text-white rounded-full flex items-center justify-center gap-2">
                                <FaYoutube /> YouTube
                            </a>
                            <a href="https://www.spotify.com" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-green-600 text-white rounded-full flex items-center justify-center gap-2">
                                <FaSpotify /> Spotify
                            </a>
                            <a href="https://www.apple.com/apple-music/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gray-800 text-white rounded-full flex items-center justify-center gap-2">
                                <FaApple /> Apple
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center mb-5">
                    <div className="flex-shrink-0" style={{ width: '500px' }}>
                        <Image src="./images/card3.jpeg" alt="Image Description" objectFit="cover" width="100%" height="500px" />
                    </div>
                    <div className="text-right md:text-right md:ml-4 flex-grow">
                        <h2 className="text-2xl font-bold my-2">كبرني بودكاست</h2>
                        <p className="text-lg">في أي قاعدة صُلح أو اختلاف في الكلام، بيبقى في حد لازم (نكبره).. احنا هنا هنكبر بعض، ونكبركم، ونكبر حاجات ملهاش حد يكبرها..بس من وجهة نظر بولا وريم</p>
                        <div className="mt-4 flex justify-end gap-2">
                            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-red-600 text-white rounded-full flex items-center justify-center gap-2">
                                <FaYoutube /> YouTube
                            </a>
                            <a href="https://www.spotify.com" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-green-600 text-white rounded-full flex items-center justify-center gap-2">
                                <FaSpotify /> Spotify
                            </a>
                            <a href="https://www.apple.com/apple-music/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gray-800 text-white rounded-full flex items-center justify-center gap-2">
                                <FaApple /> Apple
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
};

export default ProductionsPage;
