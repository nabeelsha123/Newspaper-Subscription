import logo from './logo.svg';
import './App.css';
import AddSubscriber from './components/AddSubscriber';
import SearchSubscriber from './components/SearchSubscriber';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DeleteSubscriber from './components/DeleteSubscriber';
import ViewAll from './components/ViewAll';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<AddSubscriber/>}/>
    <Route path="/Search" element={<SearchSubscriber/>}/>
    <Route path="/Delete" element={<DeleteSubscriber/>}/>
    <Route path="/View" element={<ViewAll/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
