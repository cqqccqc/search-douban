'use strict';
var React = require('react-native');
var {
	Component,
	StyleSheet,
	View,
	Text,
	ListView
} = React;

var rows = [0,1,2,3];

class SearchList extends Component {

	

  	constructor(props) {
    	super(props);
    	this.state = {
    		dataSource: new ListView.DataSource({
    			rowHasChanged: (row1, row2) => row1 !== row2,
    		}),
    	};
  	}

  	// mount
  	componentWillMount(){
  		this.fetchData();
  	}
  	componentDidMount(){}

  	// update
  	componentWillReceiveProps(){}
  	shouldComponentUpdate(){}
  	componentWillUpdate(){}
  	componentDidUpdate(){}

  	// unmount
  	componentWillUnmount(){}


  	fetchData() {
  		this.setState({
  			dataSource: this.state.dataSource.cloneWithRows(rows)
  		});
  	}

  	renderRow() {
  		return (
  			<Text>aaa</Text>
  		);
  	}

  	render() {

  		return (
  			<ListView dataSource={this.state.dataSource}
  				renderRow={this.renderRow} />
  		);
  	}
};

module.exports = SearchList;