/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} = React;

var ReactAMole = React.createClass({
  getInitialState() {
    return {
      playerOneScore: 0,
      playerTwoScore: 0,
    }
  },
  render() {
    return (
      <View style={{flex: 1}}>
          <View style={{flex: 9, backgroundColor: 'red'}}>
          </View>
          <View style={{flex: .5, backgroundColor: 'green'}}>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 1}}>
                <Text style={styles.label1}>{'Player 1: ' + this.state.playerOneScore}</Text>
              </View>
              <View style={{flex: 1}}>
                <Text style={styles.label2}>{'Player 2: ' + this.state.playerTwoScore}</Text>
              </View>
            </View>
          </View>
          <View style={{flex: 9, backgroundColor: 'blue'}}>
            <TouchableWithoutFeedback onPress={() => this._pressed()}>
              <Image source={{uri: 'https://pixabay.com/static/uploads/photo/2013/07/13/10/12/mole-156762_640.png'}} style={{height:100, width:100}}/>
            </TouchableWithoutFeedback>
          </View>
      </View>
   );
  },
  _pressed () {
    this.setState({playerOneScore: ++this.state.playerOneScore})
    return React.cloneElement(this, {
        style: {opacity: 0}
    });
  }
});

var styles = StyleSheet.create({
  label1: {
    backgroundColor: 'yellow'
  },
  label2: {
    transform: [{rotate: '180deg'}],
    backgroundColor: 'orange'
  }
});

AppRegistry.registerComponent('ReactAMole', () => ReactAMole);
