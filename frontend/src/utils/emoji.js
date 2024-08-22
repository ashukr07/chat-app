// Array of emojis
const emojis = [
    // Smiley faces and expressions
    "😀", "😁", "😂", "🤣", "😃", "😄", "😅", "😆", "😉", "😊",
    "😋", "😎", "😍", "😘", "🥰", "😗", "😙", "😚", "🙂", "🤗",
    "🤩", "🤔", "🤨", "😐", "😑", "😶", "🙄", "😏", "😣", "😥",

    // Animals
    "🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼", "🐨", "🐯",
    "🦁", "🐮", "🐷", "🐸", "🐵", "🐧", "🐦", "🐤", "🐣", "🦆",

    // Food and Drink
    "🍏", "🍎", "🍐", "🍊", "🍋", "🍌", "🍉", "🍇", "🍓", "🍈",
    "🍒", "🍑", "🍍", "🥥", "🥝", "🍅", "🥑", "🍆", "🥒", "🥦",
    "🍔", "🍟", "🍕", "🌭", "🍿", "🥓", "🥚", "🍳", "🥞", "🍤",

    // Objects
    "⌚", "📱", "💻", "⌨️", "🖥️", "🖨️", "🖱️", "💽", "💾", "💿",
    "📀", "📷", "📸", "📹", "🎥", "📺", "📻", "📼", "📡", "🔋",
    
    // Nature
    "🌲", "🌳", "🌴", "🌵", "🌾", "🌿", "☘️", "🍀", "🌻", "🌼",
    "🌸", "💐", "🌷", "🌹", "🥀", "🌺", "🍁", "🍂", "🍃", "🍄"
];

// Function to get a random emoji
function getRandomEmoji() {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
}

// Export the function as the default export
export default getRandomEmoji;
