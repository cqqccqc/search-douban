'use strict';
var React = require('./React');
var {Component, Text, TextInput, StyleSheet, PropTypes} = React;

class SearchInput extends Component {
	constructor(props) {
    	super(props);
    	this.state = {
    		searchText: ''
    	};
	}

	render() {
		return (
			<TextInput
				style={styles.input}
			    onChangeText={this.fillInput.bind(this)}
			    value={this.state.searchText} />
		);
	}

	fillInput(text){
		this.setState({searchText: text});
		this.props.onChange(text);
	}

}

var styles = StyleSheet.create({
	input: {
		height: 40, 
		borderColor: 'gray', 
		borderWidth: 1
	}
});

module.exports = SearchInput;