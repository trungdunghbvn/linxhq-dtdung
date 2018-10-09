import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { addCount } from '../actions';
import { Video } from 'expo';

class Account extends Component {
    test = () => {
        this.props.addCounts();
    }
    render() {
        return (
            <View style={styles.container}>
                <Video
                    source={{uri: this.props.searchReducer.videoActive.link}}
                    shouldPlay
                    resizeMode="cover"
                    style={styles.backgroundVideo}
                />
            </View>
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
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
});

const mapStateToProps = state => ({
    searchReducer: state.searchReducer
});
const mapDispatchToProps = dispatch => ({
    addCounts: () => dispatch(addCount()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);
