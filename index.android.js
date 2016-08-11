// B1: import những thư viện cần thiết
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';


// B2: Viết code cho các class (hay còn gọi là component)
// render: là yêu cầu nó phát sinh (vẽ) ra những gì người ta nhìn thấy
class Bai19ImageLoalInternet extends Component {
  render() {
    return (
      <View>
        <Text>Image Local Internet</Text>
        
        {/*Load hình từ local*/}
        <Image source={require('./images/reactnative.png')}
        style={{width:200, height:150}} />

        {/*Load hình từ Internet*/}
        <Image source={{uri:'http://tuyentaphay.com/wp-content/uploads/2016/01/hinh-anh-nen-uchiha-obito-luc-dao-dep-nhat-so-2.jpg'}}
        style={{width:200, height:150}} />

      </View>
    );
  }
}

// Khai báo CSS
var ao = StyleSheet.create({


});


// B3: Đăng ký register Component Chính
AppRegistry.registerComponent('Bai19ImageLoalInternet', () => Bai19ImageLoalInternet);
