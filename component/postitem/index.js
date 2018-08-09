import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions,TouchableOpacity } from 'react-native';
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

        imagesSource = 'http://investorsukses.com/content/uploads/' + this.props.image;

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
                <View style={styles.container}>
                    <Text style={{ flex:1 }}>{'http://investorsukses.com/content/uploads/'+this.props.image}</Text>

                    <TouchableOpacity
                        onPress={() => {
                            this.setState({
                                isImageViewVisible: true,
                            });
                        }}
                    >
                        <Image
                        source={{uri: 'http://investorsukses.com/content/uploads/'+this.props.image}}
                        resizeMode= "contain"
                        style={styles.canvas}
                        />
                    </TouchableOpacity>

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
    container: {
        backgroundColor: '#F5FCFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    canvas: {
        width: 320,
        height: 250
    },
});

export default PostItem;