import React from "react";
import { Card, CardBody, Image, Button,} from "@nextui-org/react";
import { FaYoutube, FaSpotify, FaApple } from 'react-icons/fa';
import {subtitle } from "@/components/primitives";
import { motion } from 'framer-motion';

interface ProductionCardProps {
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
    title, 
    description, 
    imageSrc, 
    youtubeLink, 
    spotifyEmbed, 
    spotifyLink, 
    appleLink, 
    anghamiLink 
  }: ProductionCardProps) {
  const [liked, setLiked] = React.useState(false);

  const wiggleVariants = {
    initial: { rotate: 0 },
    animate: {
      rotate: [0, -10, 10, -10, 10, 0], // A sequence of rotations
      transition: {
        duration: 0.6, // Total duration for the entire sequence
        ease: "easeInOut",
      },
    },
  };

  return (
    <Card
      isBlurred
      className="border-2 border-green-800 bg-white dark:bg-gray-900 shadow-xl rounded-lg overflow-hidden w-full mb-5 md:max-w-[1200px]"
      shadow="lg"
    >
      <CardBody className="p-4">
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className="relative col-span-6 md:col-span-4">
            <Image
              alt={title}
              className="object-cover rounded-md"
              height={200}
              shadow="md"
              src={imageSrc}
              width="100%"
            />
          </div>

          <div className="flex flex-col col-span-6 md:col-span-8">
            <div className="flex justify-between items-start">
              <div className="flex flex-col">

                {/* Embedded Spotify Player */}
                <div className="hidden md:flex justify-center items-center mt-4 md:mb-[-60px]">
                  <motion.iframe 
                    initial="initial"
                    animate="animate"
                    variants={wiggleVariants}
                    width="560" 
                    height="315" 
                    src={spotifyEmbed}
                    title="Spotify Podcast Player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                  </motion.iframe>
                </div>

                {/* Subtitle */}
                <p className={`${subtitle({className:"mt-2 ml-5"})}`}>{description}</p>
              </div>
              
              <Button
                isIconOnly
                className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
                radius="full"
                variant="light"
                onPress={() => setLiked((v) => !v)}
              />
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
  );
}
