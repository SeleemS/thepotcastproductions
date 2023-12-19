import React from "react";
import { Card, CardBody, Image, Button, Slider } from "@nextui-org/react";
import { FaYoutube, FaSpotify, FaApple } from 'react-icons/fa';
import { title as titler, subtitle } from "@/components/primitives";

export default function ProductionCard({ title, description, imageSrc, youtubeLink, youtubeEmbed, spotifyLink, appleLink, anghamiLink }) {
  const [liked, setLiked] = React.useState(false);

  return (
    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 w-full mb-5 md:max-w-[1200px]"
      shadow="sm"
    >
      <CardBody className="p-2">
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className="relative col-span-6 md:col-span-5">
            <Image
              alt={title}
              className="object-cover"
              height={200}
              shadow="md"
              src={imageSrc}
              width="100%"
            />
          </div>

          <div className="flex flex-col col-span-6 md:col-span-7">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0  mt-2 text-right">
                <h1 className={titler({color:"yellow"})}>{title}</h1>
                <p className={subtitle()}>{description}</p>

                <div className="hidden md:flex justify-center items-center mt-4">
                  <iframe 
                    width="560" 
                    height="315" 
                    src={youtubeEmbed}
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                  </iframe>
                </div>
              </div>
              
              <Button
                isIconOnly
                className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
                radius="full"
                variant="light"
                onPress={() => setLiked((v) => !v)}
              >
              </Button>
            </div>

            <div className="flex justify-center gap-2 md:mt-[-40px]">
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
              <img src="/images/anghami.png" alt="Logo" style={{ width: '30px', height: '30px' }} />
              </a>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
