import { Text } from 'react-native';
import { Link } from 'expo-router';
import { View } from 'react-native'

export default function Page() {
    return (
        <View>
            <Text>I could go for a grilled cheese sandwich🧀</Text>
            <Link href="/sandwich">Just sandwich</Link>
        </View>
    )
}
