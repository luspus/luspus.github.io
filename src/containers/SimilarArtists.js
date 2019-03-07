import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Favorite from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import 'typeface-roboto';
import ACTIONS from '../actions/';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
        textDecoration: 'none'
    },
    listItem: {
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid #ececec'
    }
});

class Similar extends Component {
    render () {
        const { classes, similar, getSimilar, addToFavorites, deleteFromFavorites, favorites } = this.props;
        return(
            <List className={classes.root}>
                {similar.map((item, id) => {
                    const i = item.image[4];
                    const val = Object.values(i)[0];
                    const isInFavorites = favorites.find(i => i.name === item.name);
                    return (
                        <ListItem className={classes.listItem} key={id} alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt={item.name} src={val} />
                            </ListItemAvatar>
                            <ListItemText
                                secondary={
                                    <Link className={classes.inline} to={`/artist/${item.name.toLowerCase()}`}>
                                        <Typography component="span" className={classes.inline} color="textPrimary">
                                            {item.name}
                                        </Typography>
                                    </Link>
                                }
                            />
                            {/*unfinished*/false && isInFavorites
                                ?
                                    <IconButton className={classes.icons} aria-label="Delete from favorites"
                                                onClick={() => deleteFromFavorites(item.name)}>
                                        <Favorite color='error' />
                                    </IconButton>
                                :
                                    <IconButton className={classes.icons} aria-label="Add from favorites"
                                                onClick={() => {
                                                    addToFavorites(item.name);
                                                    getSimilar(item.name) }}>
                                        <Favorite color='disabled'/>
                                    </IconButton>
                                }
                        </ListItem>
                    )
                })}
            </List>
        )
    }
}

const mapStateToProps = state => {
    return {
        favorites: state.favorites
    };
}

const mapDispatchToProps = dispatch => ({
    addToFavorites: (id) => dispatch(ACTIONS.addToFavorites(id)),
    deleteFromFavorites: (name) => dispatch(ACTIONS.deleteFromFavorites(name)),
    getSimilar: name => dispatch(ACTIONS.getSimilar(name)),
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Similar))
