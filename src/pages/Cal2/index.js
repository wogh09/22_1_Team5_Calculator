import { useState, useRef } from 'react';
import useAxios from '../../hooks/useAxios';
import { API } from '../../config';
import {
  formatingNumber,
  formatingTimestamp,
  makingTapMenu,
  calculateCurrency,
} from '../../utils/currency';
import axios from 'axios';
import { useEffect } from 'react/cjs/react.development';

export default function Cal2() {
  const [currencyData, setCurrenceyData] = useState();
  const [inputValue, setInputValue] = useState(0);
  const [selectValue, setSelectValue] = useState('USD');
  const [tapValue, setTapValue] = useState('CAD');
  const [date, setDate] = useState('');

  const ref = useRef();
  useEffect(() => {
    axios.get(`${API.key}${process.env.REACT_APP_DATA_KEY}`).then(res => {
      setCurrenceyData([
        {
          name: 'USD',
          value: res.data.quotes.USDUSD,
        },
        {
          name: 'CAD',
          value: res.data.quotes.USDCAD,
        },
        {
          name: 'KRW',
          value: res.data.quotes.USDKRW,
        },
        {
          name: 'JPY',
          value: res.data.quotes.USDJPY,
        },
        {
          name: 'HKD',
          value: res.data.quotes.USDHKD,
        },
        {
          name: 'CNY',
          value: res.data.quotes.USDCNY,
        },
      ]);
      setDate(formatingTimestamp(res.data.timestamp));
    });
  }, []);

  const handleDropMenu = e => {
    const { value } = e.target;
    setInputValue(value);
    setTapValue(makingTapMenu(currencyData, value)[0].name);
    calculateCurrency(currencyData, value, tapValue, inputValue);
  };

  const handleTapMenu = e => {
    const { innerHTML } = e.target;
    setTapValue(innerHTML);
    calculateCurrency(currencyData, selectValue, innerHTML, inputValue);
  };

  const changeSelectValue = e => {
    setSelectValue(ref.current?.value);
  };

  const handleInputNumber = e => {
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  };

  return (
    <div className="h-screen flex justify-center  items-center">
      <div className="w-96 p-6 border-solid border-4 border-black">
        <div className="flex mb-6">
          <input
            value={inputValue}
            onChange={handleDropMenu}
            onKeyPress={handleInputNumber}
            className="w-full h-10 mr-1.5 pl-2 border-solid border-2 border-black"
          />
          <div className="w-full h-10 ml-1.5 border-solid border-2 border-black">
            <select
              className="w-full h-full"
              ref={ref}
              onChange={changeSelectValue}
            >
              {currencyData?.map((el, idx) => {
                return (
                  <option key={idx} value={el.name}>
                    {el.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div>
          <ul className="flex">
            {currencyData &&
              makingTapMenu(currencyData, selectValue).map((el, idx) => {
                return (
                  <li
                    key={idx}
                    onClick={handleTapMenu}
                    className={`w-full h-8 text-center border-solid ${
                      tapValue === 'USDKRW' ? 'border-t-2' : 'border-y-2'
                    } border-l-2 last:border-r-2 border-black`}
                  >
                    {el.name}
                  </li>
                );
              })}
          </ul>
          <div className="h-72 p-10 border-solid border-x-2 border-b-2 border-black">
            <div className="text-3xl">
              <span>{tapValue}</span>
              <span>
                {(currencyData &&
                  calculateCurrency(
                    currencyData,
                    selectValue,
                    tapValue,
                    inputValue
                  )) ||
                  0}
              </span>
            </div>
            <div>기준일 :</div>
            <div>{date}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
