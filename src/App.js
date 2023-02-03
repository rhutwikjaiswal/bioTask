import './App.css';
import Navbar from './Navbar';
import Details from './Details';
import Details2 from './Details2';

function App() {
  return (
    <div className="App">
      <div class="">
  <div class="row">
    <div class="col-2">
    <Navbar/>
    </div>
    <div class="col-2">
    <Details/>
    </div>
    <div class="col-8">
      <Details2/>
    </div>
  </div>
</div>
 
     
    </div>
  );
}

export default App;
