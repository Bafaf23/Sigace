import PDFpage from "../services/PDFpage";
import AboutSigace from "@/components/organism/AboutSigace";
import Fotter from "@/components/organism/Fotter";
import Header from "@/components/organism/Header";
import HeroSigace from "@/components/organism/HeroSigace";
import PlanesSigace from "@/components/organism/PlanesSigace";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <HeroSigace></HeroSigace>
      <AboutSigace></AboutSigace>
      <PlanesSigace></PlanesSigace>
      <Fotter></Fotter>
      <PDFpage />
    </div>
  );
}
