import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import blue from '@material-ui/core/colors/blue';

const defaultTheme = createMuiTheme({ 
    palette: {
        primary: blue
    }, 
    typography: {
        useNextVariants: true,
    } 
});

const { breakpoints } = defaultTheme;

const theme = {
...defaultTheme,
    overrides: {
        MuiTypography: {
            h1: {
                fontSize: "4.1rem",
                color: "#2b2b2b",
                [breakpoints.down("xs")]: {
                fontSize: "2.2rem"
                }
            },
            h2: {
                fontSize: "3.1rem",
                color: "#2b2b2b",
                [breakpoints.down("xs")]: {
                fontSize: "1.7rem"
                }
            },
        },
    }
}

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <App />
    </MuiThemeProvider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
