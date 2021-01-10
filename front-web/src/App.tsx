import './App.css';
import Routes from './Routes';

//import Counter from './Counter';
//import Hello from './Hello';

//Usando rotas do react: nom install react-router-dom
//instalar os tipos de router-dom pois está usando typescript: npm install @types/react-router-dom

function App() {
  return (
    //  <div>
    //    <Hello message="Daniel"/>
    //  </div>
    //  <div>
    //    <Counter/>
    //  </div>
    <>
      <Routes />
    </>

  );
}

export default App;
