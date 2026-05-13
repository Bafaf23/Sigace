"server client";
export async function logout() {
  try {
    const result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/logout/`, {
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
