import Image from "next/image";
import React from "react";
import nextImg from "@/assets/nextjs.webp";
import Header from "@/Components/Header/Header";
import Count from "@/Components/Count/Count";

const page = () => {
  // const handleOnClick = () => {
  //   console.log("hellow");
  // }
  return (
    <div>
      <Header />
      <Count />
      <Image
        src={
          "https://cdn.sanity.io/images/3do82whm/next/4b1f008289a88f4438a1c983fb32cf1a636d9d0e-1000x667.png?w=720&h=480&fit=clip&auto=format"
        }
        alt="next image"
        width={100}
        height={100}
      />
      <Image src={nextImg} alt="next image" width={100} height={100} />
      <button >click</button>
    </div>
  );
};

export default page;
