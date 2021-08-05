import React, { Component } from 'react';
import { FlatList, Text, View } from 'react-native';
import axios from 'axios'


export default class SpaceCraftsScreen extends Component {

    constructor(props){
        super(props);
        this.state={
            aircrafts:{}
        }
    }

    componentDidMount(){
        this.getdata();
    }

    getdata = () => {
        axios
        .get("https://ll.thespacedevs.com/2.0.0/config/spacecraft/")
        .then(response => {
            this.setState({aircrafts: response.data.results})
            console.log(response.data.results)
        })
        .catch(error => {
            console.log(error.message)
        })
    }

    renderItem = ({item}) => {
        <View styles={styles.con1}>
            <Image
                source = {{uri: item.agency.image_url}} style={styles.img}
            ></Image>

            <Text style={styles.t1}>{item.name}</Text>
            <Text style={styles.t2}>{item.agency.name}</Text>
            <Text>DESCRIPTION</Text>
            <Text style={styles.t3}>{item.agency.description}</Text>
        </View>
    }

    render() {
        return (
            <View style={styles.con2}>
                <View style={{flex:0.25}}>
                    <Text>Space Crafts</Text>
                </View>
                <View style={{fles:0.75}}>
                    <FlatList 
                        keyExtractor = {this.keyExtractor}
                        data = {this.state.aircrafts}
                        renderItem = {this.renderItem}
                    />
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    con1:{
        borderWidth:1, 
        justifyContent:'center', 
        alignItems:'center', 
        marginBottom:10, 
        elevation:10
    },
    img:{
        width:"100%", 
        height:200, 
        marginTop:15, 
        marginBottom:15,
        marginRight:10
    },
    t1:{
        fontWeight:'bold',
        fontSize:20
    },
    t2:{
        color:'#696969'
    },
    t3:{
        color:'#A9A9A9',
        marginLeft:10, 
        marginRight:10
    },
    con2:{
        flex:1, 
        justifyContent:"center", 
        alignItems:"center"
    },
})