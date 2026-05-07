"use client";
import { getSubjects } from "@/actions/getSuject";
import ListAcademicLoand from "@/components/molecules/ListAcademicLoand";
import ListSubjects from "@/components/molecules/ListSubjects";
import HeaderGestionMaterias from "@/components/organism/HeaderGestionMaterias";
import { useAuth } from "@/context/AuthContext";
import { useEffect, useState } from "react";

export default function MateriasPage() {
  const { user } = useAuth();
  const [dataSubjects, setDataSubjects] = useState([]);

  useEffect(() => {
    getSubjects().then((data) => setDataSubjects(data));
  }, []);

  return (
    <>
      <HeaderGestionMaterias schoolId={user?.user?.school_id} />
      <ListSubjects dataSubjects={dataSubjects} />
      <ListAcademicLoand
        academicLoads={[]}
        subjects={[]}
        teachers={[]}
        sections={[]}
      />
    </>
  );
}
