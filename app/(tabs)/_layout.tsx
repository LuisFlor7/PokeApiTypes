import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

import { FireIcon, WaterIcon, GrassIcon, IceIcon, HomeIcon, ElectricIcon } from '@/components/Icons.jsx';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: () => <HomeIcon size={28} />,
        }}
      />
      <Tabs.Screen
        name="grass"
        options={{
          title: 'Grass',
          tabBarIcon: () => <GrassIcon size={28} />,
        }}
      />
      <Tabs.Screen
        name="water"
        options={{
          title: 'Water',
          tabBarIcon: () => <WaterIcon size={28} />,
        }}
      />
      <Tabs.Screen
        name="fire"
        options={{
          title: 'Fire',
          tabBarIcon: () => <FireIcon size={28} />,
        }}
      />
       <Tabs.Screen
        name="electric"
        options={{
          title: 'Electric',
          tabBarIcon: () => <ElectricIcon size={28} />,
        }}
      />
    </Tabs>
  );
}
