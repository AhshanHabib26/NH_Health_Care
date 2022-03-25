import './App.css';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Products from './Component/Products/Products';
import QnaSection from './Component/QnaSection/QnaSection';

function App() {
  return (
    <div className="App">
     <Header />
     <Products/>
     <QnaSection/>
     <Footer/>
    </div>
  );
}

export default App;
