import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class PostItem extends React.Component{

    constructor(props) {
        super(props);
    }
    render(){
        return(
            <View>
                <View>
                    <Text>{this.props.image}</Text>
                    <Image
                        source={{uri: 'http://investorsukses.com/content/uploads/'+this.props.image}}
                        style={{width: 'auto', height: 250}}/>

                </View>
            </View>
        );
    }

}

export default PostItem;