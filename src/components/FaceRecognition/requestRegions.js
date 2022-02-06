import calculateRegions from "utils/calculateRegions";

export default function requestRegions(imgUrl, faceImg) {
  const raw = JSON.stringify({
    user_app_id: {
      user_id: "l3unpgsoqv3a",
      app_id: "a1c2f9739029400a809e6041352b8c34",
    },
    inputs: [
      {
        data: {
          image: {
            url: imgUrl,
          },
        },
      },
    ],
  });

  const requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: "Key 2ce8f5fbedad455797e408146f924c67",
    },
    body: raw,
  };

  return fetch(
    "https://api.clarifai.com/v2/models/face-detection/outputs",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      const data = JSON.parse(result, null, 2).outputs[0].data;
      return calculateRegions(data, faceImg);
    })
    .catch((error) => console.log("error", error));
}
