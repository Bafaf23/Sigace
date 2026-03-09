"use server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { School } from "lucide-react";

export async function enrollment(formData) {
  try {
    // 1. Corregimos el problema de la fecha (buscamos ambas posibilidades)
    const fechaRaw = formData.birthDate || formData.birthdate;

    if (!fechaRaw) {
      return { success: false, error: "La fecha de nacimiento es requerida." };
    }

    const birthDateObj = new Date(fechaRaw);
    if (isNaN(birthDateObj.getTime())) {
      return { success: false, error: "Formato de fecha inválido." };
    }

    // 2. Corregimos el DNI para que no sea "undefinedundefined"
    // Si ya viene unido del cliente, lo usamos. Si no, lo unimos aquí.
    const finalDni =
      formData.dni && !formData.dni.includes("undefined")
        ? formData.dni
        : `${formData.dniType || ""}${formData.dniNumber || ""}`;

    const passwordToHash = formData.pass || formData.password || finalDni;
    const hashedPassword = await bcrypt.hash(passwordToHash, 10);

    const newEnrollment = await prisma.Users.create({
      data: {
        dni: finalDni,
        name: formData.name,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        password: hashedPassword,
        role: "STUDENT",
        birthdate: birthDateObj,
        createdAt: new Date(),

        students: {
          create: {
            // --- SECCIÓN: SALUD Y TALLAS ---
            birthCountry: formData.birthCountry || "Venezuela",
            birthState: formData.birthState || "Miranda",
            bloodType: formData.bloodType || "Desconocido",
            allergies: formData.allergies || "Ninguna",
            weight: formData.weight || "0",
            height: formData.height || "0",
            shirtSize: formData.shirtSize || "S",
            shoeSize: formData.shoeSize || "0",
            pantSize: formData.pantSize || "0",
            medicalCondition: formData.medicalCondition || "N/A",

            // --- SECCIÓN: REPRESENTANTE ---
            representativeName: formData.repName || "",
            repLastName: formData.repLastName || "",
            repDni: formData.repdni || "",
            repPhone: formData.repPhone || "",
            repEmail: formData.repEmail || "",
            relationship: formData.relationship || "",

            // --- SECCIÓN: UBICACIÓN ---
            state: formData.state,
            municipality: formData.municipality,
            parish: formData.parish,
            addressDetail: formData.addressDetail,
            housingCondition: formData.housingCondition,

            // --- SECCIÓN: ACADÉMICO ---
            previousSchool: formData.previousSchool || "N/A",
            previousSchoolCode: formData.previousSchoolCode || null,
            canaimaSerial: formData.canaimaSerial || null,
            previousYear: formData.previousYear || null,
            previousSection: formData.previousSection || null,
            year: formData.year,
            section: formData.section,

            parents: {
              create: {
                // --- SECCIÓN: PADRES ---
                motherName: formData.motherName || "",
                motherDni: formData.motherDni || "",
                motherEmail: formData.motherEmail || "",
                motherPhone: formData.motherPhone || "",
                fatherName: formData.fatherName || "",
                fatherDni: formData.fatherDni || "",
                fatherEmail: formData.fatherEmail || "",
                fatherPhone: formData.fatherPhone || "",
              },
            },

            school: {
              create: {
                codeShool: formData.codeShool || "OD19641509",
                nameSchool: formData.nameSchool || "U.E.N Juan de Escalona",
                addressSchool:
                  formData.addressSchool ||
                  "Avenida El Arroyo, El Hatillo, Miranda, Venezuela",
              },
            },
          },
        },
      },
    });

    return { success: true, user: newEnrollment };
  } catch (error) {
    console.error("Error detallado:", error);
    return { success: false, error: "Error en el servidor al registrar." };
  }
}
