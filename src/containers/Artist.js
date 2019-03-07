import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Favorite from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import 'typeface-roboto';
import ACTIONS from '../actions/';

const styles = theme => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden',
    },
    paper: {
        maxWidth: 400,
        margin: `${theme.spacing.unit}px auto`,
        padding: theme.spacing.unit * 2,
    },
    h: {
        color: 'grey',
        marginBottom: 15
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline'
    }
});

const theme = createMuiTheme({
  typography: {
      useNextVariants: true,
  }
});

class Artist extends Component {
  componentDidMount () {
      this.props.getInfo(this.props.match.params.artist);
  }
  componentDidUpdate(prevProps) {
      if (this.props.match.params.artist !== prevProps.match.params.artist) {
        this.props.getInfo(this.props.match.params.artist);
      }
  }
  render () {
        const { artistInfo, classes, favorites, deleteFromFavorites, addToFavorites } = this.props;
        let isInFavorites, bio;
        if(artistInfo[0] !== undefined) {
            isInFavorites = favorites.find(i => i.name == artistInfo[0].name);
            bio = artistInfo[0].bio.content.substr(0, artistInfo[0].bio.content.indexOf('<a'));
        }
        return (
            <>
                {artistInfo[0] !== undefined &&
                    <div className={classes.root}>
                        <MuiThemeProvider theme={theme}>
                            <div className={classes.header}>
                                <Typography className={classes.h} component="h3" variant="h2">
                                    {artistInfo[0].name}
                                </Typography>
                                {isInFavorites
                                    ?
                                        <IconButton className={classes.icons} aria-label="Delete from favorites"
                                                    onClick={() => deleteFromFavorites(artistInfo[0].name)}>
                                            <Favorite color='error' />
                                        </IconButton>
                                    :
                                        <IconButton className={classes.icons} aria-label="Add from favorites"
                                                    onClick={() => addToFavorites(artistInfo[0].name)}>
                                            <Favorite color='disabled'/>
                                        </IconButton>
                                }
                            </div>
                        </MuiThemeProvider>
                        <Typography className={classes.h} variant="subtitle1" gutterBottom>
                            {`Listeners: ${artistInfo[0].stats.listeners}`}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            {bio}
                        </Typography>
                    </div>
                }
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        artistInfo: state.artistInfo,
        favorites: state.favorites
    };
};

const mapDispatchToProps = dispatch => ({
    getInfo: (artist) => dispatch(ACTIONS.getInfo(artist)),
    addToFavorites: (name) => dispatch(ACTIONS.addToFavorites(name)),
    deleteFromFavorites: (name) => dispatch(ACTIONS.deleteFromFavorites(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Artist));
