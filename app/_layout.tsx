import { SplashScreen, Stack } from 'expo-router';
import 'react-native-reanimated';
import { View } from 'react-native';
import { useEffect } from 'react';


// SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useEffect(() => {
    const prepareApp = async () => {
      await SplashScreen.preventAutoHideAsync(); 
      setTimeout(() => SplashScreen.hideAsync(), 3000); 
    };

    prepareApp();
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          headerShown: false, 
        }}
      >
      </Stack>
    </View>
  );
}
