var React = require('./React');
var {Component, View, Image, Text, StyleSheet, PropTypes} = React;

class SearchListItem extends Component {
	constructor(props) {
		super(props);
  	}

  	render() {
  		return (
  			<View style={styles.container}>
  				<Image source={{uri: this.props.book.image}} 
  					style={styles.thumbnail} />
  				<View style={styles.rightContainer}>
		  			<Text style={styles.title}>
		  				{this.props.book.title}
		  			</Text>
	  			</View>
  			</View>
  		);
  	}
}
var styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	rightContainer: {
		flex: 1
	},
	title: {
		fontSize: 20,
		marginBottom: 8,
		textAlign: 'center'
	},
	thumbnail: {
		width: 100,
		height: 148
	}
});
module.exports = SearchListItem