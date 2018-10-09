import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, Button, TextInput, ActivityIndicator, ScrollView, FlatList, StyleSheet, WebView } from 'react-native';
import { addCount, changeSearchVideo } from '../actions';
import Video from 'react-native-video';
// import { FlatList, ScrollView } from 'react-native-gesture-handler';
// import Button from 'react-native-button';

class FlatListVideo extends Component {
    render() {
        return (
            <View key={this.props.item.id} style={{ height: 200, borderWidth: 1 }}>
                <View style={{ flex: 50 }}>
                    <Text>{this.props.item.name}</Text>
                    <Text>{this.props.item.Describe}</Text>
                    <WebView
                        style={{ flex: 1 }}
                        javaScriptEnabled={true}
                        source={{ uri: 'https://www.youtube.com/embed/ZZ5LpwO-An4?rel=0&autoplay=0&showinfo=0&controls=0' }}
                    />
                </View>
            </View>
        )
    }
}

class Container extends Component {
    constructor(props) {
        super(props);
        this.props.changeSearchVideo();
        this.state = {
            selectedItems: [],
            load: true
        };
    }

    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        let headerTitle = (
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <TextInput style={{ flex: 80, borderColor: 'red', paddingLeft: 5, marginLeft: 5, borderWidth: 1, borderColor: '#e1e2e1', borderRadius: 5, marginRight: 10 }}
                    underlineColorAndroid='transparent'
                    placeholder="Search"
                    onChangeText={(text) => params.onChangeSearch(text)}
                />
                <Button
                    style={{ flex: 20 }}
                    title="Login"
                    onPress={() => navigation.navigate('Account')}
                />
            </View>
        );
        return { headerTitle }
    }
    componentDidMount() {
        this.props.navigation.setParams({
            onChangeSearch: (text) => this.setChangeSearch(text),
        });
    }
    setChangeSearch = (text) => {
        this.props.changeSearchVideo(text)
    }
    test12 = () => {
        console.log('eeeeee')
    }
    test = () => {
        this.props.addCounts();
    }
    test123 =()=>{
        console.log('hello');
        this.setState({load: true})
    }
    test1234=()=>{
        console.log('test')
    }
    render() {
        const { navigation } = this.props;
        const { listVideo } = this.props.searchReducer;
        return (
            // <ScrollView>
                <FlatList
                    refreshing={this.state.load}
                    onRefresh={()=>this.test123()}
                    onEndReachedThreshold={0}
                    onEndReached={()=>this.test1234()}
                    data={listVideo}
                    keyExtractor={(item, index) => item.id}
                    renderItem={({ item, index }) => {
                        return (
                            <FlatListVideo item={item} index={index} />
                        );
                    }}
                >
                </FlatList>
            // </ScrollView>
        );
    }
}
var styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});
const mapStateToProps = state => ({
    searchReducer: state.searchReducer
});
const mapDispatchToProps = dispatch => ({
    addCounts: () => dispatch(addCount()),
    changeSearchVideo: (text) => dispatch(changeSearchVideo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
