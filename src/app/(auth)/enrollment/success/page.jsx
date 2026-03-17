import Success from "@/components/organism/Success";

export default function EnrollmentSuccessPage({ data }) {
  if (!data)
    return (
      <div className="p-10 text-center">Cargando datos del registro...</div>
    );
  return <Success data={data} />;
}
