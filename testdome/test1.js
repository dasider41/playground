function formatDate(userDate) {
  // format from M/D/YYYY to YYYYMMDD
  const formatDate = n => (n >= 10 ? n : "0".concat(n));
  let [month, date, year] = userDate.split("/");
  month = formatDate(month);
  date = formatDate(date);
  return `${year}${month}${date}`;
}

console.log(formatDate("12/31/2014"));
