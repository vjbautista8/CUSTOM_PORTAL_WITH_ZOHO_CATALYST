import './App.css';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='' element={<Navigate to='/' replace />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </HashRouter>
  );
}
export default App;
