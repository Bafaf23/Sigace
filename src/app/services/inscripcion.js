import { jsPDF } from "jspdf";

export const inscripcion = () => {
  const datos = {
    estudiante: {
      cedula: "V-30021867",
      sexo: "Masculino", // Femenino o Masculino
      nombreCompleto: "Bryant Facenda",
      nacionalidad: "Venezolana",
      fechaNacimiento: "23/09/2023",
      edad: "23",
      correo: "bryantffacen@gmail.com",
      domicilio: {
        municipio: "El Hatillo",
        parroquia: "El Hatillo",
        calle: "El arroyo",
        viviendaCondicion: "Familiar", // Propia, Alquilada, etc.
      },
      datosMedicos: {
        enfermedad: "N/A",
        alergia: false,
        tipoSangre: "A+",
        estatura: "1.80cm",
        peso: "80kg",
      },
    },
    madre: {
      nombre: "Darling Flores",
      cedula: "V-18587434",
      telefono: "04241746193",
    },
    padre: {
      nombre: "Jorge Facenda",
      cedula: "V-17222510",
      telefono: "213213213",
    },
    representante: { nombre: "", cedula: "", parentesco: "" },
    academico: {
      anioSeccion: "C",
      repite: false,
      materiaPendiente: "0",
    },
  };
  const doc = new jsPDF("p", "mm", "a4");
  let y = 15;
  const margin = 15;
  const lineWidth = 180;

  // --- ENCABEZADO ---
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text("PLANILLA DE INSCRIPCIÓN Y ACTUALIZACIÓN DE DATOS", 105, y, {
    align: "center",
  });

  // --- DATOS DEL ESTUDIANTE ---
  y += 10;
  doc.setFontSize(10);
  doc.setFillColor(230, 230, 230); // Fondo gris claro para subtítulos
  doc.rect(margin, y, lineWidth, 6, "F");
  doc.text("1. DATOS DEL ESTUDIANTE", margin + 2, y + 4.5);

  y += 10;
  doc.setFont("helvetica", "normal");
  doc.text(
    `C.I. Nro: ${datos.estudiante.cedula || "________________"}`,
    margin,
    y,
  );
  doc.text(`SEXO: F [ ] M [ ]`, 100, y);
  doc.text(`Edad al 30/09: ____`, 150, y);

  y += 7;
  doc.text(
    `Nombres y Apellidos: ${datos.estudiante.nombre || "______________________________________________________"}`,
    margin,
    y,
  );

  y += 7;
  doc.text(`Nacionalidad: ___________`, margin, y);
  doc.text(`País Nac: ___________`, 70, y);
  doc.text(`Edo. Nac: ___________`, 130, y);

  y += 7;
  doc.text(`Fecha Nac: __/__/____`, margin, y);
  doc.text(
    `Correo: ${datos.estudiante.correo || "_______________________________________"}`,
    70,
    y,
  );

  // --- DATOS DE DOMICILIO ---
  y += 10;
  doc.setFont("helvetica", "bold");
  doc.rect(margin, y, lineWidth, 6, "F");
  doc.text("2. DATOS DE DOMICILIO", margin + 2, y + 4.5);

  y += 10;
  doc.setFont("helvetica", "normal");
  doc.text(`Municipio: _______________`, margin, y);
  doc.text(`Parroquia: _______________`, 80, y);
  doc.text(`Calle/Vía: _______________`, 140, y);

  y += 7;
  doc.text(
    `Dirección: __________________________________________________________________`,
    margin,
    y,
  );

  y += 7;
  doc.text(
    `Condición Vivienda: Propia [ ] Alquilada [ ] Familiar [ ]  Teléf: _______________`,
    margin,
    y,
  );

  // --- DATOS MÉDICOS ---
  y += 10;
  doc.setFont("helvetica", "bold");
  doc.rect(margin, y, lineWidth, 6, "F");
  doc.text("3. DATOS MÉDICOS Y ANTROPOMÉTRICOS", margin + 2, y + 4.5);

  y += 10;
  doc.setFont("helvetica", "normal");
  doc.text(`¿Enfermedad?: ____________________`, margin, y);
  doc.text(`Alergia: SI [ ] NO [ ] Explique: _______________`, 90, y);

  y += 7;
  doc.text(`Tipo Sangre: _______`, margin, y);
  doc.text(`Estatura: _______`, 60, y);
  doc.text(`Peso: _______`, 100, y);
  doc.text(`Talla: Camisa: ___ Pant: ___ Zap: ___`, 140, y);

  // --- PADRES Y REPRESENTANTE ---
  const personas = [
    { label: "4. DATOS DE LA MADRE", data: datos.madre },
    { label: "5. DATOS DEL PADRE", data: datos.padre },
    { label: "6. DATOS DEL REPRESENTANTE", data: datos.representante },
  ];

  personas.forEach((p) => {
    y += 10;
    doc.setFont("helvetica", "bold");
    doc.rect(margin, y, lineWidth, 6, "F");
    doc.text(p.label, margin + 2, y + 4.5);

    y += 10;
    doc.setFont("helvetica", "normal");
    doc.text(`C.I: ______________`, margin, y);
    doc.text(`F. Nac: __/__/____`, 70, y);
    doc.text(`Edo. Civil: __________`, 130, y);
    y += 7;
    doc.text(
      `Nombres: __________________________________________________________________`,
      margin,
      y,
    );
    y += 7;
    doc.text(`Profesión: ____________________`, margin, y);
    doc.text(`Teléfono: ____________________`, 100, y);
  });

  // --- COORDINACIÓN ---
  y += 12;
  doc.setLineWidth(0.5);
  doc.rect(margin, y, lineWidth, 15);
  doc.setFont("helvetica", "bold");
  doc.text("SOLO PARA USO DE COORDINACIÓN", 105, y + 5, { align: "center" });
  doc.setFont("helvetica", "normal");
  doc.text(
    "Año/Sección: _________  Repite: SI [ ] NO [ ]  Materia Pendiente: ____________",
    105,
    y + 11,
    { align: "center" },
  );

  // --- FIRMAS ---
  y += 30;
  doc.text("________________________", 30, y);
  doc.text("Firma Representante", 32, y + 5);

  doc.text("________________________", 130, y);
  doc.text("Firma Autorizada / Sello", 132, y + 5);

  y += 15;
  doc.setFontSize(8);
  doc.text(
    `Generado por SIGACE - Fecha de Impresión: ${new Date().toLocaleDateString()}`,
    105,
    y,
    { align: "center" },
  );

  doc.save("Planilla_Inscripcion_SIGACE.pdf");
};
