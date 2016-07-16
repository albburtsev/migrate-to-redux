let b = block('page-entry');

import {PATH_SIGNIN, PATH_SIGNUP} from 'paths';

import './PageEntry.styl';
import React from 'react';
import {Link} from 'react-router';
import Button from 'react-bootstrap/lib/Button';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

/**
 * Entry page
 */
const PageEntry = () =>
    <div className={b}>
        <Glyphicon className={b('icon')()} glyph="apple" />
        <Link to={PATH_SIGNIN}>
            <Button componentClass="span" className={b('button')()} bsSize="large" bsStyle="primary">Sign in</Button>
        </Link>
        <Link to={PATH_SIGNUP}>
            <Button componentClass="span" className={b('button')()}>Sign up</Button>
        </Link>
    </div>
;

export default PageEntry;
