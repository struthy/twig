import objectFitImages from "object-fit-images";
import picturefill from "picturefill";

export default () => {
  let ourObjectFitImage = document.querySelectorAll("img.objectFitImage");
  objectFitImages("ourObjectFitImage");
};
