// Get the welcome message element
const welcomeMessageElement = document.getElementById('welcome-message');

// Define the first day of the event
const firstDay = new Date('2024-09-14');

// Function to remove time from the date (only keep year, month, and day)
function resetTime(date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

// Display the welcome message based on the current date
function displayWelcomeMessage() {
    const today = resetTime(new Date()); // Use the resetTime function to strip time
    const isFirstDay = today.getTime() === resetTime(firstDay).getTime();

    if (isFirstDay) {
        welcomeMessageElement.textContent = "Welcome Smithuu Thangamae ❤️";
    } else {
        welcomeMessageElement.textContent = "Welcome Smithuu Thangamae ❤️";
    }
}

// Call the function to set the welcome message on page load
displayWelcomeMessage();

// Rest of your code for quotes and music
const quotes = [
    "Wishing you many more happy returns of the day en chellamae ❤️🦋... Next 364 days unakaagavum kadaisi vara iruka pora namba relationship kaagavum spend panna pore.... with you forever en chellamae 🥰", // Sept 14, 2024
    "அருகில் இருந்தால் அனைத்து மகிழ்வேன்.... தொலைவில் இருப்பதால் நினைத்து மகிழ்கிறேன்.... 🥹❤️🤌🏻", // Sept 15, 2024
    "அன்பு நிறைந்த உள்ளம் தான் அதிகம் சண்டை பொடும்.... பிரிவதற்காக அல்ல.... பிரிந்துவிட கூடாது என்பதற்காக....🥹❤️🤌🏻",// Sept 16, 2024
    "உயிராக உன்னை பார்க்க உறவாக நாம் இருக்க தடை செய்யும் முட்களை தவிர்த்து எறிந்து துணை இருப்போம் என்றென்றும் உறுதுணையாக 🥰❤️",// Sept 17, 2024
    "எவை மாறினாலும் என்றும் மாரதது... உன் மேல் கொண்ட காதல் மட்டுமே..🥹❤️🫶🏻",//
    "உண்மையாக நேசிக்கும் இதைதிற்கு எப்போதும் ஒரு பயம் இருக்கும்.... பிரிந்து விட கூடாது என்று... 😢❤️🤌🏻",//
    "ஒரு சண்டையில் முடிவதால்... ஒவ்வொரு சண்டையிலும் வளர்வது தான் காதல்..❤️",//
    "பேராசை தான் என்னை விட யாரும் உன்மீது அதிக அன்பு காட்டிவிட கூடாது என்பதில்...🙈🥹❤️",//
    "எவை மாறினாலும் என்றும் மாரதது... உன் மேல் கொண்ட காதல் மட்டுமே..🥹❤️🫶🏻",//
    "நீ கேட்கும் ஒளியில்.... நான் பேசும் மொழியால்.....உன் உள்ளம் என்றும்... உருகுதடி....🤞🏻❤",//
    "உரைப் பணியாய் நாமும் உறுதுணையாய் நீயும் என்றென்றும் பிரியா சிற்பங்கள் ஆகிறோம்..... ❤✨",//
    "வானெங்கும் நீளம் நாம் செல்லும் தூரம்.... 🥰👀வாணலவை தாண்டி விண்ணலவை எட்டி..... என்றென்றும் காதலலோடு வளர்ந்ததடி.... ❤😘🤞🏻",//
    "கண்ணுக்குள் வைத்து மனதுக்குள் புதைத்து உயிரென நினைத்து உறவோடு வாழ்கிறேன் உன்னோடு மட்டும் தான்.....❤😘🫂",//
    "கடலை போன்ற நம் காதலுக்கு தெரியும்..... வானலவை எட்ட கடலின் ஆழம் போதும் என்று ❤️🫰🏻🥹",//
    "மெய் பார்த்து வியந்தேன்.... நிலவென நினைத்து.....😇👀 கைகோர்த்து நடப்பேன்.... உயிரென உணர்ந்து......🤗🥰 உனக்கென வாழ்வேன் என்றென்றும் காதலோடு...... ❤️🥹"// Add 363 more quotes here
];

const musicPaths = [
    "music/day1.mp3", // Path to music for Sept 14, 2024
    "music/day2.mp3", // Path to music for Sept 15, 2024
    "music/day3.mp3", // Path to music for Sept 16, 2024
    "music/day4.mp3", // Path to music for Sept 17, 2024
    "music/day5.mp3", // Path to music for Sept 18, 2024
    "music/day6.mp3", // Path to music for Sept 19, 2024
    "music/day7.mp3", // Path to music for Sept 20, 2024
    "music/day8.mp3", // Path to music for Sept 21, 2024
    "music/day9.mp3", // Path to music for Sept 22, 2024
    "music/day10.mp3", // Path to music for Sept 22, 2024
    "music/day11.mp3", // Path to music for Sept 22, 2024
    "music/day12.mp3", // Path to music for Sept 22, 2024
    "music/day13.mp3", // Path to music for Sept 22, 2024
    "music/day14.mp3", // Path to music for Sept 22, 2024
    "music/day15.mp3" // Path to music for Sept 22, 2024
    // Add paths to 363 more music files here
];

// Function to calculate the difference between the first day and the selected/current day
function getQuoteByDate(date) {
    const diffTime = Math.abs(resetTime(date) - resetTime(firstDay));
    const dayIndex = Math.floor(diffTime / (1000 * 60 * 60 * 24)) % quotes.length;
    return {quote: quotes[dayIndex], music: musicPaths[dayIndex]};
}

function playMusic(musicPath) {
    const audioElement = document.getElementById('bg-music');
    const audioSource = document.getElementById('audio-source');
    audioSource.src = musicPath;
    audioElement.load();
    audioElement.play();
}

// Show today's quote when the button is clicked
// Show today's quote when the button is clicked
document.getElementById('today-btn').addEventListener('click', () => {
    const today = resetTime(new Date());
    const result = getQuoteByDate(today);

    const quoteElement = document.getElementById('quote');
    quoteElement.textContent = result.quote;
    
    // Reset animation by re-adding the class
    quoteElement.classList.remove('hidden');
    quoteElement.style.opacity = '0'; // Reset visibility for animation
    setTimeout(() => {
        quoteElement.style.opacity = '1'; // Trigger animation
    }, 50); // Small delay to trigger the fade-in

    playMusic(result.music);
});

// Show the selected quote for the past days from the calendar
document.getElementById('date-picker').addEventListener('change', (event) => {
    const selectedDate = resetTime(new Date(event.target.value));
    const today = resetTime(new Date());

    const quoteElement = document.getElementById('quote');
    
    if (selectedDate > today) {
        const isTomorrow = selectedDate.getDate() === today.getDate() + 1 &&
                           selectedDate.getMonth() === today.getMonth() &&
                           selectedDate.getFullYear() === today.getFullYear();

        if (isTomorrow) {
            quoteElement.textContent = "Check back tomorrow for this quote!";
        } else {
            quoteElement.textContent = `Check back on ${selectedDate.toDateString()} for this quote!`;
        }
    } else {
        const result = getQuoteByDate(selectedDate);
        quoteElement.textContent = result.quote;
        playMusic(result.music);
    }

    // Reset animation by re-adding the class
    quoteElement.classList.remove('hidden');
    quoteElement.style.opacity = '0'; // Reset visibility for animation
    setTimeout(() => {
        quoteElement.style.opacity = '1'; // Trigger animation
    }, 50); // Small delay to trigger the fade-in
});

