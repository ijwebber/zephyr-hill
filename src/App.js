import './App.css';
import Page from './components/pages/Page';
import Home from './components/pages/Home';
import Music from './components/pages/Music';

function App() {
  return (
    <div className="App">
      <Page>
        <Home></Home>
      </Page>
      <Page bg="black">
        <Music></Music>
      </Page>
    </div>
  );
}

export default App;
