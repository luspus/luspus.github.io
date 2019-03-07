import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import ACTIONS from '../actions/';

function renderInputComponent(inputProps) {
    const { classes, inputRef = () => {}, ref, ...other } = inputProps;
    return (
        <TextField
            fullWidth
            InputProps={{
                inputRef: node => {
                ref(node);
                inputRef(node);
                },
                classes: {
                    input: classes.input,
                },
            }}
            {...other}
        />
    );
}

const renderSuggestion = (suggestion, { query, isHighlighted }) => {
    suggestion.label = suggestion.name;
    const matches = match(suggestion.label, query);
    const parts = parse(suggestion.label, matches);

    return (<MenuItem selected={isHighlighted} component="div">
              {parts.map((part, index) =>
                         part.highlight ? (
                             <span key={String(index)} style={{ fontWeight: 500 }}>
                                 {part.text}
                             </span>
                         ) : (
                             <strong key={String(index)} style={{ fontWeight: 300 }}>
                                 {part.text}
                             </strong>
                         ),
                        )}
            </MenuItem>);
};

function getSuggestionValue(suggestion) {
    return suggestion.label;
}

const styles = theme => ({
    root: {
        height: 40,
        width: '80%',
        flexGrow: 1,
        position: 'absolute'
    },
    container: {
        position: 'relative',
    },
    suggestionsContainerOpen: {
        position: 'absolute',
        height: 240,
        overflowY: 'scroll',
        zIndex: 1,
        marginTop: theme.spacing.unit,
        left: 0,
        right: 0,
    },
    suggestion: {
        display: 'block',
    },
    suggestionsList: {
        margin: 0,
        padding: 0,
        listStyleType: 'none',
    },
    divider: {
        height: theme.spacing.unit * 2,
    }
});

class IntegrationAutosuggest extends React.Component {
    state = {
        single: '',
        popper: '',
    }
    handleSuggestionsFetchRequested = ({ value }) => {}
    handleSuggestionsClearRequested = () => {}
    handleChange = name => (event, { newValue }) => {
    if (event.type === 'change') {
        this.props.onChange(newValue);
    }
    this.setState({
        [name]: newValue,
    })
  }
  render() {
        const { classes, suggestions, history, clearArtist } = this.props;
        const autosuggestProps = {
            renderInputComponent,
            suggestions: suggestions,
            onSuggestionsFetchRequested: this.handleSuggestionsFetchRequested,
            onSuggestionsClearRequested: this.handleSuggestionsClearRequested,
            getSuggestionValue,
            renderSuggestion,
            onSuggestionSelected: ((e, {suggestionValue}) => {
                history.push('/artist/' + suggestionValue);
                clearArtist();
            })
        };
        return (
            <div className={classes.root}>
                <Autosuggest
                {...autosuggestProps}
                inputProps={{
                    classes,
                    placeholder: 'Search an artist',
                    value: this.state.single,
                    onChange: this.handleChange('single'),
                }}
                theme={{
                    container: classes.container,
                    suggestionsContainerOpen: classes.suggestionsContainerOpen,
                    suggestionsList: classes.suggestionsList,
                    suggestion: classes.suggestion,
                }}
                renderSuggestionsContainer={options => (
                <Paper {...options.containerProps} square>
                    {options.children}
                </Paper>
                )}
                />
        </div>
    );
  }
}

const TheSupperAS =  withStyles(styles)(withRouter(IntegrationAutosuggest));

class SearchAutocomplete extends Component {
    render () {
        const { resultOfSearching, searchArtist, clearArtist } = this.props;
        return (
            <TheSupperAS
                onChange={(name) => searchArtist(name)}
                suggestions={resultOfSearching}
                clearArtist={clearArtist}
            />
        );
    }
}

const mapStateToProps = state => {
    return {
        resultOfSearching: state.resultOfSearching
    };
};

const mapDispatchToProps = dispatch => ({
    searchArtist: (artist) => dispatch(ACTIONS.searchArtist(artist)),
    clearArtist: () => dispatch(ACTIONS.clearArtist())
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchAutocomplete);
