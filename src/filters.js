export default {
  currencyfilter(value) {
    return (value || 0)?.toFixed(3);
  },
  dateDisplay(timestamp) {
    const a = new Date(timestamp * 1000);
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const year = a.getFullYear();
    const month = months[a.getMonth()];
    const date = a.getDate();

    return `${month} ${date}, ${year}`;
  },
};
