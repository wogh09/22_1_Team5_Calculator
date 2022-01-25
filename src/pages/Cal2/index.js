import { CURRENCY_LIST } from './currencyData';

export default function Cal2() {
  return (
    <div className="h-screen flex justify-center	items-center">
      <div className="w-96 p-6 border-solid border-4 border-black">
        <div className="flex mb-6">
          <input className="w-full h-10 mr-1.5 pl-2 border-solid border-2 border-black" />
          <div className="w-full h-10 ml-1.5 border-solid border-2 border-black">
            <select className="w-full h-full">
              <option>USD</option>
              <option>CAD</option>
              <option>KRW</option>
              <option>HKD</option>
              <option>JPY</option>
              <option>CNY</option>
            </select>
          </div>
        </div>
        <div>
          <ul className="flex">
            {CURRENCY_LIST.map(data => {
              return (
                <li
                  key={data.id}
                  className="w-full h-8 text-center border-solid border-2 border-black"
                >
                  {data.value}
                </li>
              );
            })}
          </ul>
          <div className="h-72 p-10 border-solid border-x-2 border-b-2 border-black">
            <div className="text-2xl">CAD 20,000</div>
            <div>기준일 :</div>
            <div>2022-01</div>
          </div>
        </div>
      </div>
    </div>
  );
}
