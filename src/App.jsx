import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import { Provider  } from 'react-redux';
import store from './store';
import Home from './pages/Home';
import { getNewsSource } from './actions/news';
import Article from './pages/Article';

const App = (props) => {
    
  useEffect(() => {
    store.dispatch(getNewsSource());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Switch>
              <>
                <Route path='/' exact component={Home} />
                <Route path='/:newsItemPublishedAt' exact component={Article} />
              </>
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;


