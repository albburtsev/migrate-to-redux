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
 * PageSignPure component
 */
const PageSignPure = ({type, login, password, onChange, onSubmit}) =>
    <div className={b}>
        <Well className={b('well')()}>
            <h3 className={b('title')()}>{L10N_TITLE[type]}</h3>
            <form onSubmit={onSubmit.bind(null, login, password)}>
                <FormGroup>
                    <FormControl autoFocus
                        type="email" name="login" placeholder="Enter email" value={login}
                        onChange={onChange.bind(null, 'login')}
                    />
                </FormGroup>
                <FormGroup>
                    <FormControl
                        type="password" name="password" placeholder="Enter password" value={password}
                        onChange={onChange.bind(null, 'password')}
                    />
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

PageSignPure.propTypes = {
    type: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    request: PropTypes.shape({
        isLoading: PropTypes.bool.isRequired,
        isSuccess: PropTypes.bool.isRequired,
        errors: PropTypes.object
    }).isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
};

export default PageSignPure;
