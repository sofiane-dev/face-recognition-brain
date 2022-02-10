const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export default async function signin(email, password) {
  try {
    const response = await fetch(`${SERVER_URL}/signin`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    return await response.json();
  } catch (error) {
    console.log(error);
    return undefined;
  }
}
