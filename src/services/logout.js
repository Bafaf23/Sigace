"server client";
export async function logout() {
  try {
    const result = await fetch("http://127.0.0.1:5000/logout/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (result.ok) {
      sessionStorage.clear();
    }

    return result;
  } catch (error) {
    console.log(error);
  }
}
