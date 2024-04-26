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
                <h2 className={`${title({color:"green"})} text-3xl text-center font-semibold mb-2`}>Top-charting podcasts with captivating narratives you won&apos;t find anywhere else.</h2>
                {/*<h2 className={`${title({color:"green"})} text-3xl text-center font-semibold mb-2`}>Top-charting podcasts that explore fascinating genres and captivating narratives you won&apos;t find anywhere else.</h2>*/}
                {/*<p className={`${subtitle({className:"mt-2"})}`}>Discover fresh perspectives, diverse voices, and thought-provoking topics; we have something for every curious mind.</p>*/}
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
                youtubeLink="https://www.youtube.com/watch?v=_f859rlxUW8&list=PL7TpI0K9I87JKd80KoWFhtVyf9T2jY2vW&index=2"
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
                spotifyLink="https://open.spotify.com/show/1QLz7wgVVVdZt90vanHFNJ?si=XRsC0wHARq-GjwI3xPg2iQ&nd=1&dlsi=b7581753e99e4b70"
                appleLink="https://podcasts.apple.com/us/podcast/kabarni-podcast-%D9%83%D8%A8%D8%B1%D9%86%D9%8A-%D8%A8%D9%88%D8%AF%D9%83%D8%A7%D8%B3%D8%AA/id1705559408?ign-itscg=30200&ign-itsct=lt_p"
                anghamiLink="https://play.anghami.com/podcast/1043057720?adj_t=dgl0aa8_64v1dnl&adj_campaign=ios&adj_adgroup=podcast&adj_creative=127495014"
            />
            <ProductionCard
                id="thew"
                title="The W by Dina Ghabbour"
                description=" هو مساحة داعمة لكل ست، وهو كمان بودكاست عن مواضيع مختلفة في حياتك، مواضيع بتهمك وبتهم المجتمع كله زي مجال العمل، الصحة النفسية، الأمومة، العلاقات ومواضيع اجتماعية تانية مش بنتكلم عنها كتي The W"
                imageSrc="./images/thew.jpg"
                spotifyEmbed={"https://open.spotify.com/embed/show/1a5ewecMGnYX1rl2xYF7fv?utm_source=generator&theme=0"}
                youtubeLink={"https://www.youtube.com/watch?v=zdpSiEjXdcY&list=PL7TpI0K9I87LFolJ-3zeQekItr1rWDFWC"}
                spotifyLink="https://open.spotify.com/show/1a5ewecMGnYX1rl2xYF7fv"
                appleLink="https://podcasts.apple.com/us/podcast/the-w-by-dina-ghabbour/id1742463096"
                anghamiLink="https://play.anghami.com/podcast/1051678975"
            />
            <ProductionCard
                id='howa-fee-eh'
                title="!هو في إيه يا جماعة؟"
                description="بودكاست عن جرائم قتل، وأماكن مسكونة، وأحداث تاريخية غريبة. بودكاست عن جرائم قتل، وأماكن مسكونة، وأحداث تاريخية غريبة"
                imageSrc="./images/card5.png"
                spotifyEmbed={"https://open.spotify.com/embed/episode/0zroGmO7uzfzDFBZkkFcFc?utm_source=generator&theme=0"}
                youtubeLink="https://www.youtube.com/watch?v=uqfvFeDZccc&list=PL7TpI0K9I87JH7a-Ryk6gCStTiBrT3KhR"
                spotifyLink="https://open.spotify.com/show/4BV0CDamD2RoXSIURDA3zV"
                appleLink="https://podcasts.apple.com/eg/podcast/howa-fi-eh-ya-gama3a-%D9%87%D9%88-%D9%81%D9%8A-%D8%A5%D9%8A%D9%87-%D9%8A%D8%A7-%D8%AC%D9%85%D8%A7%D8%B9%D8%A9/id1642322795"
                anghamiLink="https://play.anghami.com/podcast/1031506050?adj_t=dgl0aa8_64v1dnl&adj_campaign=ios&adj_adgroup=podcast&adj_creative=20016051"
            />
            <ProductionCard
                id='mgt'
                title="!هو في إيه يا جماعة؟"
                description="
                بودكاست من غير تفكير هو فرصة عشان نتكلم في كل حاجة بس بطريقة بسيطة، يمكن نفرفش في الأيام اللي احنا فيها دي. ونتعشم إن ليفل الضحك يكون عالي، وتحبوا الشلوحة، ومحمود يحبكم، وننسى العالم باللي فيه مع أحمد خيري"
                imageSrc="./images/khairy.jpg"
                spotifyEmbed={"https://open.spotify.com/embed/episode/4ksiZGyRJRRb6DJ6YpHKbj?utm_source=generator&theme=0"}
                youtubeLink="https://www.youtube.com/watch?v=uqfvFeDZccc&list=PL7TpI0K9I87JH7a-Ryk6gCStTiBrT3KhR"
                spotifyLink="https://open.spotify.com/show/6K0YFNiPbUQhgiRL0nUGKI?si=Zz-J3evoQiOgPLdonJn4mQ&nd=1&dlsi=b861e3e0bc1543b5"
                appleLink="https://podcasts.apple.com/us/podcast/min-gheer-tafkeer-%D9%85%D9%86-%D8%BA%D9%8A%D8%B1-%D8%AA%D9%81%D9%83%D9%8A%D8%B1/id1734111430?ign-itscg=30200&ign-itsct=lt_p"
                anghamiLink="https://play.anghami.com/podcast/1039614080"
            />
            <ProductionCard
                id='entahet-holool'
                title="!هو في إيه يا جماعة؟"
                description="حنتكلم عن المشاكل بس من غير مانحلها. حنتكلم فيها بس علشان مافيش حلول و صدقونا احنا دورنا كتير على حلول ومالقناش. وعلشان أكيد انتو كمان مالقتوش حلول فاحنا جايين هنا نصيح مع بعض في كل حاجة مش عاجبانا"
                imageSrc="./images/card6.jpg"
                spotifyEmbed={"https://open.spotify.com/embed/show/0AMUgnXP7V3tYxZIlH12UH?utm_source=generator&theme=0"}
                youtubeLink="https://www.youtube.com/@thepotcastproductions"
                spotifyLink="https://open.spotify.com/show/0AMUgnXP7V3tYxZIlH12UH?si=5fece504caa94a36&nd=1&dlsi=7ac9e5025f404011"
                appleLink="https://podcasts.apple.com/eg/podcast/%D8%A5%D8%B9%D9%84%D8%A7%D9%86-%D8%A8%D9%88%D8%AF%D9%83%D8%A7%D8%B3%D8%AA-%D8%A7%D9%86%D8%AA%D9%87%D8%AA-%D8%AD%D9%84%D9%88%D9%84-%D8%A7%D9%84%D8%A3%D8%B1%D8%B6/id1723153394?i=1000639803258"
                anghamiLink="https://play.anghami.com/podcast/1047025945"
            />
            <ProductionCard
                id='poetry-behind-borders'
                title="!هو في إيه يا جماعة؟"
                description="Poetry goes beyond all borders, a language unto itself. Listen to literary experts, Dr. Magda Hasabelnaby and  Dr. Rafey Habib, recite and discuss poetry from diverse cultures and eras, enabling you to grasp the power of spoken poetry."
                imageSrc="./images/card12.png"
                spotifyEmbed={"https://open.spotify.com/embed/show/4BeqLfyxqIZUmqlIpKZoMD?utm_source=generator&theme=0"}
                youtubeLink="https://youtu.be/JyNhvIfkBmE?si=Wc1CGbpA8Gvdg4ZT"
                spotifyLink="https://open.spotify.com/show/4BeqLfyxqIZUmqlIpKZoMD"
                appleLink="https://podcasts.apple.com/eg/podcast/poetry-beyond-borders-%D8%B4%D8%B9%D8%B1-%D8%A8%D9%84%D8%A7-%D8%AD%D8%AF%D9%88%D8%AF/id1725300616"
                anghamiLink="https://open.anghami.com/JWsbC3nFiGb"
            />
            <ProductionCard
                id='nos-nos'
                title="nos-nos"
                description=" ...بودكاست نصه جد نصه هزار، نصه أحمد حسن نصه محمد جمال. هل البودكاست حلو؟ نص نص"                
                imageSrc="./images/nos.png"
                spotifyEmbed={"https://open.spotify.com/embed/episode/1LzI9o8rtnnUn9lz5anVRd?utm_source=generator&theme=0"}
                youtubeLink="https://www.youtube.com/watch?v=T9FqiX9K6MQ&list=PL7TpI0K9I87KuHYOwKCV0cTcalMDUs8Zb"
                spotifyLink="https://open.spotify.com/show/6WWUzhMkrC8DcPOfLojRdm"
                appleLink="https://podcasts.apple.com/us/podcast/nos-nos-%D9%86%D8%B5-%D9%86%D8%B5/id1633045471"
                anghamiLink="https://play.anghami.com/podcast/1030016057?adj_adgroup=podcast&adj_t=dgl0aa8_64v1dnl&adj_campaign=android&adj_creative=59082139"
            />
            <ProductionCard
                id='teh-marboota'
                title="teh-marboota"
                description="بودكاست اجتماعي نسائي كوميدي"
                imageSrc="./images/marboota.jpg"
                spotifyEmbed={"https://open.spotify.com/embed/show/4otWZeRNqSSKIdyrMYSEzC?utm_source=generator&theme=0"}
                youtubeLink="https://www.youtube.com/watch?v=GdQg02jmOl8&list=PL7TpI0K9I87Ip1qaWo6G_8dIcOe3k2jwz"
                spotifyLink="https://open.spotify.com/show/4otWZeRNqSSKIdyrMYSEzC"
                appleLink="https://podcasts.apple.com/eg/podcast/%D8%A9-%D9%85%D8%B1%D8%A8%D9%88%D8%B7%D8%A9/id1646081113"
                anghamiLink="https://play.anghami.com/podcast/1032154429"
            />
            <ProductionCard
                id='potcast-show'
                title="potcast-show"
                description="Real and unfiltered conversations about life, love and spirituality."
                imageSrc="./images/potcastshow.png"
                spotifyEmbed={"https://open.spotify.com/embed/show/7h8m8wf0u6MlNM9ors75z3?utm_source=generator&theme=0"}
                youtubeLink="https://www.youtube.com/watch?v=mnw5_jN_N8E&list=PL7TpI0K9I87Ls7_VRlqNJPrrG1RxavR8x"
                spotifyLink="https://open.spotify.com/show/7h8m8wf0u6MlNM9ors75z3?si=af4e3cc351274f62"
                appleLink="https://podcasts.apple.com/eg/podcast/the-potcast-show/id1521488794"
                anghamiLink="https://play.anghami.com/podcast/1013624358"
            />
            </div>

            <div className="flex flex-col items-center justify-center mt-[-10px]">
                <h2 className="text-2xl font-bold text-center mb-2">Reach targeted listeners directly.</h2>
                <p className="mb-4 text-center">Talk to us about podcast sponsorships!</p>
                <Link href="/contactus" passHref>
                    <Button 
                        size="lg" 
                        radius="full" 
                        className="bg-gradient-to-tr from-[#03a07d] to-[#006400] hover:from-[#029d70] hover:to-[#005700] text-white shadow-lg text-xl transition-all duration-300 font-semibold  ease-in-out mb-4"
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
