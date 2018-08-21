import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions,TouchableOpacity,ActivityIndicator } from 'react-native';
import ImageView from 'react-native-image-view';

const {width} = Dimensions.get('window');
let images = [];
let imagesSource;

class PostItem extends React.Component{


    constructor(props) {
        super(props);
        this.state = {
            isImageViewVisible: false,
        }

        imagesSource = 'http://investorsukses.com/content/uploads/' + this.props.data.image;

        // console.log(this.props.data.image);

        images = [{
            source: {
                uri: imagesSource,
            },
            width: 1366,
            height: 768,
        }];
    }

    render(){
        return(
            <View style={{flex: 1}}>
                <View style={styles.containerPost}>

                    <View style={styles.containerText}>
                        <Text style={ styles.text }>{ this.props.data.text } { this.props.data.post_id }</Text>
                    </View>

                    <View style={styles.containerImage}>
                        <TouchableOpacity
                            onPress={() => {
                                this.setState({
                                    isImageViewVisible: true,
                                });
                            }}
                        >
                            <Image
                            source={{uri: 'http://investorsukses.com/content/uploads/'+ this.props.data.image}}
                            resizeMode= "contain"
                            style={styles.canvas}
                            />

                        </TouchableOpacity>
                    </View>
                    <ImageView
                        images={images}
                        imageIndex={0}
                        isVisible={this.state.isImageViewVisible}
                    />
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    containerPost: {
        backgroundColor: '#fff',
        paddingVertical: 5,
        paddingHorizontal: 10,
        // marginBottom: 10,
        // alignItems: 'center',
        flexDirection: 'column-reverse'
    },
    containerImage:{
        alignItems: 'center',
    },
    containerText:{
        // justifyContent: 'flex-start'
        alignItems: 'center'
    },
    canvas: {
        minWidth: 320,
        minHeight: 180
    },
    text:{
        color: '#000',
    }
});

export default PostItem;