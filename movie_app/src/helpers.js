export const calcTime = (time) => {
  const hours = Math.floor(time / 60);
  const mins = time % 60;
  return `${hours}h ${mins}n`;
};

export const convertMoney = (money) => {
  const formatter = new Intl.NumberFormat('en-us', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  });
  return formatter.format(money);
};
