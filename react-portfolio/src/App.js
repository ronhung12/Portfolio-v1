import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Main from './components/Main';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {fas} from "@fortawesome/free-solid-svg-icons";

library.add(fab, fas);

class App extends Component {

    render() {
        return (
            <Grid>
                <Main/>
            </Grid>
        )
    };
}

export default App;
