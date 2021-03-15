import React, { useState } from 'react';
import { useHistory } from 'react-router';


const Login = () => {
    const history = useHistory();
    const [ formState, setFormState] = useState({
        login: true,
        email: '',
        password: '',
        name: ''
    });

    return (
        <div>
            <h4 className="mv3">
                {formState.login ? "Login" : 'Sign Up'}
            </h4>
            <div className="flex flex-column">
                {}
            </div>
        </div>
    )
}
