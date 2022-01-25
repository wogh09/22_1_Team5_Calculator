// import { useState } from 'react';
import { useState, useRef, useEffect } from 'react';
import useAxios from '../../hooks/useAxios';
import { API } from '../../config';

export default function Cal2() {
  const [inputValue, setInputValue] = useState('0');
  const [selectValue, setSelectValue] = useState('USDUSD');
  const [tapValue, setTapValue] = useState('USDCAD');
  const [isClicked, setIsClicked] = useState([
    true,
    false,
    false,
    false,
    false,
  ]);

  const ref = useRef();

  const { data } = useAxios(`${API.key}${process.env.REACT_APP_DATA_KEY}`);
  const saveTapValue = data?.quotes[tapValue];
  const saveSelectValue = data?.quotes[selectValue];

  const timestamp = data?.timestamp * 1000;
  const date = new Date(timestamp);

  const handleValue = e => {
    setInputValue(e.target.value);
  };

  const changeSelectValue = () => {
    setSelectValue(ref.current?.value);
  };

  const handleTapValue = e => {
    const name = e.target.getAttribute('name');
    setTapValue(name);
    if (name === 'USDCAD') {
      setIsClicked([true, false, false, false, false]);
    } else if (name === 'USDKRW') {
      setIsClicked([false, true, false, false, false]);
    } else if (name === 'USDHKD') {
      setIsClicked([false, false, true, false, false]);
    } else if (name === 'USDJPY') {
      setIsClicked([false, false, false, true, false]);
    } else if (name === 'USDCNY') {
      setIsClicked([false, false, false, false, true]);
    }
  };

  console.log('selectValue>>', selectValue);
  console.log('tapValue>>', tapValue);

  return (
    <div className="h-screen flex justify-center  items-center">
      <div className="w-96 p-6 border-solid border-4 border-black">
        <div className="flex mb-6">
          <input
            className="w-full h-10 mr-1.5 pl-2 border-solid border-2 border-black"
            onChange={handleValue}
          />
          <div className="w-full h-10 ml-1.5 border-solid border-2 border-black">
            <select
              className="w-full h-full"
              ref={ref}
              onChange={changeSelectValue}
            >
              <option value="USDUSD">USD</option>
              <option value="USDCAD">CAD</option>
              <option value="USDKRW">KRW</option>
              <option value="USDHKD">HKD</option>
              <option value="USDJPY">JPY</option>
              <option value="USDCNY">CNY</option>
            </select>
          </div>
        </div>
        <div>
          <div className="flex">
            <input
              type="button"
              value={selectValue === 'USDCAD' ? 'USD' : 'CAD'}
              name={selectValue === 'USDCAD' ? 'USDUSD' : 'USDCAD'}
              onClick={handleTapValue}
              className={`w-full h-8 text-center border-solid ${
                isClicked[0] ? 'border-t-2' : 'border-y-2'
              } border-l-2 last:border-r-2 border-black`}
            />
            <input
              type="button"
              value={selectValue === 'USDKRW' ? 'USD' : 'KRW'}
              name={selectValue === 'USDKRW' ? 'USDUSD' : 'USDKRW'}
              onClick={handleTapValue}
              className={`w-full h-8 text-center border-solid ${
                isClicked[1] ? 'border-t-2' : 'border-y-2'
              } border-l-2 last:border-r-2 border-black`}
            />
            <input
              type="button"
              value={selectValue === 'USDHKD' ? 'USD' : 'HKD'}
              name={selectValue === 'USDHKD' ? 'USDUSD' : 'USDHKD'}
              onClick={handleTapValue}
              className={`w-full h-8 text-center border-solid ${
                isClicked[2] ? 'border-t-2' : 'border-y-2'
              } border-l-2 last:border-r-2 border-black`}
            />
            <input
              type="button"
              value={selectValue === 'USDJPY' ? 'USD' : 'JPY'}
              name={selectValue === 'USDJPY' ? 'USDUSD' : 'USDJPY'}
              onClick={handleTapValue}
              className={`w-full h-8 text-center border-solid ${
                isClicked[3] ? 'border-t-2' : 'border-y-2'
              } border-l-2 last:border-r-2 border-black`}
            />
            <input
              type="button"
              value={selectValue === 'USDCNY' ? 'USD' : 'CNY'}
              name={selectValue === 'USDCNY' ? 'USDUSD' : 'USDCNY'}
              onClick={handleTapValue}
              className={`w-full h-8 text-center border-solid ${
                isClicked[4] ? 'border-t-2' : 'border-y-2'
              } border-l-2 last:border-r-2 border-black`}
            />
          </div>
          <div className="h-72 p-10 border-solid border-x-2 border-b-2 border-black">
            <div className="text-3xl">
              <span>
                {selectValue === tapValue ? 'USD' : tapValue.substring(3)}
              </span>
              <span>
                {((inputValue * saveTapValue) / saveSelectValue).toFixed(2)}
              </span>
            </div>
            <div>기준일 :</div>
            <div>
              {date.getFullYear() +
                '-' +
                date.toDateString().slice(4, 7) +
                '-' +
                String(date.getDate()).padStart(2, '0')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
