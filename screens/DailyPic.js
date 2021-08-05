import React, { Component } from 'react';
import { Alert, ImageBackground, Linking, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import axios from 'axios'

export default class DailyPicScreen extends Component {

    constructor(props){
        super(props);
        this.state={
            apod: {},
        };
    }

    componentDidMount(){
        this.getAPOD();
    }

    getAPOD = () => {
        axios
        .get("https://api.nasa.gov/planetary/apod?api_key=mlZ4MG6LlMfwRhHFzTpfDi1qVgs32xrVYH0u1I9U")
        .then(response => {
            this.setState({
                apod: response.data
            })
            .catch(error => {
                Alert.alert(error.message)
            })
        })
    }

    render(){
        return (
            <View>
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground
                    source={require('../assets/bg.png')}
                    style={styles.ImageBackground}>

                        <Text style={styles.routeText}>Astronomy Picture of the day</Text>
                        <Text style={styles.titleText}>{this.state.apod.title}</Text>

                        <TouchableOpacity
                            style={styles.infocontainer}
                            onPress={() => {
                                Linking.openURL(this.state.apod.url).catch(err => console.error("Couldn't load Page", err))
                            }}>
                                <View>
                                    <Image source={require("../assets/anstronomy.png")} style={{width:50, height:50}}></Image>
                                </View>
                            </TouchableOpacity>

                            <Text style={{flex:1, color:"white", alignItems:'center'}}>{this.state.apod.explanation}</Text>

                    </ImageBackground>

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
         padding: 30 ,
         infoText: { fontSize: 15, color: "black", fontWeight: "bold" }
    },
    routeText:{
        fontSize: 35,
        fontWeight: "bold",
        color: "black",
        marginTop: 75,
        paddingLeft: 30
    },
})