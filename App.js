import { Text, TouchableOpacity, SafeAreaView } from 'react-native';

export default function App() {

  let makeSound = () => {
    console.log('hello')
  }

  return (
    <SafeAreaView className='flex h-full justify-center items-center bg-neutral-800 gap-12'>
      <Text className='text-white text-3xl'>GuitariTone</Text>
      <TouchableOpacity onPress={makeSound} className='bg-neutral-400 rounded-md p-2'><Text className='text-white'>Make Noise!</Text></TouchableOpacity>
    </SafeAreaView>
  );
}
