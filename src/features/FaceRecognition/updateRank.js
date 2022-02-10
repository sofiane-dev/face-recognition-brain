const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export default async function updateRank(id) {
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ id }),
  };
  try {
    const response = await fetch(`${SERVER_URL}/updateRank`, options);
    return await response.json();
  } catch (error) {
    console.log(error);
    return undefined;
  }
}
