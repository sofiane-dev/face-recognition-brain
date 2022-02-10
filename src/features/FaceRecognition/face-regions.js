const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export default async function getFaceRegions({ url, height, width }) {
  const raw = JSON.stringify({
    image: {
      url,
      height: +height,
      width: +width,
    },
  });

  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: raw,
  };

  try {
    const response = await fetch(`${SERVER_URL}/face-detection`, options);
    return await response.json();
  } catch (error) {
    console.log(error);
    return undefined;
  }
}
