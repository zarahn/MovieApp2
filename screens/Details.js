import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
    screen:{
        flex:1,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#00000025',
    },
    text:{
        color:'#000',
        fontWeight:'700',
        fontSize:30
    },
});

const DetailScreen = ({route}) => {
    return (
        <View style={styles.screen}>
            <Text style={styles.text}>{route.params.id}</Text>
            <Image
                source={{
                    uri: route.params.poster,
                }}
                resizeMode="cover"
                style={{width: 100, height: 150, borderRadius: 10}}
            />
        </View>
    );
};



export default DetailScreen;
