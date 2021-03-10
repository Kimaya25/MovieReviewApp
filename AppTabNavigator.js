import * as React from 'react';
import {Text, View, Image} from 'react-native';
import ReadMovieReviewScree from '../Screens/ReadMovieReviewScreen';
import WriteMovieReviewScreen from '../Screens/WriteMovieReviewScreen';
import {createBottomTabNavigator} from 'react-navigation-tabs';



export const AppTabNavigator = createBottomTabNavigator({
    writeReviews : {screen : WriteMovieReviewScreen,
    navigationOptions : {
        tabBarIcon : <Image source = {require("../assets/write.jpg")} style = {{width : 30, height : 35 }}/>,
        tabBarLabel : 'WriteMovieReviews'
    }},
    ReadReviews : {screen : ReadMovieReviewScree,
    navigationOptions : {
        tabBarIcon : <Image source = {require("../assets/reading.jpg")} style = {{width : 30, height : 35}}/>,
        tabBarLabel : 'ReadMovieReviews'
    }}
})

