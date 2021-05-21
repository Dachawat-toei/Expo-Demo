import 'react-native-gesture-handler'
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { useAuth } from 'contexts/AuthContext'
import Drawer from './Drawer'
import AuthStack from './AuthStack'


const Navigation = (): JSX.Element => {
  const {
    state: { userToken },
  } = useAuth()
  const isAuth = !!userToken
  return (
    <NavigationContainer>
      {isAuth ? <Drawer /> : <AuthStack />}
    </NavigationContainer>
  )
}

export default Navigation
