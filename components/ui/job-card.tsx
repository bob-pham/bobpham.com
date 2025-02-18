import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function JobCard({
  name,
  position,
  description,
  date,
  logo,
}: {
  name?: string;
  position?: string;
  description?: string;
  date?: string;
  logo?: string;
}) {
  return (
    <Card className="w-10/12 bg-zinc-900 text-white my-4">
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
      </CardContent>
    </Card>
  );
}
