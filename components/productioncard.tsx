import React from "react";
import { Card, CardBody, Image, Button} from "@nextui-org/react";
import { FaYoutube, FaSpotify, FaApple} from 'react-icons/fa';
import {subtitle} from "@/components/primitives";


interface ProductionCardProps {
    id: string;
    title: string;
    description: string;
    imageSrc: string;
    youtubeLink: string;
    spotifyEmbed: string;
    spotifyLink: string;
    appleLink: string;
    anghamiLink: string;
  }

  export default function ProductionCard({ 
    id,
    title, 
    description, 
    imageSrc, 
    youtubeLink, 
    spotifyEmbed, 
    spotifyLink, 
    appleLink, 
    anghamiLink 
  }: ProductionCardProps) {

  return (
    <div id={id}>
      <Card
        isBlurred
        className="border-4 border-green-800 bg-white dark:bg-gray-900 shadow-xl rounded-lg overflow-hidden max-w-7xl mb-10 mt-[-5px] "
        shadow="lg"
      >
        <CardBody className="p-4">
          <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
            <div className="flex relative col-span-6 justify-center md:col-span-4">

              <Image
                alt={title}
                className="object-cover rounded-md"
                shadow="md"
                src={imageSrc}
                width="100%"
              />
            </div>

            <div className="flex flex-col col-span-6 md:col-span-8">
              <div className="flex justify-between items-start">
                <div className="flex flex-col w-full">

                  {/* Embedded Spotify Player */}
                  <div className="flex justify-center items-center mb-[-60px] md:mb-[-30px] md:px-6 ">
                    <iframe 
                      className="w-[120%] sm:w-[80%] md:w-full h-[220px] md:h-[270px]" 
                      src={spotifyEmbed}
                      title="Spotify Podcast Player" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen>
                    </iframe>
                  </div>

                  {/* Subtitle */}
                  <p className={`${subtitle({className:"mt-2 md:px-5"})}`}>{description}</p>
                </div>
              </div>

              <div className="flex justify-center gap-2 mt-3  mb-2">
                <a href={youtubeLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-red-600 text-white rounded-full flex items-center justify-center gap-2">
                  <FaYoutube size="30" />
                </a>
                <a href={appleLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gray-800 text-white rounded-full flex items-center justify-center gap-2">
                  <FaApple size="30"/>
                </a>
                <a href={spotifyLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-green-600 text-white rounded-full flex items-center justify-center gap-2 md:text-small">
                  <FaSpotify size="30"/>
                </a>
                <a href={anghamiLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-black text-white rounded-full flex items-center justify-center gap-2">
                <Image src="/images/anghami.png" alt="Logo" style={{ width: '30px', height: '30px' }} />
                </a>
              </div>

            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
