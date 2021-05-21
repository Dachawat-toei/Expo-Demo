import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from 'screens/HomeScreen'
import TravelScreen from 'screens/TravelScreen'
import { useLocalization } from 'contexts/LocalizationContext'
import GalleryScreen from 'screens/GalleryScreen'
import { Ionicons } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading'; 

export type TabParamList = {
  Home: undefined
  Travel: undefined


}

const Tab = createBottomTabNavigator<TabParamList>()

const MainTab = (): JSX.Element => {
  const { t } = useLocalization()

  return (
    <Tab.Navigator 
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
            iconName = focused
            iconName = 'ios-home-outline';
        } else if (route.name === 'Travel') {
            iconName = 'ios-airplane-outline';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}
    
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: t('screens.HomeScreen.title', { defaultValue: 'Home' }),
        }}
      />
      <Tab.Screen
        name="Travel" 
        component={TravelScreen}
        options={{
          title: t('screens.TravelScreen.title', {defaultValue: 'Travel', }),
        }}
      />
    </Tab.Navigator>
  )
}

export default MainTab
