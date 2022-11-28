import React from 'react';
import { SafeAreaView } from 'react-native';
import PerfectPitch from './components/PerfectPitch';

export default function App() {
  return (
    <SafeAreaView className='flex h-full justify-center items-center bg-neutral-800 p-2'>
      <PerfectPitch />
    </SafeAreaView>
  );
}
