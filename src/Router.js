import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cal1 from '../src/pages/Cal1';
import Cal2 from '../src/pages/Cal2';
import Main from './Component/main';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cal1" element={<Cal1 />} />
        <Route path="/cal2" element={<Cal2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
