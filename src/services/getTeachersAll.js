"server";
/**
 * Llamada a todo los profesorres por intitucion
 *
 * @param {string} schoolId - codigo SIG unico para cada institucion
 * @returns {<Array> string} - Lista de los prefesores.
 */
export async function getTeachersAll(schoolId) {
  try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/get_user_teachers/${schoolId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    if (!result.ok) {
      console.log(`Error en la API ${result.succes}`);
      return [];
    }
    const data = await result.json();
    return Array.isArray(data) ? data : data.Teachers || [];
  } catch (error) {
    console.error("Error de conexión con el servidor Flask:", error);
    return [];
  }
}
