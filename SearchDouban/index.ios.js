/**
 * Douban Search React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  TabBarIOS,
  Component,
  Text,
  View,
} = React;

var SearchList = require('./component/SearchList.js');

class SearchDouban extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
            searchListTab: true
        };
    }

    _renderList() {
        return (
            <SearchList />
        );
    }

    render() {
        return (
            <TabBarIOS
                tintColor="white"
                barTintColor="darkslateblue">
                <TabBarIOS.Item
                title="Blue Tab"
                systemIcon="bookmarks"
                selected={this.state.searchListTab}
                onPress={()=>{this.setState({searchListTab: true})}}>
                    {this._renderList()}
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }

}




AppRegistry.registerComponent('SearchDouban', () => SearchDouban);
