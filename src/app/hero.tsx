"use client";

import { IconButton, Button, Typography } from "@material-tailwind/react";
import { PlayIcon } from "@heroicons/react/24/solid";

function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-[url('/image/event.jpg')] bg-cover bg-no-repeat">
    <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
    <div className="grid min-h-screen px-8">
      <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
        {/**<Typography variant="h3" color="white" className="mb-2">
          29-31 August @ New York
  </Typography>**/}
        <Typography variant="h1" color="white" className="lg:max-w-3xl">
        SWEDISH, SHIATSU, THAI & OTHER DIFFERENT MASSAGES
        </Typography>
        <Typography
          variant="lead"
          color="white"
          className="mt-1 mb-12 w-full md:max-w-full lg:max-w-2xl"
        >
          We are a full service massage & spa along with offering a great variety of fitness classes that are designed for all levels.
        </Typography>
        {/**<div className="flex items-center gap-4">
          <Button variant="gradient" color="white">
            Get started
          </Button>
          <IconButton className="rounded-full bg-white p-6">
            <PlayIcon className="h-4 w-4 text-gray-900" />
          </IconButton>
  </div>**/}
      </div>
    </div>
  </div>
  );
}

export default Hero;
