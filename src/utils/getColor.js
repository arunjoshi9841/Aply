const getColor = (status) => {
  let str;
  switch (status.toString()) {
    case "1":
      str = "Applied";
      break;
    case "2":
      str = "Rejected";
      break;
    case "3":
      str = "Interview";
      break;
    case "4":
      str = "Offer";
      break;
    case "5":
      str = "Accepted";
      break;
    default:
      str = "Applied";
  }
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  var colour = "#";
  for (var j = 0; j < 3; j++) {
    var value = (hash >> (j * 7)) & 0xff;
    colour += ("01" + value.toString(16)).substr(-2);
  }
  return colour;
};
export default getColor;
