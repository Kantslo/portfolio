import Image from "next/image";

import myImg from "@/public/me.jpg"

export default function Intro() {
  return <section className="">
    <div className="flex items-center justify-center">
      <div>
        <Image src={myImg} alt="Giorgi portrait" width="192" height="192" quality={95} priority={true} className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl" />

        <span className="text-4xl">👋</span>
      </div>
    </div>
  </section>
}
