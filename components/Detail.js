import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, Dimensions } from 'react-native';
import { addCount } from '../actions';
import { Video } from 'expo';
import video1 from '../assets/videos/video1.mp4';
import video2 from '../assets/videos/video2.mp4';
import video3 from '../assets/videos/video3.mp4';
import video4 from '../assets/videos/video4.mp4';
import video5 from '../assets/videos/video5.mp4';
import video6 from '../assets/videos/video6.mp4';
import video7 from '../assets/videos/video7.mp4';
import video8 from '../assets/videos/video8.mp4';
import video9 from '../assets/videos/video9.mp4';
import video10 from '../assets/videos/video10.mp4';

class Account extends Component {
    test = () => {
        this.props.addCounts();
    }
    onLayout = (e) => {
        console.log('test')
    }
    render() {
        let video = { video1 };
        switch (this.props.searchReducer.videoActive.link) {
            case 'video2.mp4':
                video = video2
                break;
            case 'video3.mp4':
                video = video3
                break;
            case 'video4.mp4':
                video = video4
                break;
            case 'video5.mp4':
                video = video5
                break;
            case 'video6.mp4':
                video = video6
                break;
            case 'video7.mp4':
                video = video7
                break;
            case 'video8.mp4':
                video = video8
                break;
            case 'video9.mp4':
                video = video9
                break;
            case 'video10.mp4':
                video = video10
                break;
            default:
                video = video1
        }
        return (
            <View style={styles.container} onLayout={() => this.onLayout()}>
                {(() => {
                    if (this.props.searchReducer.videoActive.link) {
                        return (
                            <Video
                                source={video}
                                shouldPlay
                                resizeMode={Expo.Video.RESIZE_MODE_CONTAIN}
                                style={styles.backgroundVideo}
                                isPortrait={true}
                                playFromPositionMillis={0}
                                fullscreenUpdate={Expo.Video.FULLSCREEN_UPDATE_PLAYER_WILL_PRESENT}
                                useNativeControls={true}
                            />
                        )
                    }
                })()}
            </View>
        );
    }
}
var styles = StyleSheet.create({
    backgroundVideo: {
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        flex: 1,
    },
    container: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        flex: 1,
    },
});

const mapStateToProps = state => ({
    searchReducer: state.searchReducer
});
const mapDispatchToProps = dispatch => ({
    addCounts: () => dispatch(addCount()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);
