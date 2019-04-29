import React, { Component } from 'react'
import { Text, View, Animated, TouchableOpacity } from 'react-native'

export default class EzSnackbar extends Component {
  constructor (props) {
    super(props)
    this.animatedValue = new Animated.Value(0)
    this.timeout = 0
    this.state = {
      message: '',
      actionName: ''
    }
  }

  callWithAction (message, actionName, type, duration, callback) {
    for (let a = 2; a < arguments.length; a++) {
      if (typeof arguments[a] === 'function') {
        callback = arguments[a]
      } else if (typeof arguments[a] === 'number') {
        duration = arguments[a]
      }
    }
    this.setType(message, type, actionName)
    this.start(duration, callback)
  }

  call (message, type, duration, callback) {
    for (let a = 1; a < arguments.length; a++) {
      if (typeof arguments[a] === 'function') {
        callback = arguments[a]
      } else if (typeof arguments[a] === 'number') {
        duration = arguments[a]
      }
    }
    this.setType(message, type)
    this.start(duration, callback)
  }

  setType (message, type, actionName) {
    let color = '#555761'
    switch (type) {
      case 'error': color = '#D32F2F'; break
      case 'warning': color = '#FBC02D'; break
      case 'success': color = '#388E3C'; break
    }
    this.setState({ snackbarColor: color, message: message, actionName: actionName })
  }

  start (duration, callback) {
    this.animatedValue = new Animated.Value(0)
    clearTimeout(this.timeout)
    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: 700
      }).start(this.close(duration, callback))
  }

  close (duration, callback) {
    this.timeout = setTimeout(() => {
      Animated.timing(
        this.animatedValue,
        {
          toValue: 0,
          duration: 600
        }).start(() => {
        callback && callback()
      })
    }, 2500 || duration)
  }

  shouldComponentUpdate () {
    if (this.animatedValue._animation) {
      return true
    }
    return false
  }

  render () {
    const { snackbarColor, actionName } = this.state
    const { style } = this.props
    let animation = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -40]
    })
    return (
      <View>
        <Animated.View style={[{ transform: [{ translateY: animation }], height: 40, paddingTop: 4, backgroundColor: snackbarColor, position: 'absolute', left: 0, bottom: -40, right: 0, justifyContent: 'center', flexDirection: 'row', elevation: 99 }, style]}>
          <Text style={{ fontFamily: 'Quicksand-Regular', padding: 5, color: 'white', fontSize: 16 }}>
            { this.state.message }
          </Text>
          {actionName
            ? <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => this.props.actionHandler()}>
              <View>
                <Text style={{ fontFamily: 'Quicksand-Regular', padding: 5, color: '#FF7F45', fontSize: 18 }}>
                  { this.state.actionName }
                </Text>
              </View>
            </TouchableOpacity>
            : null
          }
        </Animated.View>
      </View>
    )
  }
}