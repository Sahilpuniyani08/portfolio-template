import { textStyles } from "@/typography/text-styles";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-full items-center justify-center noise pt-12">
      <h1 className={textStyles.h2}>
        Here is the basic boiler template to start makin your website.
      </h1>
    </div>
  );
}
