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
