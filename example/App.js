/**
 * Sample React Native App
 *
 * adapted from App.js generated by the following command:
 *
 * react-native init example
 *
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import {} from 'react-native-verto';
import VertoView from 'react-native-verto/src/vertoView';

export default class App extends Component<{}> {
  state = {
    status: 'starting',
    message: '--'
  };

  render() {
    const username = '1001';
    const password = 'pr0c@ll'
    const webSocketHost = 'call.pronet.az';
    const port = '8082';

    const webSocket = {
      login: `${username}@${webSocketHost}`,
      password,
      url: `wss://${webSocketHost}:${port}`,
    };
    const deviceParams = {
      useMic: 'any',
      useSpeak: 'any',
      useCamera: 'any',
    }
    let vertoClient = new VertoClient()
    return (
      <View style={styles.container}>
        <VertoView vertoParams={{webSocket, deviceParams, remoteVideo: 'remote-video', localVideo: 'local-video',}} callbacks={{onNewCall: (call) => {
          setTimeout(() => {
            call.answer()
          }, 2000);
        }}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
