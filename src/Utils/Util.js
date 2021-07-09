export const numberFormat = num => {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  }
  return num;
};

export const numberSeperator = number => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const getMonthString = month => {
  let string;
  switch (month) {
    case 1:
      string = 'Jan';
      break;
    case 2:
      string = 'Feb';
      break;
    case 3:
      string = 'Mar';
      break;
    case 4:
      string = 'Apr';
      break;
    case 5:
      string = 'May';
      break;
    case 6:
      string = 'Jun';
      break;
    case 7:
      string = 'Jul';
      break;
    case 8:
      string = 'Aug';
      break;
    case 9:
      string = 'Sep';
      break;
    case 10:
      string = 'Oct';
      break;
    case 11:
      string = 'Nov';
      break;
    case 12:
      string = 'Dec';
      break;
    default:
      break;
  }
  return string;
};
