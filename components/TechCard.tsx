import Image from "next/image";

export default function TechCard({ name }: { name: string }) {
  return (
    <div className="grid-rows-2 grid place-items-center m-0 p-0">
      <Image
        width={50}
        height={50}
        src={"/logos/" + name.toLowerCase() + ".png"}
        alt={name}
        className="rounded-3xl bg-white m-0 p-1"
      />
      <h4 className="text-white text-sm row-span-1 m-0 p-0">{name}</h4>
    </div>
  );
}
