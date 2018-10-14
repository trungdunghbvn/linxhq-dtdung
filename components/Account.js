import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, Button, TextInput, ActivityIndicator, ScrollView, FlatList, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { addCount, getToken, changeCloseLike, changeVideo } from '../actions';
import Expo from 'expo'

const id = '173524459922759';
class Account extends Component {
  test = () => {
    this.props.addCounts();
  }
  login = async () => {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(id, {
      permissions: ['public_profile', 'email'],
    });
    if (type === 'success') {
      // Get the user's name using Facebook's Graph API
      this.props.getToken(token)
    }
  }
  viewVideo = (item) => {
    this.props.changeVideo(active)
    this.props.navigation.navigate('Detail')
  }
  listVideoLike = () => {
    const { like } = this.props.searchReducer;
    if (like.length > 0) {
      return (
        <FlatList
          data={like}
          keyExtractor={(item, index) => item.id}
          renderItem={({ item, index }) => {
            return (
              <View key={item.id} style={{ borderBottomWidth: 1, borderBottomColor: '#e1e2e1', padding: 10 }}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                  <TouchableHighlight style={{ flex: 30 }} onPress={() => this.viewVideo(item)}>
                    <Image
                      style={{ width: 110, height: 61 }}
                      source={{ uri: item.image }}
                    />
                  </TouchableHighlight>
                  <View style={{ flex: 70, paddingLeft: 10 }}>
                    <Text>{item.name}</Text>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                      <View style={{ flex: 1, flexDirection: 'row', marginTop: 10 }}>
                        <Image
                          style={{ width: 15, height: 15, marginTop: 2, marginRight: 5 }}
                          source={require('../assets/images/clock.png')}
                        />
                        <Text>{item.time}</Text>
                        <TouchableHighlight style={{ marginTop: 0, marginLeft: 10 }}
                          onPress={() => this.props.changeCloseLike(item)}
                        >
                          <Image
                            style={{ width: 15, height: 15, marginTop: 2, marginRight: 5 }}
                            source={require('../assets/images/like.png')}
                          />
                        </TouchableHighlight>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            );
          }}
        >
        </FlatList>
      )
    }
  }
  render() {
    console.log(this.props.searchReducer.email)
    return (
      <View style={{ flex: 1 }}>
        {(() => {
          if (this.props.searchReducer.email === '') {
            return (
              <View style={style.container}>
                <TouchableHighlight onPress={() => this.login()}>
                  <View style={{ width: '50%', borderRadius: 4, padding: 24, backgroundColor: '#29487d' }}>
                    <Text style={{ color: '#fff' }}>Login Facebook</Text>
                  </View>
                </TouchableHighlight>
              </View>
            )
          } else {
            return (
              <View>
                <View>
                  <Text>Name: {this.props.searchReducer.name}</Text>
                  <Text>Email: {this.props.searchReducer.email}</Text>
                </View>
                <View style={{ marginTop: 10, alignItems: 'center' }}>
                  <Text>
                    Danh sách video đã thích.
                    </Text>
                </View>
                {this.listVideoLike()}
              </View>
            )
          }
        })()}
      </View>
    );
  }
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

const mapStateToProps = state => ({
  searchReducer: state.searchReducer
});
const mapDispatchToProps = dispatch => ({
  addCounts: () => dispatch(addCount()),
  getToken: (data) => dispatch(getToken(data)),
  changeCloseLike: (video) => dispatch(changeCloseLike(video)),
  changeVideo: (video) => dispatch(changeVideo(video)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);
