// DOM Elements
const welcomeSection = document.getElementById("welcome");
const verseSection = document.getElementById("verse-display");
const goodbyeSection = document.getElementById("goodbye");
const startBtn = document.getElementById("start-btn");

const prevBtn = document.getElementById("prev-verse");
const nextBtn = document.getElementById("next-verse");

const rainAudio = document.getElementById("rain-audio");
const rainToggle = document.getElementById("rain-toggle");

// Start rain when app starts
startBtn.addEventListener("click", () => {
    rainAudio.volume = 0.1; // soft ambiance
    rainAudio.play().catch(() => {
        console.log("Autoplay blocked until user interaction");
    });
});

// Toggle mute
rainToggle.addEventListener("click", () => {
    if(rainAudio.paused){
        rainAudio.play();
        rainToggle.textContent = "🔊💧";
    }
    else{
        rainAudio.pause();
        rainToggle.textContent = "🔇💧";
    }
});

// Verse logic
const verses = [
  "Be still, and know that I am God. — Psalm 46:10",
  "Trust in the Lord with all your heart. — Proverbs 3:5",
  "The Lord is my shepherd; I shall not want. — Psalm 23:1",
  "I can do all things through Christ who strengthens me. — Philippians 4:13",
  "For I know the plans I have for you. — Jeremiah 29:11",
  "Cast all your anxiety on Him because He cares for you. — 1 Peter 5:7",
  "The Lord is close to the brokenhearted. — Psalm 34:18",
  "Peace I leave with you; My peace I give you. — John 14:27",
  "Those who hope in the Lord will renew their strength. — Isaiah 40:31",
  "The joy of the Lord is your strength. — Nehemiah 8:10",
  "The Lord will fight for you; you need only to be still. — Exodus 14:14",
  "Come to me, all who are weary, and I will give you rest. — Matthew 11:28",
  "The Lord is good to those who wait for Him. — Lamentations 3:25",
  "God is our refuge and strength. — Psalm 46:1",
  "The Lord bless you and keep you. — Numbers 6:24",
  "Let all that you do be done in love. — 1 Corinthians 16:14",
  "The Lord is my light and my salvation. — Psalm 27:1",
  "Blessed are the peacemakers. — Matthew 5:9",
  "My grace is sufficient for you. — 2 Corinthians 12:9",
  "With God all things are possible. — Matthew 19:26",
  "The Lord gives strength to His people. — Psalm 29:11",
  "In quietness and trust is your strength. — Isaiah 30:15",
  "The Lord watches over you. — Psalm 121:5",
  "Your word is a lamp to my feet. — Psalm 119:105",
  "The Lord is compassionate and gracious. — Psalm 103:8",
  "You are fearfully and wonderfully made. — Psalm 139:14",
  "The Lord will guide you always. — Isaiah 58:11",
  "Be strong and courageous. — Joshua 1:9",
  "The Lord hears when I call to Him. — Psalm 4:3",
  "Those who seek the Lord lack no good thing. — Psalm 34:10",
  "The Lord is faithful to all His promises. — Psalm 145:13",
  "God is love. — 1 John 4:8",
  "Let your heart not be troubled. — John 14:1",
  "The Lord gives wisdom. — Proverbs 2:6",
  "A gentle answer turns away wrath. — Proverbs 15:1",
  "The Lord is my strength and shield. — Psalm 28:7",
  "The Lord is good; His love endures forever. — Psalm 136:1",
  "Rejoice in the Lord always. — Philippians 4:4",
  "The Lord makes firm the steps of the one who delights in Him. — Psalm 37:23",
  "Hope in the Lord, for with the Lord is unfailing love. — Psalm 130:7",
  "The Lord is near to all who call on Him. — Psalm 145:18",
  "Do not be afraid; I am with you. — Isaiah 41:10",
  "The Lord is slow to anger and rich in love. — Psalm 145:8",
  "Commit your way to the Lord. — Psalm 37:5",
  "The Lord is my portion. — Lamentations 3:24",
  "God’s mercies are new every morning. — Lamentations 3:23",
  "The Lord surrounds His people. — Psalm 125:2",
  "Let everything that has breath praise the Lord. — Psalm 150:6",
  "The Lord upholds all who fall. — Psalm 145:14",
  "The Lord is gracious and righteous. — Psalm 116:5",
  "The Lord is my helper. — Hebrews 13:6",
  "Those who wait on the Lord shall renew their strength. — Isaiah 40:31",
  "The Lord delights in those who fear Him. — Psalm 147:11",
  "The Lord gives peace to His people. — Psalm 29:11",
  "Love is patient, love is kind. — 1 Corinthians 13:4",
  "The Lord is my rock and my fortress. — Psalm 18:2",
  "Let your gentleness be evident to all. — Philippians 4:5",
  "The Lord gives light to my darkness. — Psalm 18:28",
  "The Lord is good to all. — Psalm 145:9",
  "The Lord is my refuge. — Psalm 91:2",
  "The Lord restores my soul. — Psalm 23:3",
  "The Lord will keep you from all harm. — Psalm 121:7",
  "Blessed are those who trust in the Lord. — Jeremiah 17:7",
  "The Lord is my peace. — Ephesians 2:14",
  "The Lord strengthens me. — Psalm 118:14",
  "The Lord is my song. — Exodus 15:2",
  "The Lord is faithful in all His ways. — Psalm 145:17",
  "The Lord crowns the humble with salvation. — Psalm 149:4",
  "The Lord is my comfort. — Psalm 119:50",
  "The Lord is my portion forever. — Psalm 73:26",
  "The Lord renews my strength. — Isaiah 40:31",
  "The Lord is gentle and lowly in heart. — Matthew 11:29",
  "The Lord gives rest to His beloved. — Psalm 127:2",
  "The Lord is my hope. — Psalm 71:5",
  "The Lord is my confidence. — Proverbs 3:26",
  "The Lord surrounds me with favor. — Psalm 5:12",
  "The Lord fills my heart with peace. — Philippians 4:7",
  "The Lord is my light in the darkness. — Psalm 112:4",
  "The Lord is my ever-present help. — Psalm 46:1"
];


let currentVerse = 0;

// Update the verse text
function showVerse(index) {
    const verseText = document.getElementById("bible-verse");
    verseText.textContent = `"${verses[index]}"`;
};

// Show verse section on click
startBtn.addEventListener("click", () => {
    console.log("Button clicked!");
    welcomeSection.classList.add("hidden");
    verseSection.classList.remove("hidden");
    showVerse(currentVerse);
    verseSection.scrollIntoView({behavior: "smooth"});
});

prevBtn.addEventListener("click", () =>{
    if(currentVerse > 0) {
        currentVerse--;
        showVerse(currentVerse);
    }
});

nextBtn.addEventListener("click", () => {
    if(currentVerse < verses.length - 1){
        currentVerse++;
        showVerse(currentVerse);
    }
});
