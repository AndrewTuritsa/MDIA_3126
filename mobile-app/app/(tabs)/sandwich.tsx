import { Text } from 'react-native';
import { Link } from 'expo-router';
import { View } from 'react-native'

export default function Page() {
  return (
    <View>
        <Text>This sandwich</Text>
        <Link href="/grilled-cheese-sandwich">grill that🔥</Link>
    </View>
     )
}
