import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, Button, TextInput, ActivityIndicator, ScrollView, FlatList, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { addCount, changeSearchVideo, changeVideo } from '../actions';
import Video from 'react-native-video';

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
        this.props.changeSearchVideo(text)
    }
    test1234 = () => {
        console.log('test')
    }
    viewVideo = (active) => {
        this.props.changeVideo(active)
        this.props.navigation.navigate('Detail')
    }
    render() {
        const { navigation } = this.props;
        const { listVideo } = this.props.searchReducer;
        return (
            // <ScrollView>
            <FlatList
                onEndReachedThreshold={0}
                onEndReached={() => this.test1234()}
                data={listVideo}
                keyExtractor={(item, index) => item.id}
                renderItem={({ item, index }) => {
                    return (
                        <View key={item.id} style={{ borderBottomWidth: 1, borderBottomColor: '#e1e2e1', padding: 10 }}>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <TouchableHighlight onPress={() => this.viewVideo(item)}>
                                    <Image
                                        style={{ width: 169, height: 94 }}
                                        source={{ uri: item.image }}
                                    />
                                </TouchableHighlight>
                                <View style={{ flex: 50, paddingLeft: 10 }}>
                                    <Text>{item.name}</Text>
                                    <Text>{item.Describe}</Text>
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
    changeSearchVideo: (text) => dispatch(changeSearchVideo(text)),
    changeVideo: (data) => dispatch(changeVideo(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
