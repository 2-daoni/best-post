import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Text} from 'react-native';
import styled, {css} from 'styled-components/native';
import BestPostListScreen from './src/features/bestPost/screens/BestPostListScreen';
import CommunityScreen from './src/features/community/screens/CommunityScreen';

const Route = () => {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="CommunityScreen"
          component={CommunityScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <IconStyle source={require('/assets/images/store.png')} />
            ),
          }}
        />
        <Tab.Screen
          name="BestPostListScreen"
          component={BestPostListScreen}
          options={
            {
              // tabBarIcon: ({color, size}) => (
              //   <IconStyle source={require('assets/images/team.png')} />
              // ),
            }
          }
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const IconStyle = styled.Image<{
  width?: string;
  height?: string;
  profile?: boolean;
}>`
  width: ${props => props.width || '20px'};
  height: ${props => props.height || '20px'};
  ${props =>
    props.profile &&
    css`
      border-radius: 15px;
    `}
`;

export default Route;
