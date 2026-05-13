"use server";
/**
 * Obtiene las materias del sistema desde el backend Flask.
 * @param {string} schoolId - Codigo SIG unco para cada institucion
 * @returns {Promise<Array<Object>>}
 */
export async function getSubjects(schoolId) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/subject/get/${schoolId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    if (!response.ok) {
      console.error(`Error en la API: ${response.status}`);
      return [];
    }

    const data = await response.json();

    return Array.isArray(data) ? data : data.subjects || [];
  } catch (error) {
    console.error("Error de conexión con el servidor Flask:", error);
    return [];
  }
}
