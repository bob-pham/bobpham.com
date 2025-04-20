import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "./button";
import Link from "next/link";

export default function JobCard({
  name,
  position,
  description,
  date,
  logo,
  link,
}: {
  name: string;
  position?: string;
  description?: string;
  date?: string;
  logo?: string;
  link?: string;
}) {
  return (
    <Card className="w-10/12 bg-zinc-900 text-white my-4 max-w-full">
      <CardHeader>
        <CardTitle>
          {name} - {position}
        </CardTitle>
        <CardDescription>{date}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2">
          <CardDescription className="col-span-1 grid place-items-center">
            {description}
          </CardDescription>
          <div className="grid place-items-center grid-cols-1 col-span-1 min-h-11/12">
            {logo !== undefined ? (
              <Image src={logo} alt={name} width={200} height={400} className="bg-white rounded-xl p-3 min-h-11/12"/>
            ) : (
              <></>
            )}
          </div>
        </div>
        {link ? <Button className="bg-white text-black"><Link href={link} target="_blank" className="text-slate-900 font-bold no-underline">Read More</Link></Button> : <></>}
      </CardContent>
    </Card>
  );
}
