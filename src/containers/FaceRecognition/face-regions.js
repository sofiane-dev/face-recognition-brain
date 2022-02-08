const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export default async function getFaceRegions({ url, height, width }) {
  const raw = JSON.stringify({
    image: {
      url,
      height: +height,
      width: +width,
    },
  });

  return fetch(`${SERVER_URL}/face-detection`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: raw,
  });
}
