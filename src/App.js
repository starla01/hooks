//Librerias
import { useState } from 'react';
import { Switch, Route, useParams } from "react-router-dom";
import { withRouter } from "react-router";

//Views
import Home from './views/Home';
import ListView from './views/ListView';
import DetailView from './views/DetailView';

//Components
import Header from './components/Header';

//Styles
import './App.css';

function App({history}) {
  const [listItems, setListItems] = useState([]);
  return (
    <div className="App">
      {
        history.location.pathname !== '/' && <Header history={history} setListItems={setListItems} />
      }
      <Switch>
        <Route exact path="/" children={<Home  setListItems={setListItems} />} />
        <Route path="/items" children={<ListView listItems={listItems} />} />
        <Route path="/item/:id" children={<DetailView />} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
