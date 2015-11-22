var React = require('./React');
var {Component, 
    StyleSheet, 
    AlertIOS,
    View, 
    TabBarIOS} = React;

var {SEARCH_BOOK} = require('./const');

var SearchList = require('./SearchList');
var SearchInput = require('./SearchInput');

class SearchDouban extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
            searchListTab: true, // tab item

            pageIndex: 0, // default 0
            //pageSize: 20, //default 20
            dataSource: [], // list row data
        };
    }

    searchBook(text){
        fetch(SEARCH_BOOK + '?q=' + text)
            .then((response) => response.json())
            .then((responseData) => {
                console.log(responseData)
                this.setState({
                    dataSource: responseData.books
                });
            });
    }

    _renderList() {
        
        return (
            <View style={styles.container}>
                <SearchInput onChange={this.searchBook.bind(this)} />
                <SearchList dataSource={this.state.dataSource} />
            </View>
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

var styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:20
    }
});

module.exports = SearchDouban;
