import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import MainTab from './MainTab'
import SettingsScreen from 'screens/TravelScreen'
import LogoutScreen from 'screens/LogoutScreen'
import Gallery from 'screens/GalleryScreen'
import { Ionicons } from '@expo/vector-icons';

export type StackParamList = {
  Main: undefined
  Logout: undefined
  Gallerys: undefined
}

const Drawer = createDrawerNavigator<StackParamList>()

const AppDrawer = (): JSX.Element => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Main" component={MainTab} />
      <Drawer.Screen name="Gallerys" component={Gallery} />
      <Drawer.Screen name="Logout" component={LogoutScreen} />
    </Drawer.Navigator>
  )
}

export default AppDrawer
