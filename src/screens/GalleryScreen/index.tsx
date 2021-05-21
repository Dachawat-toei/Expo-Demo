import React from 'react'
import Container from 'components/Container'
import Content from 'components/Content'
import Text from 'components/Text'
import { View, Image, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    textAlign: 'center',
  },
  stretch: {
    width: 350,
    height: 250,
    resizeMode: 'contain',
  },
});

const GalleryScreen = (): JSX.Element => {
  return (
    <Container>
      <Content>
        <View style={styles.container}>
          <Image style={styles.stretch} source={require('assets/img01.png')} />
          <Image style={styles.stretch} source={require('assets/img02.png')} />
          <Image style={styles.stretch} source={require('assets/img03.jpg')} />
          <Image style={styles.stretch} source={require('assets/img04.png')} />
          <Image style={styles.stretch} source={require('assets/img08.jpg')} />
        </View>
        
      </Content>
    </Container>
  )
}

export default GalleryScreen
