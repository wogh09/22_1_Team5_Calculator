import { useState, useRef } from 'react';
import useAxios from '../../hooks/useAxios';
import { API } from '../../config';

export default function Cal2() {
  const [inputValue, setInputValue] = useState(0);
  const [selectValue, setSelectValue] = useState('USDUSD');
  const [tapValue, setTapValue] = useState('USDCAD');
  const [selectedTapUnit, setSelectedTapUnit] = useState('');

  const ref = useRef();

  const { data } = useAxios(`${API.key}${process.env.REACT_APP_DATA_KEY}`);
  const saveTapValue = data?.quotes[tapValue];
  const saveSelectValue = data?.quotes[selectValue];

  const timestamp = data?.timestamp * 1000;
  const date = new Date(timestamp);

  const handleValue = e => {
    if (e.target.value > 1000) {
      setInputValue(1000);
    } else {
      setInputValue(e.target.value);
    }
  };

  const changeSelectValue = () => {
    setSelectValue(ref.current?.value);
  };

  const handleTapValue = e => {
    const name = e.target.getAttribute('name');
    setTapValue(name);
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
            onChange={handleValue}
            onKeyPress={handleInputNumber}
            className="w-full h-10 mr-1.5 pl-2 border-solid border-2 border-black"
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
                tapValue === 'USDCAD' ? 'border-t-2' : 'border-y-2'
              } border-l-2 last:border-r-2 border-black`}
            />
            <input
              type="button"
              value={selectValue === 'USDKRW' ? 'USD' : 'KRW'}
              name={selectValue === 'USDKRW' ? 'USDUSD' : 'USDKRW'}
              onClick={handleTapValue}
              className={`w-full h-8 text-center border-solid ${
                tapValue === 'USDKRW' ? 'border-t-2' : 'border-y-2'
              } border-l-2 last:border-r-2 border-black`}
            />
            <input
              type="button"
              value={selectValue === 'USDHKD' ? 'USD' : 'HKD'}
              name={selectValue === 'USDHKD' ? 'USDUSD' : 'USDHKD'}
              onClick={handleTapValue}
              className={`w-full h-8 text-center border-solid ${
                tapValue === 'USDHKD' ? 'border-t-2' : 'border-y-2'
              } border-l-2 last:border-r-2 border-black`}
            />
            <input
              type="button"
              value={selectValue === 'USDJPY' ? 'USD' : 'JPY'}
              name={selectValue === 'USDJPY' ? 'USDUSD' : 'USDJPY'}
              onClick={handleTapValue}
              className={`w-full h-8 text-center border-solid ${
                tapValue === 'USDJPY' ? 'border-t-2' : 'border-y-2'
              } border-l-2 last:border-r-2 border-black`}
            />
            <input
              type="button"
              value={selectValue === 'USDCNY' ? 'USD' : 'CNY'}
              name={selectValue === 'USDCNY' ? 'USDUSD' : 'USDCNY'}
              onClick={handleTapValue}
              className={`w-full h-8 text-center border-solid ${
                tapValue === 'USDCNY' ? 'border-t-2' : 'border-y-2'
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
