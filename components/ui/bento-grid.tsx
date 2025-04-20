import { cn } from "@/lib/utils";
import { Button } from "./button";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[25rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  link,
  items,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  link?: string;
  items?: string[];
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input p-4 bg-zinc-900 border-white/[0.2] border justify-between flex flex-col space-y-4 h-full",
        className,
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-xs text-neutral-200">
          {description}
        </div>
        <div className="h-fit w-full min-h-fit grid place-items-center">
        {items ? (
          <div className="flex flex-wrap">
            {items.map((item, i) => (
              <span
                className="text-xs border border-white rounded-full py-1 px-3 m-1"
                key={i}
              >
                {item}
              </span>
            ))}
          </div>
        ) : (
          <></>
        )}
        {link ? (
          <div className="flex justify-start align-middle">
            <a href={link} target="_blank">
              <Button className="bg-white mt-2 text-slate-900 font-bold hover:text-white">Read More</Button>
            </a>
          </div>
        ) : (
          <></>
        )}
        </div>
      </div>
    </div>
  );
};
