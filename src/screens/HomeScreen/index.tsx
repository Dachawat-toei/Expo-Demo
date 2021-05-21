import React from 'react'
import Container from 'components/Container'
import Content from 'components/Content'
import Text from 'components/Text'
import Button from 'components/Button'
import { useAuth } from 'contexts/AuthContext'

export type Props = {
  navigation: any
}

const HomeScreen = ({ navigation }: Props): JSX.Element => {
  
  return (
    <Container>
      <Content>
        <Button testID="see-detail" title="Drawer" onPress={() => navigation.toggleDrawer()}/>
      </Content>
    </Container>
  )
}

export default HomeScreen