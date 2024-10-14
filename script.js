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
    "மெய் பார்த்து வியந்தேன்.... நிலவென நினைத்து.....😇👀 கைகோர்த்து நடப்பேன்.... உயிரென உணர்ந்து......🤗🥰 உனக்கென வாழ்வேன் என்றென்றும் காதலோடு...... ❤️🥹",//
    "உன் சொற்களில் நான் சிதையும் நேரம்.... 🥹 ஏன் என்று கேட்டால்.... 👀 உன்னோடு இல்லாமல் யாரோடு என்று கேட்டாய்..... 🥰 சற்றே புரிந்தது.... அதுவும் காதல் தான் என்று.... ❤️",//
    "கரையில் இருந்து கடலை பார்த்து எல்லையை தேடினேன்.... கிடைக்கவில்லை நம் காதலின் எல்லையை  போல.... 👀😘🫂",//
    "சிந்தித்தபின் சந்திக்க மயிலும் காதல் மட்டுமே காலம் முழுதும் கண் கலங்க விடாது... ❤️🤞🏻",//
    "சில மணி நேரம் பேசிவிட்டு....பல மணி நேரம் நினைதுகொண்டு.... உனக்காக வாழ்வேன்.... என் உயிரே..❤️🥺🤌🏻",//
    "சிறகில்லா பறவை என நீ உன்னை நினைத்து வருந்த.... என்றென்றும் உன் சிறகாய் வளர்ந்தேன் உன்னை வானில் பறக்க வைக்க.... உன்னோடு நான் என்னோடு நீ 🕊️💖🫂",//
    "வா வெண்ணிலா நீ என் நிலா உன் கண்ணிலே என் காதலா ❤️",//
    "உன்னோடு இருக்க நினைத்து வருந்தினேன்.....🫠 வருத்தத்தின் வெளிப்பாடாக வானம் பொழிந்தது......🫣💖 அம்மலையில் நனைந்த நான் மனம் நெகிழ்ந்து மண்ணை வணங்க உன்னை நேசித்தேன்..... 🥰🥹 என்றென்றும் உனக்காக நான்..... 🫂❤️",//
    "உன்னை பிரியா வரம் கேட்டேன் மனதிற்கு கிடைத்தது உயிர் தேடிக் கொண்டிருக்கிறது. 😖🥹❤️",//
    "நேசித்த பின் யோசித்தேன் சுவாசிக்க காரணம் நீயாக இருப்பாயோ என்று 🫀💞❣️",//
    "வாழ்க்கை என்ற வினா வந்தது....விடை கேட்டு அழைத்தேன்..... சற்றே அறிந்தேன்......ஐந்து மாதங்களுக்கு முன்பே கண்டறிந்து விட்டேன் என்று......🥹❤️",//
    "உன் குரல் என் இதழில் இதமாய் பதிந்திருக... மௌனம் கூட உன் சிறிய குரலாய் ஒலிக்கிறது.... 🥰❤️",//
    "நீ பேசும் சில நேரங்களுக்காக பல மணி நேரம் காத்திருக்கும் அந்த நேரங்களுக்கு தெரியும் நான் உன் மீது கொண்ட பாசத்தின் உச்சம் 🥹❤️",
    "விழித்திருக்க காரணம் தேடினேன் விழிகளில் ஈரம் நிறைந்தது.... ஏனெனில்.... என் மனதில் உன்னை கண்டேன்....  என்றென்றும் பிரியா நட்போடு உன்னுடன் நான்.... ❤️🥹🫂",//
    "கதைக்கதாபோதும் கதைதுகொண்ட் இருக்கிறது கதைத நினைவுகள் ❤️😇🫂",//
    "Thank you for making me feel special Smithuuu... 🥺❤️ It means alot...😇 Whatever happens, I'll be there for you ... Forever my friend ❤️🫂... Nee mattu illena indha day ena ahitukum nu theriyala... 🥺 Once again thank you ❤️",//
    "எனக்கென ஒரு உறவென நீ இருக்க உனக்கென ஒரு உயிரென நான் இருக்கிறேன் ❤️✨"// Add 363 more quotes here
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
    "music/day10.mp3", // Path to music for Sept 23, 2024
    "music/day11.mp3", // Path to music for Sept 24, 2024
    "music/day12.mp3", // Path to music for Sept 25, 2024
    "music/day13.mp3", // Path to music for Sept 26, 2024
    "music/day14.mp3", // Path to music for Sept 27, 2024
    "music/day15.mp3", // Path to music for Sept 28, 2024
    "music/day16.mp3", // Path to music for Sept 29, 2024
    "music/day17.mp3", // Path to music for Sept 30, 2024
    "music/day18.mp3", //
    "music/day19.mp3", //
    "music/day23.mp3", //
    "music/day24.mp3" // Path to music for Oct 01, 2024
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

