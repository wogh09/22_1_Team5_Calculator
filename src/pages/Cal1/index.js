import useAxios from '../../hooks/useAxios';
import { API } from '../../config';
import { useRef, useState } from 'react';
import { priceToString } from '../../utils/priceToString';

export default function Cal1() {
  const { data } = useAxios(`${API.key}${process.env.REACT_APP_DATA_KEY}`);
  const ref = useRef();
  const [selectValue, setSelectValue] = useState('KRW');
  const [exchangeRate, setExchangeRate] = useState(0);
  const [receivable, setReceivable] = useState(0);

  const changeSelectValue = () => {
    setSelectValue(ref.current?.value);
  };

  const changeInputExchangeRate = e => {
    setExchangeRate(e.target.value);
  };

  const refValueData = () => {
    if (selectValue === 'KRW') {
      return data?.quotes.USDKRW.toFixed(2);
    } else if (selectValue === 'JPY') {
      return data?.quotes.USDJPY.toFixed(2);
    } else if (selectValue === 'PHP') {
      return data?.quotes.USDPHP.toFixed(2);
    } else {
      return data?.quotes.USDKRW.toFixed(2);
    }
  };

  const totalPrice = () => {
    if (exchangeRate >= 0 && exchangeRate < 10001) {
      const multiplication = refValueData() * exchangeRate;
      const comma = priceToString(multiplication);
      setReceivable(comma);
    } else {
      return alert('송금액이 바르지 않습니다 !');
    }
  };

  return (
    <div className="flex justify-center flex-col h-screen items-center">
      <div className=" w-100 ">
        <div className="text-xs font-bold pb-14">환율계산</div>
        <div className="text-xl font-bold pb-3">송금국가: 미국(USA)</div>
        <div className="flex ">
          <div className="text-xl font-bold mb-3">수취국가:</div>
          <select
            name="nations"
            id="nations-select"
            className="border-solid border-2 border-black rounded-lg"
            ref={ref}
            onChange={changeSelectValue}
          >
            <option value="KRW">한국(KRW)</option>
            <option value="JPY">일본(JPY)</option>
            <option value="PHP">필리핀(PHP)</option>
          </select>
        </div>
        <div className="text-xl font-bold pb-3 ">
          {`환율:${refValueData()}  
          ${selectValue}/USD`}
        </div>
        <div className="flex">
          <div className="text-xl font-bold ">송금액:</div>
          <input
            className="border-solid border-2 border-black box-border mb-3"
            id="money"
            onChange={changeInputExchangeRate}
          />
          <div className="text-xl font-bold">USD</div>
        </div>
        <button
          className="border-solid border-2 border-black text-xl font-bold mb-14 box-border"
          onClick={totalPrice}
        >
          Submit
        </button>
        <div className="text-xl font-bold">
          {`수취금액은 ${receivable} ${selectValue} 입니다.`}
        </div>
      </div>
    </div>
  );
}
