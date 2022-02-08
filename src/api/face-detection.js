export default async function getFaceRegions({url, height,width}) {
  const raw = JSON.stringify({
    image: {
      url,
      height: +height,
      width: +width,
    },
  });

  return fetch("http://localhost:8080/face-detection", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: raw,
  });
}
