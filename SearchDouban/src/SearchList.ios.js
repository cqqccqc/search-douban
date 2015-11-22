'use strict';
var React = require('./React');
var {Component, ListView, Text, StyleSheet, PropTypes} = React;

var SearchListItem = require('./SearchListItem');

var ds = new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            });

class SearchList extends Component {
	
  	constructor(props) {
    	super(props);
    	
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
  			<ListView dataSource={ds.cloneWithRows(this.props.dataSource)}
  				renderRow={this.renderRow} />
  		);
  	}
};
var styles = StyleSheet.create({
    
});

module.exports = SearchList;