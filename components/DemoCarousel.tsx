import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function DemoCarousel({ images }: { images: string[] }) {
  return (
    <div className="grid place-items-center w-full bg-transparent">
      <h3 className="text-white font-bold text-center text-xl">Images</h3>
    <Carousel className="w-1/2">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center">
                  <Image src={image} alt={"demo" + index} width={600} height={600} />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
  );
}
