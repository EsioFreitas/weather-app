import d01 from "../images/01d.png";
import d02 from "../images/02d.png";
import d03 from "../images/03d.png";
import d10 from "../images/10d.png";
import d11 from "../images/11d.png";
import d13 from "../images/13d.png";
import n01 from "../images/01n.png";
import n02 from "../images/02n.png";
import n03 from "../images/03n.png";
import n10 from "../images/10n.png";
import n11 from "../images/11n.png";
import n13 from "../images/13n.png";

export default (iconId) => {
  switch (iconId) {
    case "01d":
      return d01;
    case "02d":
      return d02;
    case "03d":
      return d03;
    case "04d":
    case "09d":
    case "10d":
      return d10;
    case "11d":
      return d11;
    case "13d":
      return d13;
    case "01n":
      return n01;
    case "02n":
      return n02;
    case "03n":
      return n03;
    case "04n":
    case "09n":
    case "10n":
      return n10;
    case "11d":
      return n11;
    case "13d":
      return n13;
  }
};
