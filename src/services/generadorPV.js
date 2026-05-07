import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

// Importa la función directamente
export const generadorPV = (user, evaluaciones) => {
  const doc = new jsPDF();
  const fecha = new Date().toLocaleDateString();

  // 1. Encabezado Oficial MPPE
  doc.setFontSize(10);
  doc.text("REPÚBLICA BOLIVARIANA DE VENEZUELA", 105, 10, { align: "center" });
  doc.text("MINISTERIO DEL PODER POPULAR PARA LA EDUCACIÓN", 105, 15, {
    align: "center",
  });
  doc.text("PLANIFICACIÓN Y EVALUACIÓN DE LOS APRENDIZAJES", 105, 20, {
    align: "center",
  });

  // 2. Datos del Docente y Materia
  doc.setFontSize(11);
  doc.text(`Docente: ${user.name} ${user.lastName}`, 15, 35);
  doc.text(`Materia: ${user.materiaActual || "No especificada"}`, 15, 42);
  doc.text(`Fecha de Emisión: ${fecha}`, 150, 35);
  doc.line(15, 45, 195, 45); // Línea divisoria

  // 3. Generación de Tabla
  const columns = [
    { header: "Sem.", dataKey: "semana" },
    { header: "Contenido / Referente", dataKey: "contenido" },
    { header: "Actividad / Técnica", dataKey: "actividad" },
    { header: "Instrumento", dataKey: "instrumento" },
    { header: "Tipo", dataKey: "tipoForma" },
    { header: "%", dataKey: "porcentaje" },
  ];

  // Preparar datos (combinando actividad y técnica para ahorrar espacio)
  const rows = evaluaciones.map((eva) => ({
    ...eva,
    actividad: `${eva.actividad}\n(${eva.tecnica})`,
  }));

  autoTable(doc, {
    startY: 50,
    head: [columns.map((col) => col.header)],
    body: rows.map((row) => columns.map((col) => row[col.dataKey])),
    theme: "grid",
    headStyles: { fillGray: [200, 200, 200], textColor: 20, fontStyle: "bold" },
    styles: { fontSize: 9, cellPadding: 3 },
    columnStyles: {
      0: { cellWidth: 15, halign: "center" },
      1: { cellWidth: 50 },
      4: { halign: "center" },
      5: { halign: "center", fontStyle: "bold" },
    },
  });

  // 4. Espacios para Firmas (Requisito Legal)
  const finalY = doc.lastAutoTable.finalY + 30;
  doc.line(20, finalY, 70, finalY);
  doc.text("Firma del Docente", 25, finalY + 5);

  doc.line(130, finalY, 180, finalY);
  doc.text("Control de Estudios", 135, finalY + 5);

  // Guardar archivo
  doc.save(`Plan_Evaluacion_${user.lastName}.pdf`);
};
