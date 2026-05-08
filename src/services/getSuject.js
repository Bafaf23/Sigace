"use server";
/**
 * Obtiene las materias del sistema desde el backend Flask.
 * @returns {Promise<Array<Object>>}
 */
export async function getSubjects() {
  try {
    const response = await fetch("http://127.0.0.1:5000/subject/get/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

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
