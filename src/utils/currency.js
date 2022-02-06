export function formatingNumber(num) {
  const numWithTwoDecimalPlaces = num.toFixed(2);
  const resultNumber = numWithTwoDecimalPlaces.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    ','
  );

  return resultNumber;
}

export const formatingTimestamp = timestamp => {
  const date = new Date(timestamp * 1000);
  const year = date.getFullYear();
  const month = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(
    date.getMonth()
  );
  const day = String(date.getDate().padStart(2, '0'));
  return `${year}-${month}-${day}`;
};

export function makingTapMenu(input, unit) {
  const result = input.filter(el => el.name !== unit);
  return result;
}

export function calculateCurrency(data, selectCur, tapCur, pay) {
  const valSelectCur = data.filter(el => el.name === selectCur)[0]?.value;
  const valTapCur = data.filter(el => el.name === tapCur)[0]?.value;
  const result = valTapCur / valSelectCur;
  const resultMultiplyPay = pay * result;

  return resultMultiplyPay;
}
