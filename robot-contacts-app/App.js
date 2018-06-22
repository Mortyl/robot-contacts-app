import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import List from './Screens/List'
import Detail from './Screens/Detail'

const RootNavigator = createStackNavigator({
  List: List,
  Detail: Detail
});

export default RootNavigator
