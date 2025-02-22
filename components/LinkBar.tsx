import Image from "next/image";
import { Button } from "./ui/button";

export default function LinkBar() {
  return (
    <div className="grid place-items-center">
      <div className="flex space-x-10 place-items-center px-4 size-fit">
        <a
          href="mailto:bobbaopham@gmail.com"
          className="bg-white grid place-items-center rounded-full"
        >
          <Button className="bg-transparent">
            <Image
              src="/logos/email.png"
              alt="email"
              width={30}
              height={30}
              className="place-self-center"
            />
          </Button>
        </a>
        <a
          href="https://www.linkedin.com/in/bobpham/"
          target="_"
          className="bg-white grid place-items-center rounded-full"
        >
          <Button className="bg-transparent">
            <Image
              src="/logos/linkedin.png"
              alt="linkedin"
              width={30}
              height={30}
              className="place-self-center"
            />
          </Button>
        </a>
        <a
          href="https://github.com/bob-pham"
          target="_"
          className="bg-white grid place-items-center rounded-full"
        >
          <Button className="bg-transparent">
            <Image
              src="/logos/github_logo.png"
              alt="github"
              width={30}
              height={30}
              className="place-self-center"
            />
          </Button>
        </a>
        <a
          href="/"
          target="_"
          className="bg-white grid place-items-center rounded-full"
        >
          <Button className="bg-transparent">
            <Image
              src="/logos/website.png"
              alt="website"
              width={30}
              height={30}
              className="place-self-center"
            />
          </Button>
        </a>

      </div>
    </div>
  );
}
