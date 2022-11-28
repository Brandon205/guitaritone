// Need a randomNote, randomString, 

const notes = [ // Huge array with all notes from open to the 12th fret on all string starting from the lowest
    ['E', 'E'], // Start of E string
    ['F', 'E'],
    ['F#/Gb', 'E'],
    ['G', 'E'],
    ['G#/Ab', 'E'],
    ['A', 'E'],
    ['A#/Bb', 'E'],
    ['B', 'E'],
    ['C', 'E'],
    ['C#/Db', 'E'],
    ['D', 'E'],
    ['D#/Eb', 'E'],
    ['E', 'E'],
    ['E', 'A'], // Start of A string
    ['F', 'A'],
    ['F#/Gb', 'A'],
    ['G', 'A'],
    ['G#/Ab', 'A'],
    ['A', 'A'],
    ['A#/Bb', 'A'],
    ['B', 'A'],
    ['C', 'A'],
    ['C#/Db', 'A'],
    ['D', 'A'],
    ['D#/Ab', 'A'],
    ['A', 'A'],
    ['E', 'D'], // Start of D string
    ['F', 'D'],
    ['F#/Gb', 'D'],
    ['G', 'D'],
    ['G#/Ab', 'D'],
    ['A', 'D'],
    ['A#/Bb', 'D'],
    ['B', 'D'],
    ['C', 'D'],
    ['C#/Db', 'D'],
    ['D', 'D'],
    ['D#/Db', 'D'],
    ['D', 'D'],
    ['E', 'G'], // Start of G string
    ['F', 'G'],
    ['F#/Gb', 'G'],
    ['G', 'G'],
    ['G#/Ab', 'G'],
    ['A', 'G'],
    ['A#/Bb', 'G'],
    ['B', 'G'],
    ['C', 'G'],
    ['C#/Db', 'G'],
    ['D', 'G'],
    ['D#/Gb', 'G'],
    ['G', 'G'],
    ['E', 'B'], // Start of B string
    ['F', 'B'],
    ['F#/Gb', 'B'],
    ['G', 'B'],
    ['G#/Ab', 'B'],
    ['A', 'B'],
    ['A#/Bb', 'B'],
    ['B', 'B'],
    ['C', 'B'],
    ['C#/Db', 'B'],
    ['D', 'B'],
    ['D#/Bb', 'B'],
    ['B', 'B'],
    ['E', 'e'], // Start of high E string
    ['F', 'e'],
    ['F#/Gb', 'e'],
    ['G', 'e'],
    ['G#/Ab', 'e'],
    ['A', 'e'],
    ['A#/Bb', 'e'],
    ['B', 'e'],
    ['C', 'e'],
    ['C#/Db', 'e'],
    ['D', 'e'],
    ['D#/eb', 'e'],
    ['e', 'e'],
]

function randomPitchNote() { // Choose and return a randon sub array from the notes array above
    const random = (Math.random() * notes.length - 1).toFixed(0);

    return notes[random]
}

export default randomPitchNote;