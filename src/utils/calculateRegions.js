export default function calculateRegions(data, faceImg) {
  const imgWidth = Number(faceImg.width);
  const imgHeight = Number(faceImg.height);
  return data.regions.map((region) => {
    const { top_row, bottom_row, right_col, left_col } =
      region.region_info.bounding_box;
    return {
      top_boundry: imgHeight * top_row,
      bottom_boundry: imgHeight - imgHeight * bottom_row,
      right_boundry: imgWidth - imgWidth * right_col,
      left_boundry: imgWidth * left_col,
    };
  });
}
