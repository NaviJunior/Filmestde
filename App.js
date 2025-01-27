import React, {Componen} from 'react';
import {SafeAreaView,Text,Stylesheet, FlatList,} from 'react-native';
import api from './src/Services/Api';
import Filme from './src/Pages/Filme/index';

export default class App extends Component{

    constructor(props){
        super(props);
        this.state = {
          filmes: []  
        }
    }

    async componentDidMount(){
      const response = await api.get('/filmes');  
      this.setState({
        filmes: response.data
      });
    }

    render(){
        return(
            <SafeAreaView style={styles.container}>
             <FlatList
                data={this.state.filmes}
                keyExtractor={item => item.id}
                renderItem={({item}) => <Filme data={item} />}
             />
            </SafeAreaView>
        )
    }
}

const styles = Stylesheet.create({
    container:{
        flex: 1,
        backgroundColor: 'black'
    }
})