import { Button, View } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

export default function App() {
  const handleSignUp = async () => {
    const signUpUrl = 'https://webauthn.io/';
    await WebBrowser.openBrowserAsync(signUpUrl);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Open webapp" onPress={handleSignUp} />
    </View>
  );
}