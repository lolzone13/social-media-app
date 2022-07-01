import { createContext, useReducer } from 'react';
import AuthReducer from '../reducers/AuthReducer';
import axios from 'axios';

const initialState = {
    authenticated: false,
    token: "",
    loading: true,
    error: null,
    user: null
}


export const AuthContext = createContext(initialState);

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState);

    async function registerUser(userData) {
        console.log(userData);
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        try {
            
            const res = await axios.post(`http://localhost:5000/api/v1/auth/register`, userData, config);
            
            if (res.data.success) {
                dispatch({
                    type: 'AUTHENTICATED',
                    payload: {
                        token: res.data.token,
                        user: res.data.data
                    }
                });
            }

        } catch (err) {
            dispatch({
                type: 'AUTH_ERROR',
                payload: {
                    error: err.response.data.error
                }
                
            })           
        }

    }

    return (<AuthContext.Provider value={{
        authenticated: state.authenticated, 
        token: state.token,
        user: state.user,
        error: state.error,
        loading: state.loading,
        registerUser
    }}>
        { children }
        </AuthContext.Provider>)
}

