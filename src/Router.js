import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cal1 from '../src/pages/Cal1';
import Cal2 from '../src/pages/Cal2';
import Main from './Component/main';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cal1" element={<Cal1 />} />
        <Route path="/Cal2" element={<Cal2 />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
