"use client";
import AccionesRapidas from "@/components/molecules/AccionesRapidas";
import HeaderDashbord from "@/components/molecules/HeaderDashbord";
import Reportes from "@/components/molecules/Reportes";
import Resumenes from "@/components/molecules/Resumenes";
import { useAuth } from "@/context/AuthContext";
import Loading from "@/app/dashboard/loading";
import AccessDenied from "@/components/molecules/AccessDenied";
import { useRouter } from "next/navigation";

export default function TeachersPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  
  if (loading) return <Loading />;

  if (!user || user?.role !== "teacher") {
    router.push("/");
    return <AccessDenied />;
  }

  return (
    <div className="animate-in fade-in duration-500">
      <HeaderDashbord user={user} />
      <Resumenes teachersId={user?.id} />
      {/* movil */}
      <AccionesRapidas />
      <Reportes />
    </div>
  );
}
