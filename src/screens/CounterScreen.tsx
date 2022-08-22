import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Fab } from '../components/Fab';

export const CounterScreen = () => {

    const [counter, setcounter] = useState(10);

    return (
        <View style={ styles.container }>  
            <Text style={ styles.title }>
                Counter: { counter }
            </Text>
            <Fab
                title="-1"
                position= 'bl' 
                onPress={() => setcounter( counter -1 )}
            />
            <Fab
                title="+1"
                position= 'br' 
                onPress={() => setcounter( counter +1 )}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FAFFD4',
        justifyContent:'center',
    },
    title:{
        textAlign:'center',
        fontSize: 40,
        top: -10,
        color:'black',
    },
})