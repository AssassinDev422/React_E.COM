import React, { Component } from 'react';
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from './components/App';
import TableView from './components/TableView';
import ItemView from './components/ItemView';
import store from './store';
class Root extends Component {
    render() {
        return <div>
            <Provider store={store}>
            <BrowserRouter>
              <Switch>
                  <Route path="/list" component={TableView} />
                  <Route  path="/item/:id" component={ItemView} />
                  <Route path="" component={App} />
              </Switch>
              </BrowserRouter>
            </Provider>
          </div>;
    }
}

export default Root;