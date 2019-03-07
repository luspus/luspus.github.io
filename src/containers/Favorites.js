import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Similar from './SimilarArtists';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Favorite from '@material-ui/icons/Favorite';
import red from '@material-ui/core/colors/red'
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import 'typeface-roboto';
import ACTIONS from '../actions/';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'start',
        marginTop: 15
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
        }
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    avatar: {
        backgroundColor: red[500],
    },
    h: {
        color: 'grey',
        margin: 10,
        textAlign: 'center'
    }
});

const theme = createMuiTheme({
  typography: {
      useNextVariants: true,
  }
});

class Favorites extends Component {
    render () {
        const { classes, favorites, deleteFromFavorites } = this.props;
        return(
            <>
                {favorites.length > 0
                    ?
                    <>
                        <MuiThemeProvider theme={theme}>
                            <Typography className={classes.h} component="h2" variant="h2">
                                List of your favorites
                            </Typography>
                        </MuiThemeProvider>
                        <div className={classes.root}>
                            {favorites.map((item, id) => {
                                const i = item.image[4];
                                const val = Object.values(i)[0];
                                return (
                                    <Card key={id} className={classes.card}>
                                        <CardHeader
                                            avatar={
                                                <Avatar aria-label="Recipe" className={classes.avatar}>
                                                    {item.name[0]}
                                                </Avatar>
                                            }
                                            action={
                                                <IconButton aria-label="Delete from favorites"
                                                            onClick={() => deleteFromFavorites(item.name)}>
                                                    <Favorite color='error'/>
                                                </IconButton>
                                            }
                                            title={item.name}
                                            subheader={`Listeners: ${item.listeners}`}
                                        />
                                        <Link to={`/artist/${item.name.toLowerCase()}`}>
                                            <CardMedia
                                                className={classes.media}
                                                image={val}
                                                title={item.name}
                                            />
                                        </Link>
                                        <Typography className={classes.h} variant="subtitle1">
                                            Similar artists
                                        </Typography>
                                        <Similar similar={item.similarArtists}/>
                                    </Card>)
                            })}
                        </div>
                    </>
                    :
                    <MuiThemeProvider theme={theme}>
                        <Typography className={classes.h} component="h2" variant="h2">
                            No favorites yet
                        </Typography>
                    </MuiThemeProvider>
                }
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        favorites: state.favorites
    }
}

const mapDispatchToProps = dispatch => ({
    addToFavorites: (id) => dispatch(ACTIONS.addToFavorites(id)),
    deleteFromFavorites: (name) => dispatch(ACTIONS.deleteFromFavorites(name)),
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Favorites))
