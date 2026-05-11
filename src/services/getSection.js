/**
 * Trae todas las secioes de un colegio
 * @param {string} schoolid - codigo SIG unico para cada intitucion
 * @returns {<Array> string}
 */
export async function getSection(schoolid) {
  try {
    const result = await fetch(
      `http://127.0.0.1:5000/section/get_section/${schoolid}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    if (!result.ok) {
      console.log("error de conexcion con la API");
    }
    const data = await result.json();

    return Array.isArray(data) ? data : data.Sections || [];
  } catch (error) {
    console.log(error);
    return [];
  }
}
