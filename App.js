import React, { Component } from 'react'
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native'

export default class App extends Component {

  state = {
    students: [
      { name: "Michael Newman" },
      { name: "Miek De La Rosa" },
      { name: "Nolan Dyke" },
      { name: "Dave Fertitta" },
    ]
  }

  showStudents = () => this.state.students.map(student => (
    <Text style={styles.font}> {student.name} </Text>
  ))

  render() {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Text>Some random text.</Text>
        <View style={styles.student}>
          {this.showStudents()}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  student: {

  },
  fonts: {
    fontSize: 16,
    color: "blue"
  }
})
