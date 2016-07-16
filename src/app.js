import 'styl/app.styl';

import store from 'store';
import {createHistory} from 'history';
import {Router, Route, IndexRoute} from 'react-router';

import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react/lib/ReactDOM';
import Root from 'components/Root/Root.jsx';
import PageEntry from 'components/PageEntry/PageEntry.jsx';

let rootElement = document.querySelector('.app'),
    basePath = global.basePath || '/',
    history = createHistory();

ReactDOM.render((
    <Provider store={store}>
        <Router history={history}>
            <Route path={basePath} component={Root}>
                <IndexRoute component={PageEntry} />
            </Route>
        </Router>
    </Provider>
), rootElement);
