import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options ={{ headerShown: false }} />
      <Stack.Screen name="signup_page" options={{ headerShown: false }} />
      <Stack.Screen name="directory" options={{ headerShown: false }} />
    </Stack>
  );
}
