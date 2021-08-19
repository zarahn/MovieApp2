import React from 'react';
import {Image, StyleSheet, Text, View, Dimensions} from 'react-native';
import {useSelector} from "react-redux";
const win = Dimensions.get('window');


const styles = StyleSheet.create({
    screen:{
        flex:1,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#00000025',
    },
    label: {
        fontSize: 20,
    },
    text:{
        color: '#000',
        fontWeight: '700',
        fontSize: 16,
    },
    backdrop: {
        flex: 1,
        alignSelf: 'stretch',
        width: undefined,
        height: undefined
        // width: win.width/2,
        // height: win.width/2,
        // resizeMode: "contain",
        // alignSelf: "center",
        // borderWidth: 1,
        // borderRadius: 20,
    },
});

const DetailScreen = ({route}) => {
    const {currentMovie} = useSelector(state => state.moviesReducer);
    console.log('movie: ', currentMovie);

    return (
        <View style={styles.screen}>

            {/* label for first visit */}
            {currentMovie.id === undefined && (
                <Text style={styles.text}>暫無電影詳情。</Text>
            )}

            {/* ============================================================ */}
            {/* Movie Details Start */}

            <Image
                source={{
                    uri: currentMovie.backdrop_path,
                }}
                resizeMode="cover"
                // style={{width: '100%', height: '50%', borderRadius: 10}}
                style={styles.backdrop}
            />

            <Text style={styles.text}>受歡迎度：{currentMovie?.popularity}</Text>

            <Text style={[styles.text, styles.label]}>類別：</Text>
            {typeof(currentMovie.genres) !== 'undefined' && currentMovie.genres.map(type => (
                <Text key={type.id} style={styles.text}>{type.name}</Text>
            ))}

            <Image
                source={{
                    uri: currentMovie.poster_path,
                }}
                resizeMode="cover"
                style={{width: 100, height: 150, borderRadius: 10}}
            />

            {/* Movie Details End */}
            {/* ============================================================ */}

        </View>
    );
};



export default DetailScreen;
