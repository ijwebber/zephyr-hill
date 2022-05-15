import './App.css';
import Page from './components/pages/Page';
import Music from './components/pages/Music';

function App() {
  return (
    <div className="App">
      <Page>
        <Music></Music>
      </Page>
    </div>
  );
}

export default App;
