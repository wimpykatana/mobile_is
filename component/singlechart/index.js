import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions,TouchableOpacity,ActivityIndicator } from 'react-native';
import ImageView from 'react-native-image-view';

const {width} = Dimensions.get('window');
let images = [];
let imagesSource;

class SingleChart extends React.Component{


    constructor(props) {
        super(props);
        this.state = {
            isImageViewVisible: false,
        }

        this.updatedata = this.updatedata.bind(this)
    }

    componentDidMount(){
        // Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.LANDSCAPE);
    }

    updatedata = () =>{

        imagesSource = this.props.data;


    }

    render(){
        this.updatedata()
        return(
            <View style={{flex: 1}}>
                <View style={styles.containerPost}>


                    <View style={styles.containerImage}>
                        <TouchableOpacity
                            onPress={() => {
                                this.setState({
                                    isImageViewVisible: true,
                                });
                                // Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.LANDSCAPE);
                            }}
                        >
                            <Image
                            source={{uri:  imagesSource }}
                            resizeMode= "contain"
                            style={styles.canvas}
                            />

                        </TouchableOpacity>
                    </View>
                    <ImageView
                        key={imagesSource}
                        images={[{
                            source: {
                                uri: imagesSource,
                            },
                            width: 1366,
                            height: 768,
                        }]}
                        imageIndex={0}
                        isVisible={this.state.isImageViewVisible}
                        onClose={() => {
                            this.setState({
                                isImageViewVisible: false,
                            });
                            // Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.PORTRAIT);
                        }}
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

export default SingleChart;