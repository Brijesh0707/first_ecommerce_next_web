import HeroScreen from "@/components/HeroScreen";
import LatestSlider from "@/components/LatestSlider";
import NewLaptop from "@/components/NewLaptop";
import NewMobiles from "@/components/NewMobiles";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroScreen/>
      <LatestSlider/>
      <NewMobiles/>
      <NewLaptop/>
    </>
  );
}
