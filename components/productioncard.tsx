import React from "react";
import { Card, CardBody, Image, Button, Slider } from "@nextui-org/react";
import { FaYoutube, FaSpotify, FaApple } from 'react-icons/fa';

export default function ProductionCard({ title, description, imageSrc, youtubeLink, spotifyLink, appleLink }) {
  const [liked, setLiked] = React.useState(false);

  return (
    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 w-full mb-5 md:max-w-[1200px]"
      shadow="sm"
    >
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className="relative col-span-6 md:col-span-6">
            <Image
              alt={title}
              className="object-cover"
              height={200}
              shadow="md"
              src={imageSrc}
              width="100%"
            />
          </div>

          <div className="flex flex-col col-span-6 md:col-span-6">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0 text-right">
                <h1 className="font-semibold text-foreground/90 text-3xl mb-2 md:text-5xl">{title}</h1>
                <p className="text-small md:text-xl text-foreground/80">{description}</p>
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

            <div className="mt-4 flex justify-center gap-2">
              <a href={youtubeLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-red-600 text-white rounded-full flex items-center justify-center gap-2">
                <FaYoutube size="30" />
              </a>
              <a href={spotifyLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-green-600 text-white rounded-full flex items-center justify-center gap-2 md:text-small">
                <FaSpotify size="30"/>
              </a>
              <a href={appleLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gray-800 text-white rounded-full flex items-center justify-center gap-2">
                <FaApple size="30"/>
              </a>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
