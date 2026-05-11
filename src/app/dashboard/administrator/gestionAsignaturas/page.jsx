"use client";
import { getSubjects } from "@/services/getSuject";
import ListSubjects from "@/components/molecules/ListSubjects";
import HeaderGestionMaterias from "@/components/organism/HeaderGestionMaterias";
import { useAuth } from "@/context/AuthContext";
import { useCallback, useEffect, useState } from "react";

export default function MateriasPage() {
  const { user } = useAuth();
  const [dataSubjects, setDataSubjects] = useState([]);
  const [loading, setLoading] = useState(false);

  const school_id = user?.user?.school_id;

  /** @param {boolean} [silent] Si es true, actualiza la lista sin pantalla de carga completa. */
  const loadSubjects = useCallback((silent = false) => {
    if (!school_id) return;
    if (!silent) setLoading(true);
    getSubjects(school_id)
      .then((data) => setDataSubjects(data))
      .finally(() => {
        if (!silent) setLoading(false);
      });
  }, [school_id]);

  useEffect(() => {
    loadSubjects();
  }, [loadSubjects]);

  if (loading) return <p>Cargando materias</p>;
  return (
    <>
      <HeaderGestionMaterias
        schoolId={user?.user?.school_id}
        onSubjectCreated={() => loadSubjects(true)}
      />
      <ListSubjects
        dataSubjects={dataSubjects}
        onSubjectDeleted={() => loadSubjects(true)}
      />
    </>
  );
}
