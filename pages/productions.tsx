import DefaultLayout from '@/layouts/default';
import { Card, Image } from '@nextui-org/react';
import React from 'react';
import { FaYoutube, FaSpotify, FaApple } from 'react-icons/fa';
import ProductionCard from '@/components/productioncard';

const ProductionsPage = () => {
    return (
        <DefaultLayout>
            <ProductionCard
                title="اشتري مني"
                description="إحنا ٣ أصحاب بنتكلم من ٣ وجهات نظر مختلفة، قعدتنا مفيهاش استفادة لو مش بتعتبر الانبساط ده استفادة. من إنتاج ذا بوتكاست برودكشنز."
                imageSrc="./images/card1.jpeg"
                youtubeLink="https://www.youtube.com/playlist?list=PL7TpI0K9I87K5qQte9awzBO2QkeMl-UAN"
                spotifyLink="https://open.spotify.com/show/2GcpoqDhqssSxDeugg4ejF?si=y6UEsDGZSZWHrCc0fpmezQ&utm_medium=share&utm_source=linktree&nd=1&dlsi=afa9dae822884a7f"
                appleLink="https://podcasts.apple.com/eg/podcast/eshtry-menny-%D8%A7%D8%B4%D8%AA%D8%B1%D9%8A-%D9%85%D9%86%D9%8A/id1625454150"
                anghamiLink={"https://play.anghami.com/podcast/1028337860?adj_t=dgl0aa8_64v1dnl&adj_campaign=ios&adj_adgroup=podcast&adj_creative=51120208"}
            />
            <ProductionCard
                title="كفاية بقى"
                description="كفاية بقى هي قعدة دردشة صحاب مع بعض بننتقد حاجات و ناس معينة في المجتمع"
                imageSrc="./images/kefaya.png"
                youtubeLink=""
                spotifyLink="https://open.spotify.com/show/2GcpoqDhqssSxDeugg4ejF?si=y6UEsDGZSZWHrCc0fpmezQ&utm_medium=share&utm_source=linktree&nd=1&dlsi=afa9dae822884a7f"
                appleLink="https://podcasts.apple.com/us/podcast/%D9%83%D9%81%D8%A7%D9%8A%D8%A9-%D8%A8%D9%82%D9%89-kefaya-ba2a/id1553857121"
                anghamiLink={"https://play.anghami.com/podcast/1018033070"}
            />
            <ProductionCard
                title="كبرني بودكاست"
                description="في أي قاعدة صُلح أو اختلاف في الكلام، بيبقى في حد لازم (نكبره).. احنا هنا هنكبر بعض، ونكبركم، ونكبر حاجات ملهاش حد يكبرها..بس من وجهة نظر بولا وريم"
                imageSrc="./images/card2.jpeg"
                youtubeLink="https://www.youtube.com/watch?v=0hr3z4Gz06I&list=PL7TpI0K9I87JnLcqY8x5d4lBP3eLlHCMX"
                spotifyLink="https://open.spotify.com/show/1XhboCKaeAmNU4hObnaTpd?si=0kLUupamQsWSPYH3PmRbJQ&utm_source=copy-link&dl_branch=1&nd=1&dlsi=4ab227a26466438a"
                appleLink="https://podcasts.apple.com/us/podcast/kabarni-podcast-%D9%83%D8%A8%D8%B1%D9%86%D9%8A-%D8%A8%D9%88%D8%AF%D9%83%D8%A7%D8%B3%D8%AA/id1705559408?ign-itscg=30200&ign-itsct=lt_p"
                anghamiLink="https://play.anghami.com/podcast/1043057720?adj_t=dgl0aa8_64v1dnl&adj_campaign=ios&adj_adgroup=podcast&adj_creative=127495014"
            />
            <ProductionCard
                title="!!هو في إيه يا جماعة؟"
                description="بودكاست عن جرائم قتل، وأماكن مسكونة، وأحداث تاريخية غريبة"
                imageSrc="./images/card3.jpeg"
                youtubeLink="https://youtube-link"
                spotifyLink="https://open.spotify.com/show/1QLz7wgVVVdZt90vanHFNJ?si=XRsC0wHARq-GjwI3xPg2iQ&nd=1&dlsi=7ed718d582054f94"
                appleLink="https://podcasts.apple.com/us/podcast/kabarni-podcast-%D9%83%D8%A8%D8%B1%D9%86%D9%8A-%D8%A8%D9%88%D8%AF%D9%83%D8%A7%D8%B3%D8%AA/id1705559408?ign-itscg=30200&ign-itsct=lt_p"
            />
            
        </DefaultLayout>
    );
};

export default ProductionsPage;
