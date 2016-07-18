import 'bootstrap/dist/css/bootstrap.css';
import 'styl/app.styl';

import store from 'store';
import * as paths from 'paths';
import {createHistory} from 'history';
import {Router, Route, IndexRoute} from 'react-router';

import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react/lib/ReactDOM';
import Root from 'components/Root/Root.jsx';
import PageEntry from 'components/PageEntry/PageEntry.jsx';
import PageSignin from 'components/PageSign/PageSignin.jsx';
import PageSignup from 'components/PageSign/PageSignup.jsx';

let rootElement = document.querySelector('.app'),
    basePath = global.basePath || paths.PATH_ENTRY,
    history = createHistory();

ReactDOM.render((
    <Provider store={store}>
        <Router history={history}>
            <Route path={basePath} component={Root}>
                <IndexRoute component={PageEntry} />
                <Route component={PageSignin} path={paths.PATH_SIGNIN} />
                <Route component={PageSignup} path={paths.PATH_SIGNUP} />
            </Route>
        </Router>
    </Provider>
), rootElement);
