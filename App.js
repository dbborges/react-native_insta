import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList
} from 'react-native';
import List from './src/List';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      feed: [
        {
          id: '1', 
          name: 'Lucas Silva', 
          description: 'Mais um dia de muitos bugs :)', 
          profileImage: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
          postImage: 'https://sujeitoprogramador.com/instareact/foto1.png',  
          liked: false, 
          likers: 0
         },
        {
          id: '2', 
          name: 'Matheus', 
          description: 'Isso sim é ser raiz!!!!!', 
          profileImage: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
          postImage: 'https://sujeitoprogramador.com/instareact/foto2.png', 
          liked: false, 
          likers: 0
        },
        {
          id: '3', 
          name: 'Jose Augusto', 
          description: 'Bora trabalhar Haha', 
          profileImage: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png', 
          postImage: 'https://sujeitoprogramador.com/instareact/foto3.png',  
          liked: false, 
          likers: 3
        },
        {
          id: '4', 
          name: 'Gustavo Henrique', 
          description: 'Isso sim que é TI!', 
          profileImage: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
          postImage: 'https://sujeitoprogramador.com/instareact/foto4.png', 
          liked: false, 
          likers: 1
        },
        {
          id: '5', 
          name: 'Guilherme', 
          description: 'Boa tarde galera do insta...', 
          profileImage: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
          postImage: 'https://sujeitoprogramador.com/instareact/foto5.png',
          liked: false, 
          likers: 32
        }
      ]
    };
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <TouchableOpacity>
            <Image
              source={require('./src/img/logo.png')}
              style={styles.logo}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={require('./src/img/send.png')}
              style={styles.send}
            />
          </TouchableOpacity>
        </View>

        <FlatList 
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          data={this.state.feed}
          renderItem={ ({item}) => <List data={item} /> }
        />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 55,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,

    borderBottomWidth: 0.2,
    shadowColor: '#000',
    elevation: 1

  },
  logo: {

  },
  send: {
    width: 23,
    height: 23
  }
});

export default App;
