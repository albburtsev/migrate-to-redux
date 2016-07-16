let b = block('page-sign');

import './PageSign.styl';
import {PATH_ENTRY, PATH_SIGNIN, PATH_SIGNUP} from 'paths';

import {Link} from 'react-router';
import React, {PropTypes} from 'react';
import Well from 'react-bootstrap/lib/Well';
import Button from 'react-bootstrap/lib/Button';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';

const L10N_TITLE = {
    [PATH_SIGNIN]: 'Sign in',
    [PATH_SIGNUP]: 'Sign up'
};

const L10N_LINK_TEXT = {
    [PATH_SIGNIN]: 'Don\'t have an account?',
    [PATH_SIGNUP]: 'Already have an account?'
};

const L10N_BACK_LINK_TEXT = 'Back to entry';

/**
 * PageSign component
 */
const PageSign = ({type}) =>
    <div className={b}>
        <Well className={b('well')()}>
            <h3 className={b('title')()}>{L10N_TITLE[type]}</h3>
            <form>
                <FormGroup>
                    <FormControl autoFocus type="email" placeholder="Enter email" />
                </FormGroup>
                <FormGroup>
                    <FormControl type="password" placeholder="Enter password" />
                </FormGroup>
                <FormGroup>
                    <Button type="submit" bsStyle="primary">Submit</Button>
                </FormGroup>
                <Link to={type === PATH_SIGNUP ? PATH_SIGNIN : PATH_SIGNUP}>{L10N_LINK_TEXT[type]}</Link>
                <br />
                <Link to={PATH_ENTRY}>{L10N_BACK_LINK_TEXT}</Link>
            </form>
        </Well>
    </div>
;

PageSign.propTypes = {
    type: PropTypes.string.isRequired
};

/**
 * PageSignin component
 */
export const PageSignin = () =>
    <PageSign type={PATH_SIGNIN} />
;

/**
 * PageSignup component
 */
export const PageSignup = () =>
    <PageSign type={PATH_SIGNUP} />
;
