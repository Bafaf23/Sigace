import CardSecction from "@/components/molecules/CardSecction";
import HeaderDashbord from "@/components/molecules/HeaderDashbord";

export const metadata = {
  title: "Control de Secciones",
};

export default function controlSecciones() {
  return (
    <>
      <HeaderDashbord titelPage={"Control de Secciones"} />
      <CardSecction
        grade={"4to"}
        teacher={"Carlos Biyagram"}
        identifier={"C"}
        current={"10"}
        max={"35"}
      />
    </>
  );
}
