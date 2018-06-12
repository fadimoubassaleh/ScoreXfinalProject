import React from 'react'
import Autosuggest from 'react-autosuggest';
import AutosuggestHighlightMatch from "autosuggest-highlight/umd/match";
import AutosuggestHighlightParse from "autosuggest-highlight/umd/parse";
import './friendsInputSelect.css'



export default class FriendsInputSelect extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            suggestions: []
        };
    }
    onChange = (event, { newValue, method }) => {
        this.setState({ value: newValue }, function () {
            this.props.selectedPlayer(this.state.value)
        });
    };

    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: this.getSuggestions(value)
        });
    };

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    getSuggestions(value) {
        const escapedValue = this.escapeRegexCharacters(value.trim());

        if (escapedValue === '') {
            return [];
        }

        const regex = new RegExp('\\b' + escapedValue, 'i');

        return this.props.people.filter(person => regex.test(this.getSuggestionValue(person)));
    }
    escapeRegexCharacters(str) {
        return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }


    getSuggestionValue(suggestion) {
        return `${suggestion.first} ${suggestion.last}`;
    }

    renderSuggestion(suggestion, { query }) {
        const suggestionText = `${suggestion.first} ${suggestion.last}`;
        const matches = AutosuggestHighlightMatch(suggestionText, query);
        const parts = AutosuggestHighlightParse(suggestionText, matches);

        return (
            <span className={'suggestion-content ' + suggestion.twitter}>
                <span className="name">
                    {
                        parts.map((part, index) => {
                            const className = part.highlight ? 'highlight' : null;

                            return (
                                <span className={className} key={index}>{part.text}</span>
                            );
                        })
                    }
                </span>
            </span>
        );
    }
    render() {
        const { value, suggestions } = this.state;
        const inputProps = {
            placeholder: "select a friend",
            value,
            onChange: this.onChange
        };
        return (
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={this.getSuggestionValue}
                renderSuggestion={this.renderSuggestion}
                inputProps={inputProps} />
        )
    }
}