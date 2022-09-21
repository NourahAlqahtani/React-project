import './App.css';
import Nav from './components/Nav';
import Courss from './components/Courss';
import Footer from './components/Footer';
import M1 from './images/m1.png'
import M2 from './images/m2.jpeg'
import M3 from './images/m3.png'
import M4 from './images/m4.png'
import M5 from './images/m5.png'

function App() {
  return (
    <div>
     <Nav/>
     <div className='container'>
     <Courss text= "available" img={M1}/>
     <Courss text= "available" img={M2}/>
      <Courss text= "available" img={M3}/> 
      <Courss text= "available" img={M4}/> 
      <Courss text= "available" img={M5}/>
      <Courss text= "available" img={M1}/>
      <Courss text= "available" img={M2}/>
      <Courss img={M3}/> 
      <Courss text= "available" img={M4}/> 
      <Courss text= "available" img={M5}/>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
