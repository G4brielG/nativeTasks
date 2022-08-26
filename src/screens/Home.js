import { Text } from 'react-native'
import { Pressable, NativeBaseProvider } from 'native-base'

const Home = ({ navigation }) => {
  return (
    <NativeBaseProvider>
      <Text>HOME</Text>
      <Pressable
			  onPress={() => navigation.navigate('Tareas')}
        style={{ backgroundColor: 'plum', padding: 10, marginBottom: 10, marginTop: 10 }}
		  >
			  <Text>Tareas</Text>
		  </Pressable>
    </NativeBaseProvider>
  )
}

export default Home