'use strict';
var React = require('./React');
var {Component, ListView, Text, StyleSheet, PropTypes} = React;

var SearchListItem = require('./SearchListItem');

class SearchList extends Component {
	
  	constructor(props) {
    	super(props);
    	this.state = {
    		dataSource: new ListView.DataSource({
    			rowHasChanged: (row1, row2) => row1 !== row2,
    		})
    	};
  	}

  	// mount
  	componentWillMount(){
  	}
  	componentDidMount(){}

  	// update
  	componentWillReceiveProps(props){
        
    }
  	//shouldComponentUpdate(){}
  	componentWillUpdate(){}
  	componentDidUpdate(){}

  	// unmount
  	componentWillUnmount(){}


  	renderRow(rowData) {
  		return (
  			<SearchListItem book={rowData} />
  		);
  	}

  	render() {

  		return (
  			<ListView dataSource={this.state.dataSource.cloneWithRows(this.props.dataSource)}
  				renderRow={this.renderRow} />
  		);
  	}
};

module.exports = SearchList;