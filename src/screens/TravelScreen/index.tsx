import React from 'react'
import Container from 'components/Container'
import Content from 'components/Content'
import Text from 'components/Text'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper'
import { SafeAreaView, View, StyleSheet, Image } from 'react-native'
import LikeButton from 'components/LikeButton'

// const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 7,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20,
  },
})

const TravelScrenn = (): JSX.Element => {
  return (
    <Container>
      <Content>
        <View style={styles.container}>
          <Card>
            <Card.Content>
              <Title>วัด</Title>
              {/* <Paragraph>สถานท่องที่เที่ยว</Paragraph> */}
            </Card.Content>
            <Card.Cover source={require('assets/img06.png')} />
            <LikeButton count={0} hasLiked={false} />
          </Card>

          <Card>
            <Card.Content>
              <Title>ภูเขาไม่ใช่ภูเรา</Title>
              {/* <Paragraph>สถานท่องที่เที่ยว</Paragraph> */}
            </Card.Content>
            <Card.Cover source={require('assets/img07.png')} />
            <LikeButton count={0} hasLiked={false} />
          </Card>
        </View>
      </Content>
    </Container>
  )
}

export default TravelScrenn
