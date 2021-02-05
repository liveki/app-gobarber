import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../Pages/Dashboard';

import Profile from '../Pages/Profile';
import CreateAppointment from '../Pages/CreateAppointment';
import AppointmentCreated from '../Pages/AppointmentCreated';

const Auth = createStackNavigator();

const AppRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {
        backgroundColor: '#312e38',
      },
    }}
  >
    <Auth.Screen name="Dashboard" component={Dashboard} />
    <Auth.Screen name="CreateAppointment" component={CreateAppointment} />
    <Auth.Screen name="AppointmentCreated" component={AppointmentCreated} />

    <Auth.Screen name="Profile" component={Profile} />
  </Auth.Navigator>
);

export default AppRoutes;
