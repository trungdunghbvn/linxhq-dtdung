import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, Button, TextInput, ActivityIndicator, ScrollView, FlatList, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { addCount, getListVideo, changeVideo, changeLike, changeCloseLike } from '../actions';
import Video from 'react-native-video';
import { createFilter } from 'react-native-search-filter';
class Container extends Component {
    constructor(props) {
        super(props);
        this.props.getListVideo();
        this.state = {
            selectedItems: [],
            load: true,
            search: ''
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
                <TouchableHighlight style={{ flex: 20 }} onPress={() => navigation.navigate('Account')}>
                    <Image
                        style={{ width: 40, height: 40 }}
                        source={require('../assets/images/user.png')}
                    />
                </TouchableHighlight>
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
        this.setState({ search: text })
    }
    test1234 = () => {
        console.log('test')
    }
    viewVideo = (active) => {
        this.props.changeVideo(active)
        this.props.navigation.navigate('Detail')
    }

    checkLike = (item) => {
        if (this.props.searchReducer.email === '') {
            return <Text></Text>
        } else {
            if (this.props.searchReducer.like.indexOf(item) >= 0) {
                return (
                    <TouchableHighlight style={{ marginTop: 0, marginLeft: 10 }}
                        onPress={() => this.props.changeCloseLike(item)}
                    >
                        <Image
                            style={{ width: 15, height: 15, marginTop: 2, marginRight: 5 }}
                            source={require('../assets/images/like.png')}
                        />
                    </TouchableHighlight>
                )
            } else {
                return (
                    <TouchableHighlight style={{ marginTop: 0, marginLeft: 10 }}
                        onPress={() => this.props.changeLike(item)}
                    >
                        <Image
                            style={{ width: 15, height: 15, marginTop: 2, marginRight: 5 }}
                            source={require('../assets/images/close-like.png')}
                        />
                    </TouchableHighlight>
                )
            }
        }
    }
    render() {
        const { listVideo } = this.props.searchReducer;
        const filteredVideo = listVideo.filter(createFilter(this.state.search, ['name']))
        return (
            // <ScrollView>
            <FlatList
                data={filteredVideo}
                keyExtractor={(item, index) => item.id}
                renderItem={({ item, index }) => {
                    return (
                        <View key={item.id} style={{ borderBottomWidth: 1, borderBottomColor: '#e1e2e1', padding: 10 }}>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <TouchableHighlight style={{ flex: 50 }} onPress={() => this.viewVideo(item)}>
                                    <Image
                                        style={{ width: 169, height: 94 }}
                                        source={{ uri: item.image }}
                                    />
                                </TouchableHighlight>
                                <View style={{ flex: 50, paddingLeft: 10 }}>
                                    <Text>{item.name}</Text>
                                    <Text>{item.Describe}</Text>
                                    <View style={{ flex: 1, flexDirection: 'row' }}>
                                        <View style={{ flex: 1, flexDirection: 'row', marginTop: 10 }}>
                                            <Image
                                                style={{ width: 15, height: 15, marginTop: 2, marginRight: 5 }}
                                                source={require('../assets/images/clock.png')}
                                            />
                                            <Text>{item.time}</Text>
                                            {this.checkLike(item)}
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
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
    getListVideo: () => dispatch(getListVideo()),
    changeVideo: (data) => dispatch(changeVideo(data)),
    changeLike: (video) => dispatch(changeLike(video)),
    changeCloseLike: (video) => dispatch(changeCloseLike(video)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
