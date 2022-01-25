export default function Cal1() {
  return (
    <div className="flex justify-center flex-col h-screen items-center">
      <div className=" w-80 ">
        <div className="text-xs font-bold pb-14">환율계산</div>
        <div className="text-xl font-bold pb-3">송금국가: 미국(USA)</div>
        <div className="flex ">
          <div className="text-xl font-bold mb-3">수취국가:</div>
          <select
            name="nations"
            id="nations-select"
            className="border-solid border-2 border-black rounded-lg"
          >
            <option value="korea ">한국(KRW)</option>
            <option value="japan">일본(JPY)</option>
            <option value="Philippines">필리핀(PHP)</option>
          </select>
        </div>
        <div className="text-xl font-bold pb-3 ">환율:Data DATA/USD</div>
        <div className="flex">
          <div className="text-xl font-bold ">송금액:</div>
          <input className="border-solid border-2 border-black box-border mb-3" />
          <div className="text-xl font-bold">USD</div>
        </div>
        <button className="border-solid border-2 border-black text-xl font-bold mb-14 box-border">
          Submit
        </button>
        <div className="text-xl font-bold">수취금액은 DATA 입니다</div>
      </div>
    </div>
  );
}
