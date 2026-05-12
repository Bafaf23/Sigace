"use client";
import AccessDenied from "@/components/molecules/AccessDenied";
import AccionesRapidas from "@/components/molecules/AccionesRapidas";
import HeaderDashbord from "@/components/molecules/HeaderDashbord";
import Resumenes from "@/components/molecules/Resumenes";
import { useAuth } from "@/context/AuthContext";
import Loading from "@/app/dashboard/loading";

export default function dashboardStudiantPage() {
  const { user, loading } = useAuth();

  if (loading) return <Loading />;

  if (!user || user?.role !== "student") {
    return <AccessDenied />;
  }

  return (
    <div className="animate-in fade-in duration-500">
      <HeaderDashbord user={user} />
      <Resumenes />
      <AccionesRapidas />
    </div>
  );
}
