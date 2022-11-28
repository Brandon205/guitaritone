import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Audio } from 'expo-av';
import randomPitchNote from '../utils/random.js';

export default function PerfectPitch() { // TODO: When recording sounds make the filenames like: A#/Bb-A.mp3 to get the note and string
    const [sound, setSound] = useState();
    const [correctNote, setCorrectNote] = useState('');
    const [guessedArray, setGuessedArray] = useState([]);

    useEffect(() => {
        setCorrectNote(randomPitchNote()[0])
    }, [])

    useEffect(() => {
        return sound
        ? () => {
            console.log('Unloading Sound');
            sound.unloadAsync();
            }
        : undefined;
    }, [sound]);

    async function playSound() { // TODO Pass an optional parameter in here for playing a correct noise or something 
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync( require('../assets/pickupCoin.wav') );
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
    }

    let takeGuess = (note) => {
        if (note === correctNote) {
            // console.warn('Correct!', note)
            setCorrectNote(randomPitchNote()[0])
            setGuessedArray([])
        } else {
            console.warn('incorrect guess', note, correctNote)
            let tempArr = guessedArray
            tempArr.push(note)
            setGuessedArray(tempArr)
        }
    }

    let content = '';
    if (guessedArray.length > 0) {
        content = (
            <Text>{guessedArray.length + 'incorrect guesses'}</Text>
        )
    }

    return (
        <View className='flex h-full justify-center items-center bg-neutral-800 gap-12'>
            <Text className='text-white text-3xl'>GuitariTone</Text>
            <TouchableOpacity onPress={() => playSound()} className='bg-neutral-400 rounded-md p-2'><Text className='text-white'>Play Sound</Text></TouchableOpacity>

            <Text className='text-white text-2xl'>Options</Text>
            <View className='flex flex-wrap flex-row gap-1 justify-center'>
                {content}
                <TouchableOpacity className={`bg-neutral-400 rounded-md p-1 w-16 ${guessedArray.includes('A') ? ' bg-red-400' : ''}`} onPress={() => takeGuess('A')}>
                    <Text className='text-white text-center'>A</Text>
                </TouchableOpacity>
                <TouchableOpacity className={`bg-neutral-400 rounded-md p-1 w-16 ${guessedArray.includes('A#/Bb') ? ' bg-red-400' : ''}`} onPress={() => takeGuess('A#/Bb')}>
                    <Text className='text-white text-center'>A#/Bb</Text>
                </TouchableOpacity>
                <TouchableOpacity className={'bg-neutral-400 rounded-md p-1 w-16'} onPress={() => takeGuess('B')}>
                    <Text className='text-white text-center'>B</Text>
                </TouchableOpacity>
                <TouchableOpacity className={'bg-neutral-400 rounded-md p-1 w-16'} onPress={() => takeGuess('C')}>
                    <Text className='text-white text-center'>C</Text>
                </TouchableOpacity>
                <TouchableOpacity className={'bg-neutral-400 rounded-md p-1 w-16'} onPress={() => takeGuess('C#/Db')}>
                    <Text className='text-white text-center'>C#/Db</Text>
                </TouchableOpacity>
                <TouchableOpacity className={'bg-neutral-400 rounded-md p-1 w-16'} onPress={() => takeGuess('D')}>
                    <Text className='text-white text-center'>D</Text>
                </TouchableOpacity>
                <TouchableOpacity className={'bg-neutral-400 rounded-md p-1 w-16'} onPress={() => takeGuess('D#/Eb')}>
                    <Text className='text-white text-center'>D#/Eb</Text>
                </TouchableOpacity>
                <TouchableOpacity className={'bg-neutral-400 rounded-md p-1 w-16'} onPress={() => takeGuess('E')}>
                    <Text className='text-white text-center'>E</Text>
                </TouchableOpacity>
                <TouchableOpacity className={'bg-neutral-400 rounded-md p-1 w-16'} onPress={() => takeGuess('F')}>
                    <Text className='text-white text-center'>F</Text>
                </TouchableOpacity>
                <TouchableOpacity className={'bg-neutral-400 rounded-sm p-1 w-16'} onPress={() => takeGuess('F#/Gb')}>
                    <Text className='text-white text-center'>F#/Gb</Text>
                </TouchableOpacity>
                <TouchableOpacity className={'bg-neutral-400 rounded-md p-1 w-16'} onPress={() => takeGuess('G')}>
                    <Text className='text-white text-center'>G</Text>
                </TouchableOpacity>
                <TouchableOpacity className={'bg-neutral-400 rounded-md p-1 w-16'} onPress={() => takeGuess('G#/Ab')}>
                    <Text className='text-white text-center'>G#/Ab</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}