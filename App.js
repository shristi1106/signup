import React,{Component} from 'react';
import { Button, StyleSheet, Text, View , StatusBar} from 'react-native'

class App extends Component {
  state = {
    value : 0
  }
  incrementValue = () =>{
    this.setState({
      value : this.state.value + 1
    })
    
  }
  decrementValue = () =>{
    this.setState({
      value : this.state.value - 1
      
    })
    
  }


  render(){
    return (
      <View style={styles.container}>
        <Text style={{fontSize:60,marginBottom:10}}>{this.state.value}</Text>
        <StatusBar style="auto" />
        <View style={{flexDirection:'row'}}>
          <Button onPress={this.decrementValue} title="Decrease" />
          <Text>   </Text>
          <Button onPress={this.incrementValue} title="Increase" />
        </View>
      </View>
    );
  }
}

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
},
});