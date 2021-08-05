import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ImageBackground,
    StatusBar,
    SafeAreaView,
    Image,
    Alert,
    Platform,
    TextInput
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import axios from "axios";

export default class IssLocationScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude:'',
            longitude:'',
        };
    }

    componentDidMount() {
        this.starMap()
    }

    starMap = () => {
        const {longitude, latitude} = this.state;
        const path = 'https://virtualsky.lco.global/embed/index.html?longitude=${longitude}&latitude=${latitude}&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true'
    }

    render(){
        return(
            <View style={styles.container}>

                    <SafeAreaView style={styles.droidSafeArea} />
                    <ImageBackground source={require('../assets/bg.png')} style={styles.backgroundImage} />

                        <View style={styles.titleContainer}>
                            <Text style={styles.titleText}>ISS Location</Text>
                        </View>

                        <WebView
                           scalesPageToFit={true}
                           source={{uri:path}}
                           style={{marginTop:20,marginBotton:20}}
                        />

                        <TextInput
                            style={{height:40, borderColor: 'gray', borderWidth: 1}}
                            placeholder="Enter your Latitude"
                            placeholderTextColor="#ffff#000000"
                            onChangeText={(text)=>{
                                this.setState({
                                    latitude: text
                                })
                            }}
                            />

                        <TextInput
                            style={{height:40, borderColor: 'gray', borderWidth: 1}}
                            placeholder="Enter your Latitude"
                            placeholderTextColor="#ffff#000000"
                            onChangeText={(text1)=>{
                                this.setState({
                                    longitude: text1
                                })
                            }}
                            />

            </View>
        )
    }
    }


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    titleContainer: {
        flex: 0.1,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white"
    },
    mapContainer: {
        flex: 0.7
    },
    map: {
        width: "100%",
        height: "100%"
    },
    infoContainer: { flex: 0.2,
         backgroundColor: 'white',
         marginTop: -10,
         borderTopLeftRadius: 30,
         borderTopRightRadius: 30,
         padding: 30 },
         infoText: { fontSize: 15, color: "black", fontWeight: "bold" }
})