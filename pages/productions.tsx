import DefaultLayout from '@/layouts/default';
import React from 'react';
import ProductionCard from '@/components/productioncard';
import Link from 'next/link';
import { Card, CardBody, Image, Button,} from "@nextui-org/react";
import { FaArrowRight,  FaYoutube, FaSpotify, FaApple  } from 'react-icons/fa';
import {title, subtitle} from '@/components/primitives';
import {Head} from '@/layouts/head';

const ProductionsPage = () => {
    return (
        <DefaultLayout>

            <Head
                title="The Potcast Productions | Original Productions"
                description="Discover fresh perspectives, diverse voices, and thought-provoking topics; there's something for every curious mind."
                ogTitle="The Potcast Productions | Original Productions"
                ogDescription="Discover fresh perspectives, diverse voices, and thought-provoking topics; there's something for every curious mind."
            />

            <div className="flex flex-col items-center justify-center mb-10 lg:px-20">
                <h2 className={`${title({color:"green"})} text-3xl text-center font-semibold mb-2`}>Our top-charting podcasts explore fascinating genres and captivating narratives you won&apos;t find anywhere else.</h2>
                <p className={`${subtitle({className:"mt-2"})}`}>Discover fresh perspectives, diverse voices, and thought-provoking topics; there&apos;s something for every curious mind.</p>
            </div>

            <div className="flex flex-col items-center justify-center mt-[-10px]">

            <ProductionCard
                id="eshtry-menny"
                title="اشتري مني"
                description=" ٣ أصحاب بنتكلم من ٣ وجهات نظر مختلفة، قعدتنا مفيهاش استفادة لو مش بتعتبر الانبساط ده استفادة. من إنتاج ذا بوتكاست برودكشنز"
                imageSrc="./images/card1.jpeg"
                spotifyEmbed={"https://open.spotify.com/embed-podcast/show/2GcpoqDhqssSxDeugg4ejF?utm_source=generator&theme=0"}
                youtubeLink={"https://www.youtube.com/watch?v=VjWgQZ7p9t4&list=PL7TpI0K9I87K5qQte9awzBO2QkeMl-UAN"}
                spotifyLink="https://open.spotify.com/show/2GcpoqDhqssSxDeugg4ejF?si=y6UEsDGZSZWHrCc0fpmezQ&utm_medium=share&utm_source=linktree&nd=1&dlsi=afa9dae822884a7f"
                appleLink="https://podcasts.apple.com/eg/podcast/eshtry-menny-%D8%A7%D8%B4%D8%AA%D8%B1%D9%8A-%D9%85%D9%86%D9%8A/id1625454150"
                anghamiLink={"https://play.anghami.com/podcast/1028337860?adj_t=dgl0aa8_64v1dnl&adj_campaign=ios&adj_adgroup=podcast&adj_creative=51120208"}
            />
            <ProductionCard
                id='kefaya-ba2a'
                title="كفاية بقى"
                description="
                كفاية بقى مع علاء الشيخ. قعدة دردشة صحاب مع بعض بننتقد حاجات و ناس معينة في المجتمع، بصراحة و بدون رحمة او تهاون و بدون وضع فيلتر يزين الكلام (ليس لاصحاب القلوب الضعيفة)."
                imageSrc="./images/card2.jpeg"
                youtubeLink="https://www.youtube.com/watch?v=77XzsJZUojg&list=PL7TpI0K9I87JKd80KoWFhtVyf9T2jY2vW"
                spotifyEmbed={"https://open.spotify.com/embed-podcast/show/1XhboCKaeAmNU4hObnaTpd?utm_source=generator&theme=0"}
                spotifyLink="https://open.spotify.com/show/1XhboCKaeAmNU4hObnaTpd?si=0kLUupamQsWSPYH3PmRbJQ&utm_source=copy-link&dl_branch=1&nd=1&dlsi=5b37ceaa8fe244d4"
                appleLink="https://podcasts.apple.com/us/podcast/%D9%83%D9%81%D8%A7%D9%8A%D8%A9-%D8%A8%D9%82%D9%89-kefaya-ba2a/id1553857121"
                anghamiLink={"https://play.anghami.com/podcast/1018033070"}
            />
            <ProductionCard
                id="kabarni"
                title="كبرني "
                description="في أي قاعدة صُلح أو اختلاف في الكلام، بيبقى في حد لازم (نكبره).. احنا هنا هنكبر بعض، ونكبركم، ونكبر حاجات ملهاش حد يكبرها..بس من وجهة نظر بولا وريم"
                imageSrc="./images/card3.jpeg"
                spotifyEmbed={"https://open.spotify.com/embed/show/1QLz7wgVVVdZt90vanHFNJ?utm_source=generator&theme=0"}
                youtubeLink={"https://www.youtube.com/watch?v=0hr3z4Gz06I&list=PL7TpI0K9I87JnLcqY8x5d4lBP3eLlHCMX"}
                spotifyLink="https://open.spotify.com/show/1XhboCKaeAmNU4hObnaTpd?si=0kLUupamQsWSPYH3PmRbJQ&utm_source=copy-link&dl_branch=1&nd=1&dlsi=4ab227a26466438a"
                appleLink="https://podcasts.apple.com/us/podcast/kabarni-podcast-%D9%83%D8%A8%D8%B1%D9%86%D9%8A-%D8%A8%D9%88%D8%AF%D9%83%D8%A7%D8%B3%D8%AA/id1705559408?ign-itscg=30200&ign-itsct=lt_p"
                anghamiLink="https://play.anghami.com/podcast/1043057720?adj_t=dgl0aa8_64v1dnl&adj_campaign=ios&adj_adgroup=podcast&adj_creative=127495014"
            />
            <ProductionCard
                id='howa-fee-eh'
                title="!هو في إيه يا جماعة؟"
                description="بودكاست عن جرائم قتل، وأماكن مسكونة، وأحداث تاريخية غريبة. بودكاست عن جرائم قتل، وأماكن مسكونة، وأحداث تاريخية غريبة"
                imageSrc="./images/card5.png"
                spotifyEmbed={"https://open.spotify.com/embed/episode/0zroGmO7uzfzDFBZkkFcFc?utm_source=generator&theme=0"}
                youtubeLink="https://www.youtube.com/watch?v=uqfvFeDZccc&list=PL7TpI0K9I87JH7a-Ryk6gCStTiBrT3KhR"
                spotifyLink="https://open.spotify.com/show/1QLz7wgVVVdZt90vanHFNJ?si=XRsC0wHARq-GjwI3xPg2iQ&nd=1&dlsi=7ed718d582054f94"
                appleLink="https://podcasts.apple.com/us/podcast/kabarni-podcast-%D9%83%D8%A8%D8%B1%D9%86%D9%8A-%D8%A8%D9%88%D8%AF%D9%83%D8%A7%D8%B3%D8%AA/id1705559408?ign-itscg=30200&ign-itsct=lt_p"
                anghamiLink="https://play.anghami.com/podcast/1031506050?adj_t=dgl0aa8_64v1dnl&adj_campaign=ios&adj_adgroup=podcast&adj_creative=20016051"
            />

            {/*Coming Soon Card */}
            <Card
                isBlurred
                className="border-4 border-green-800 bg-white dark:bg-gray-900 shadow-xl rounded-lg overflow-hidden max-w-7xl mb-10 mt-[-5px] "
                shadow="lg"
            >
                <CardBody className="p-4">
                <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                    <div className="flex relative col-span-6 justify-center md:col-span-4">

                    <Image
                        alt={"Coming Soon"}
                        className="object-cover rounded-md"
                        shadow="md"
                        src={"./images/card6.jpg"}
                        width="100%"
                    />
                    </div>

                    <div className="flex flex-col col-span-6 md:col-span-8">
                    <div>
                        <div className="flex flex-col justify-center items-center">
                            <h3 className={`${title({color:"green"})} text-3xl font-semibold my-4 text-center`}>Coming Soon..</h3>
                        </div>
                    </div>

                    <div className="flex justify-center gap-2 mt-3  mb-2">
                        <a href={"/"} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-red-600 text-white rounded-full flex items-center justify-center gap-2">
                        <FaYoutube size="30" />
                        </a>
                        <a href={"/"} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gray-800 text-white rounded-full flex items-center justify-center gap-2">
                        <FaApple size="30"/>
                        </a>
                        <a href={"/"} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-green-600 text-white rounded-full flex items-center justify-center gap-2 md:text-small">
                        <FaSpotify size="30"/>
                        </a>
                        <a href={"/"} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-black text-white rounded-full flex items-center justify-center gap-2">
                        <Image src="/images/anghami.png" alt="Logo" style={{ width: '30px', height: '30px' }} />
                        </a>
                    </div>

                    </div>
                </div>
                </CardBody>
            </Card>


            </div>

            <div className="flex flex-col items-center justify-center mt-[-10px]">
                <h2 className="text-2xl font-bold text-center mb-2">Reach targeted listeners directly.</h2>
                <p className="mb-4 text-center">Talk to us about podcast sponsorships!</p>
                <Link href="/contactus" passHref> {/* Update the href to your contact page route */}
                    <Button 
                        size="lg" 
                        radius="full" 
                        className="bg-gradient-to-tr from-[#03a07d] to-[#006400] hover:from-[#029d70] hover:to-[#005700] text-white shadow-lg transition-all duration-300 font-semibold  ease-in-out mb-4"
                    >
                        Contact Us
                        <FaArrowRight className="ml-2" />
                    </Button>
                </Link>
            </div>
           
            
        </DefaultLayout>
    );
};

export default ProductionsPage;
