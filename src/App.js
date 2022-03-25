import './App.css';
import Header from './Component/Header/Header';
import Products from './Component/Products/Products';
import QnaSection from './Component/QnaSection/QnaSection';

function App() {
  return (
    <div className="App">
     <Header />
     <Products/>
     <QnaSection/>
    </div>
  );
}

export default App;
