import React, { Component }  from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ACTIONS from "../actions/index";
import { withStyles } from '@material-ui/core/styles';
import Favorite from '@material-ui/icons/Favorite';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'start',
        marginTop: 20
    },
    card: {
        margin: '10px 5px',
        [theme.breakpoints.down('sm')]: {
            width: 'calc(50% - 10px)',
        },
        [theme.breakpoints.up('md')]: {
            width: 'calc(33.3% - 10px)'
        },
        [theme.breakpoints.up('lg')]: {
            width: 'calc(25% - 20px)',
            margin: '10px 10px'
        },
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    links: {
        color: 'grey',
        textDecoration: 'none',
        marginRight: 5
    },
    header: {
        padding: 5
    },
    h: {
        color: 'grey'
    }
});

const theme = createMuiTheme({
  typography: {
      useNextVariants: true,
  },
});

class TopArtists extends Component {
    componentDidMount () {
        this.props.getTopArtists();
    }
    render () {
        const { classes, topArtists, getSimilar, addToFavorites, deleteFromFavorites, favorites } = this.props;
        return (
            <>
                <MuiThemeProvider theme={theme}>
                    <Typography  className={classes.h} component="h2" variant="h2">
                      Popular rigth now on Last.fm in Ukraine
                    </Typography>
                </MuiThemeProvider>
                <div className={classes.root}>
                    {topArtists.map((item, id) => {
                        const i = item.image[4];
                        const val = Object.values(i)[0];
                        const isInFavorites = favorites.find(i => i.name === item.name);
                        return  (
                            <Card key={id} xs={4} className={classes.card}>
                                <CardHeader
                                    className={classes.header}
                                    action={
                                        <CardActions className={classes.actions} disableActionSpacing>
                                            <Link className={classes.links} to={`/artist/${item.name.toLowerCase()}`}>{item.name}</Link>
                                                {isInFavorites
                                                    ?
                                                        <IconButton className={classes.icons} aria-label="Delete from favorites"
                                                                    onClick={() => deleteFromFavorites(item.name)}>
                                                            <Favorite  color='error' />
                                                        </IconButton>
                                                    :
                                                      <IconButton className={classes.icons} aria-label="Add from favorites"
                                                                  onClick={() => {
                                                                      addToFavorites(item.name);
                                                                      getSimilar(item.name);
                                                                  }}>
                                                          <Favorite color='disabled'/>
                                                      </IconButton>
                                                }
                                        </CardActions>
                                    }
                                />
                                <Link to={`/artist/${item.name.toLowerCase()}`}>
                                    <CardMedia
                                      className={classes.media}
                                      image={val}
                                      title={item.name}
                                    />
                                </Link>
                      </Card>
                    )
                })}
            </div>
        </>
      )
    }
}

const mapStateToProps = state => {
    return {
        topArtists: state.topArtists,
        favorites: state.favorites
    };
}

const mapDispatchToProps = dispatch => ({
    getTopArtists: () => dispatch(ACTIONS.getTopArtists()),
    addToFavorites: (id) => dispatch(ACTIONS.addToFavorites(id)),
    deleteFromFavorites: name => dispatch(ACTIONS.deleteFromFavorites(name)),
    getSimilar: name => dispatch(ACTIONS.getSimilar(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(TopArtists));
