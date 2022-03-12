import React, { Component } from 'react';

import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

class List extends Component{

    constructor(props){
        super(props);
        this.state = {
          feed: this.props.data
        }
        this.showLikes = this.showLikes.bind(this);
        this.like = this.like.bind(this);
        this.loadIcon = this.loadIcon.bind(this);
      }

      loadIcon(liked) {
          return liked ? require('../img/liked.png') : require('../img/like.png');
      }

      like() {
          let feed = this.state.feed;

          if(feed.liked === true){
              this.setState({
                  feed: {
                      ...feed,
                      liked: false,
                      likers: feed.likers - 1
                  }
              });
          }else{
            this.setState({
                feed: {
                    ...feed,
                    liked: true,
                    likers: feed.likers + 1
                }
            });
          }
      }

      showLikes(likers){
          let feed = this.state.feed;

          if(feed.likers <= 0) {
              return
          }

          return (
              <Text style={styles.likes}>
                  {feed.likers} {feed.likers > 1 ? 'curtidas' : 'curtida'}
              </Text>
          )
      }
      

    render() {
        return(
            <View style={styles.areaFeed}>
                
                <View style={styles.profileView}>
                    <Image
                        source={{uri: this.state.feed.profileImage}}
                        style={styles.profilePhoto}
                    />
                
                <Text style={styles.userName}> {this.state.feed.name} </Text>
                </View>

                <Image
                resizeMode='cover'
                    style={styles.postPhoto}
                    source={{uri: this.state.feed.postImage}}
                />

                <View style={styles.areaBtn}>
                    <TouchableOpacity onPress={this.like}>
                        <Image
                            source={this.loadIcon(this.state.feed.liked)}
                            style={styles.iconLike}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnSend}>
                        <Image
                            source={require('../img/send.png')}
                            style={styles.iconLike}
                        />
                    </TouchableOpacity>
                </View>

                {this.showLikes(this.state.feed.likers)}

                <View style={styles.footerView}>
                    <Text style={styles.footerName}>
                        {this.state.feed.name}
                    </Text>

                    <Text style={styles.footerDescription}>
                        {this.state.feed.description}
                    </Text>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    areaFeed: {

    },
    userName: {
        fontSize: 22,
        textAlign: 'left',
        color: '#000000',
    },
    profilePhoto: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    profileView: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        padding: 8
    },
    postPhoto: {
        flex: 1,
        height: 400,
        alignItems: 'center'
    },  
    areaBtn: {
        flexDirection: 'row',
        padding: 5
    },
    iconLike: {
        width: 33,
        height: 33
    },
    btnSend: {
        paddingLeft: 5
    },
    footerView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    footerDescription: {
        paddingLeft: 5,
        fontSize: 15,
        color: '#000'
    },
    footerName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        paddingLeft: 5
    },
    likes: {
        fontWeight: 'bold',
        marginLeft: 5
    }
});

export default List;