import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card'
import data from './data';

function App() {

  const cards = data.map(item => {
    return(
      <Card
      key={item.id}
      img="download.jpg"
      {...item}
      />
    )
  })

  return (
    <div>
      <Navbar />
      <Hero />
      {cards}
    </div>
  );
}

export default App;
