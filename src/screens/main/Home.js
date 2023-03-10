import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Mainheader from '../../components/Mainheader'
import Colors from '../../utilities/Colors'
const Home = () => {
  return (
    <View style={{ backgroundColor: Colors.white, height: "100%" }}>
      <Mainheader />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})