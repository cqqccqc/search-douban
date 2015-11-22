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
		  			<Text style={styles.author} >
		  				{this.props.book.author.map(item => item)}
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
		alignItems: 'center',
		width:
		borderTopWidth: 1,
		borderTopColor: 'grey',
		borderBottomWidth: 1,
		borderBottomColor: 'grey',
		paddingBottom: 10,
		paddingTop: 10,
		marginBottom: 10
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
	},
	author: {
		textAlign: 'center'
	}
});
module.exports = SearchListItem