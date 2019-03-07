import React  from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Favorite from '@material-ui/icons/Favorite';
import Home from '@material-ui/icons/Home';
import TopArtists from '../containers/TopArtists';
import Favorites from '../containers/Favorites';
import Artist from '../containers/Artist';
import SearchAutocomplete from '../containers/SearchAutocomplete';

const styles = theme => ({
    root: {
        overflow: 'hidden',
        marginBottom: 30
    },
    paper: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }
});

const App = (props) => {
    const { classes } = props;
        return(
        <Router>
            <div>
                <div className={classes.root}>
                    <Grid container spacing={24}>
                        <Grid item xs={1}>
                            <Link to='/'>
                                <Home color='primary' />
                            </Link>
                        </Grid>
                        <Grid item xs={1}>
                            <Link to='/favorites/all'>
                                <Favorite color="error" />
                            </Link>
                        </Grid>
                        <Grid item xs={9}>
                            <SearchAutocomplete />
                        </Grid>
                    </Grid>
                </div>
                <Route exact path="/" component={TopArtists} />
                <Route exact path="/favorites/all" component={Favorites} />
                <Route exact path='/artist/:artist' component={Artist} />
            </div>
        </Router>
    )
}

export default withStyles(styles)(App);
