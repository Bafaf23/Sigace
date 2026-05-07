import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

// Dentro de generadorBoleta.js
export const generadorBoleta = (estudiante, notas) => {
  const doc = new jsPDF();

  const LOGO_ESCUELA = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkqrSkLANps2BJc0f3ycYjYw6TvkzM1Bs87A&s`;

  // ... toda tu lógica de diseño ...
  // --- ENCABEZADO ---
  doc.addImage(LOGO_ESCUELA, "PNG", 20, 2, 30, 30);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.text("U.E.N JUNA DE ESCALONA", 50, 15, { align: "justify" });
  doc.setFontSize(10);
  doc.setTextColor(71, 85, 105);
  doc.text("J-000000-2", 50, 20);

  // --- 3. MARCA DE AGUA (SIGACE) ---
  doc.saveGraphicsState(); // Guarda el estado actual
  doc.setGState(new doc.GState({ opacity: 0.1 }));
  doc.setFontSize(50);
  doc.text("SIGACE", 105, 150, { align: "center", angle: 45 });
  doc.restoreGraphicsState(); // Restaura la opacidad a 1.0 automáticamente

  doc.setFontSize(15);
  doc.setTextColor(0, 0, 0);
  doc.setFont("helvetica", "normal");
  doc.text("Reporte de Rendimiento Académico (RRP)", 105, 30, {
    align: "center",
  });
  doc.line(20, 35, 190, 35); // Línea divisoria

  // --- DATOS DEL ESTUDIANTE ---
  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.text("Estudiante:", 20, 40);
  doc.setFont("helvetica", "normal");
  doc.text(`${estudiante.nombre}`, 45, 40);

  doc.setFont("helvetica", "bold");
  doc.text("ID / Cédula:", 20, 46);
  doc.setFont("helvetica", "normal");
  doc.text(`${estudiante.id}`, 45, 46);

  doc.setFont("helvetica", "bold");
  doc.text("Periodo:", 140, 40);
  doc.setFont("helvetica", "normal");
  doc.text("2025-2026", 160, 40);

  // --- TABLA DE NOTAS (AutoTable) ---
  autoTable(doc, {
    startY: 55,
    head: [["Asignatura", "Nota Numérica", "Literal", "Observación"]],
    body: notas.map((n) => [n.materia, n.nota, n.literal, n.comentario]),
    headStyles: { fillColor: [41, 128, 185], textColor: 255 },
    alternateRowStyles: { fillColor: [245, 245, 245] },
    margin: { left: 20, right: 20 },
  });

  const blob = doc.output("blob");
  const url = URL.createObjectURL(blob);

  // Asignamos la url al iframe
  const visor = document.getElementById("visor-pdf");
  if (visor) {
    visor.src = url;
  }
};
