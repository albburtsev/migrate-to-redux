let b = block('page-entry');

import './PageEntry.styl';
import React from 'react';

import Button from 'react-bootstrap/lib/Button';

/**
 * Entry page
 */
const PageEntry = () =>
    <div className={b}>
        <h1 className={b('title')}>Greetings!</h1>
        <Button className={b('button')()} bsSize="large" bsStyle="primary">Sign in</Button>
        <Button className={b('button')()}>Sign up</Button>
    </div>
;

export default PageEntry;
