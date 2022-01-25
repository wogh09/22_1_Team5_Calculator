import { Link } from 'react-router-dom';

export default function Main() {
  return (
    <div className="flex justify-center h-screen items-center">
      <div className=" w-100 ">
        <div className="text-xs font-bold mb-20">응급코딩학과</div>
        <Link to="/Cal1">
          <div className="text-xs font-medium mb-40 ">1번 환율계산기!</div>
        </Link>
        <Link to="/Cal2">
          <div className="text-xs font-medium ">2번 환율계산기!</div>
        </Link>
      </div>
    </div>
  );
}
