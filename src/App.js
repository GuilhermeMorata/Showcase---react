import './App.css';
import Alertext from './componet/alerttext';
import Features from './componet/features';
import Header from './componet/header';
import Introtext from './componet/introtext';
import Svgtext from './componet/svgtext';
import Storage from './componet/storage';
import Imgtext from './componet/imgtext';
import Contant from './componet/contant';
import Footer from './componet/footer';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Introtext></Introtext>
     <Alertext></Alertext>
     <Features></Features>
     <Svgtext></Svgtext>
     <Storage></Storage>
     <Imgtext></Imgtext>
     <Contant></Contant>
     <Footer></Footer>
    </div>
  );
}

export default App;
