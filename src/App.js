

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage.js/Homepage';

function App() {
  return (
    <BrowserRouter>
      <div>
        

        <Routes>
        <Route path="/" element={<Homepage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
