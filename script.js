const mapItems = [
    // History: Nationalism in India
    { item: "1920 Calcutta Congress session", type: "Congress session", state: "West Bengal", hint: "West Bengal" },
    { item: "1920 Nagpur Congress session", type: "Congress session", state: "Maharashtra", hint: "Maharashtra" },
    { item: "1927 Madras Congress session", type: "Congress session", state: "Tamil Nadu", hint: "Tamil Nadu" },
    { item: "Kheda Satyagraha", type: "Satyagraha movement", state: "Gujarat", hint: "Gujarat" },
    { item: "Champaran Satyagraha", type: "Satyagraha movement", state: "Bihar", hint: "Bihar" },
    { item: "Ahmedabad Mill Workers Satyagraha", type: "Satyagraha movement", state: "Gujarat", hint: "Gujarat" },
    { item: "Jallianwala Bagh", type: "Historical event", state: "Punjab", hint: "Punjab" },
    { item: "Dandi March", type: "Historical event", state: "Gujarat", hint: "Gujarat" },
    // Geography: Resources and Development
    { item: "Major Soil Types", type: "Soil type identification", state: "Various", hint: "Across India" },
    // Geography: Water Resources (Dams)
    { item: "Salal Dam", type: "Dam", state: "Jammu and Kashmir", hint: "Jammu and Kashmir" },
    { item: "Bhakra Nangal Dam", type: "Dam", state: "Punjab", hint: "Punjab" },
    { item: "Tehri Dam", type: "Dam", state: "Uttarakhand", hint: "Uttarakhand" },
    { item: "Rana Pratap Sagar Dam", type: "Dam", state: "Rajasthan", hint: "Rajasthan" },
    { item: "Sardar Sarovar Dam", type: "Dam", state: "Gujarat", hint: "Gujarat" },
    { item: "Hirakud Dam", type: "Dam", state: "Odisha", hint: "Odisha" },
    { item: "Nagarjuna Sagar Dam", type: "Dam", state: "Telangana", hint: "Telangana" },
    { item: "Tungabhadra Dam", type: "Dam", state: "Karnataka", hint: "Karnataka" },
    // Geography: Agriculture (Major producing areas/states)
    { item: "Major Rice Producing Areas", type: "Agricultural area", state: "Various (e.g., West Bengal, Uttar Pradesh)", hint: "e.g., West Bengal, Uttar Pradesh" },
    { item: "Major Wheat Producing Areas", type: "Agricultural area", state: "Various (e.g., Punjab, Uttar Pradesh)", hint: "e.g., Punjab, Uttar Pradesh" },
    { item: "Major Sugarcane Producing State", type: "Agricultural state", state: "Uttar Pradesh", hint: "Uttar Pradesh" },
    { item: "Major Tea Producing State", type: "Agricultural state", state: "Assam", hint: "Assam" },
    { item: "Major Coffee Producing State", type: "Agricultural state", state: "Karnataka", hint: "Karnataka" },
    { item: "Major Rubber Producing State", type: "Agricultural state", state: "Kerala", hint: "Kerala" },
    { item: "Major Cotton Producing State", type: "Agricultural state", state: "Maharashtra", hint: "Maharashtra" },
    { item: "Major Jute Producing State", type: "Agricultural state", state: "West Bengal", hint: "West Bengal" },
    // Geography: Minerals and Energy Resources
    { item: "Mayurbhanj Iron Ore Mine", type: "Iron Ore Mine", state: "Odisha", hint: "Odisha" },
    { item: "Durg Iron Ore Mine", type: "Iron Ore Mine", state: "Chhattisgarh", hint: "Chhattisgarh" },
    { item: "Bailadila Iron Ore Mine", type: "Iron Ore Mine", state: "Chhattisgarh", hint: "Chhattisgarh" },
    { item: "Bellary Iron Ore Mine", type: "Iron Ore Mine", state: "Karnataka", hint: "Karnataka" },
    { item: "Kudremukh Iron Ore Mine", type: "Iron Ore Mine", state: "Karnataka", hint: "Karnataka" },
    { item: "Raniganj Coal Mine", type: "Coal Mine", state: "West Bengal", hint: "West Bengal" },
    { item: "Bokaro Coal Mine", type: "Coal Mine", state: "Jharkhand", hint: "Jharkhand" },
    { item: "Talcher Coal Mine", type: "Coal Mine", state: "Odisha", hint: "Odisha" },
    { item: "Neyveli Coal Mine", type: "Coal Mine", state: "Tamil Nadu", hint: "Tamil Nadu" },
    { item: "Digboi Oil Field", type: "Oil Field", state: "Assam", hint: "Assam" },
    { item: "Naharkatia Oil Field", type: "Oil Field", state: "Assam", hint: "Assam" },
    { item: "Mumbai High Oil Field", type: "Oil Field", state: "Maharashtra (offshore)", hint: "Maharashtra (offshore)" },
    { item: "Bassein Oil Field", type: "Oil Field", state: "Maharashtra (offshore)", hint: "Maharashtra (offshore)" },
    { item: "Kalol Oil Field", type: "Oil Field", state: "Gujarat", hint: "Gujarat" },
    { item: "Ankleshwar Oil Field", type: "Oil Field", state: "Gujarat", hint: "Gujarat" },
    { item: "Namrup Thermal Power Plant", type: "Thermal Power Plant", state: "Assam", hint: "Assam" },
    { item: "Singrauli Thermal Power Plant", type: "Thermal Power Plant", state: "Madhya Pradesh", hint: "Madhya Pradesh" },
    { item: "Ramagundam Thermal Power Plant", type: "Thermal Power Plant", state: "Telangana", hint: "Telangana" },
    { item: "Narora Nuclear Power Plant", type: "Nuclear Power Plant", state: "Uttar Pradesh", hint: "Uttar Pradesh" },
    { item: "Kakrapara Nuclear Power Plant", type: "Nuclear Power Plant", state: "Gujarat", hint: "Gujarat" },
    { item: "Tarapur Nuclear Power Plant", type: "Nuclear Power Plant", state: "Maharashtra", hint: "Maharashtra" },
    { item: "Kalpakkam Nuclear Power Plant", type: "Nuclear Power Plant", state: "Tamil Nadu", hint: "Tamil Nadu" },
    // Geography: Manufacturing Industries
    { item: "Mumbai Cotton Textile Industry", type: "Cotton Textile Industry", state: "Maharashtra", hint: "Maharashtra" },
    { item: "Indore Cotton Textile Industry", type: "Cotton Textile Industry", state: "Madhya Pradesh", hint: "Madhya Pradesh" },
    { item: "Surat Cotton Textile Industry", type: "Cotton Textile Industry", state: "Gujarat", hint: "Gujarat" },
    { item: "Kanpur Cotton Textile Industry", type: "Cotton Textile Industry", state: "Uttar Pradesh", hint: "Uttar Pradesh" },
    { item: "Coimbatore Cotton Textile Industry", type: "Cotton Textile Industry", state: "Tamil Nadu", hint: "Tamil Nadu" },
    { item: "Durgapur Iron and Steel Plant", type: "Iron and Steel Plant", state: "West Bengal", hint: "West Bengal" },
    { item: "Bokaro Iron and Steel Plant", type: "Iron and Steel Plant", state: "Jharkhand", hint: "Jharkhand" },
    { item: "Jamshedpur Iron and Steel Plant", type: "Iron and Steel Plant", state: "Jharkhand", hint: "Jharkhand" },
    { item: "Bhilai Iron and Steel Plant", type: "Iron and Steel Plant", state: "Chhattisgarh", hint: "Chhattisgarh" },
    { item: "Vijaynagar Iron and Steel Plant", type: "Iron and Steel Plant", state: "Karnataka", hint: "Karnataka" },
    { item: "Salem Iron and Steel Plant", type: "Iron and Steel Plant", state: "Tamil Nadu", hint: "Tamil Nadu" },
    { item: "Noida Software Technology Park", type: "Software Technology Park", state: "Uttar Pradesh", hint: "Uttar Pradesh" },
    { item: "Gandhinagar Software Technology Park", type: "Software Technology Park", state: "Gujarat", hint: "Gujarat" },
    { item: "Mumbai Software Technology Park", type: "Software Technology Park", state: "Maharashtra", hint: "Maharashtra" },
    { item: "Hyderabad Software Technology Park", type: "Software Technology Park", state: "Telangana", hint: "Telangana" },
    { item: "Bengaluru Software Technology Park", type: "Software Technology Park", state: "Karnataka", hint: "Karnataka" },
    { item: "Chennai Software Technology Park", type: "Software Technology Park", state: "Tamil Nadu", hint: "Tamil Nadu" },
    { item: "Thiruvananthapuram Software Technology Park", type: "Software Technology Park", state: "Kerala", hint: "Kerala" },
    // Geography: Lifelines of National Economy
    { item: "Kandla Major Sea Port", type: "Sea Port", state: "Gujarat", hint: "Gujarat" },
    { item: "Mumbai Major Sea Port", type: "Sea Port", state: "Maharashtra", hint: "Maharashtra" },
    { item: "Marmagao Major Sea Port", type: "Sea Port", state: "Goa", hint: "Goa" },
    { item: "New Mangalore Major Sea Port", type: "Sea Port", state: "Karnataka", hint: "Karnataka" },
    { item: "Kochi Major Sea Port", type: "Sea Port", state: "Kerala", hint: "Kerala" },
    { item: "Tuticorin Major Sea Port", type: "Sea Port", state: "Tamil Nadu", hint: "Tamil Nadu" },
    { item: "Chennai Major Sea Port", type: "Sea Port", state: "Tamil Nadu", hint: "Tamil Nadu" },
    { item: "Visakhapatnam Major Sea Port", type: "Sea Port", state: "Andhra Pradesh", hint: "Andhra Pradesh" },
    { item: "Paradip Major Sea Port", type: "Sea Port", state: "Odisha", hint: "Odisha" },
    { item: "Haldia Major Sea Port", type: "Sea Port", state: "West Bengal", hint: "West Bengal" },
    { item: "Raja Sensi International Airport", type: "Airport", state: "Punjab", hint: "Punjab" },
    { item: "Indira Gandhi International Airport", type: "Airport", state: "Delhi", hint: "Delhi" },
    { item: "Chatrapati Shivaji International Airport", type: "Airport", state: "Maharashtra", hint: "Maharashtra" },
    { item: "Meenam Bakkam International Airport", type: "Airport", state: "Tamil Nadu", hint: "Tamil Nadu" },
    { item: "Netaji Subash Chandra Bose International Airport", type: "Airport", state: "West Bengal", hint: "West Bengal" },
    { item: "Rajiv Gandhi International Airport", type: "Airport", state: "Telangana", hint: "Telangana" }
];

let currentIndex = -1;
let markedForLater = [];
let allItems = [...mapItems]; // Copy of original items for reset
let isFirstRound = true; // Track if it's the first round

const itemDisplay = document.querySelector('.item');
const hintCheckbox = document.getElementById('hint-checkbox');
const hintContainer = document.querySelector('.hint-container');
const hintText = document.getElementById('hint-text');
const nextBtn = document.getElementById('next-btn');
const markBtn = document.getElementById('mark-btn');
const progress = document.getElementById('progress');
const restartBtn = document.getElementById('restart-btn');
const infoBtn = document.getElementById('info-btn');

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function updateProgress() {
    progress.textContent = `Progress: ${currentIndex + 1}/${allItems.length} (Marked for later: ${markedForLater.length})`;
}

function showNextItem() {
    hintCheckbox.checked = false; // Reset hint checkbox on next
    hintText.style.display = 'none'; // Hide hint on next

    if (currentIndex < allItems.length - 1) {
        currentIndex++;
        itemDisplay.textContent = allItems[currentIndex].item;
        hintText.textContent = allItems[currentIndex].hint;
        restartBtn.style.display = 'none';
    } else if (markedForLater.length > 0) {
        allItems = markedForLater; // Use marked items for next round
        markedForLater = [];
        currentIndex = -1;
        if (!isFirstRound) {
            shuffleArray(allItems); // Randomize only after the first round
        }
        isFirstRound = false; // Set to false after first round completes
        showNextItem();
    } else {
        itemDisplay.textContent = "All items practiced!";
        nextBtn.disabled = false;
        markBtn.style.display = 'none';
        restartBtn.style.display = 'block';
        restartBtn.textContent = 'Practice Again';
        hintContainer.style.display = 'none';
        isFirstRound = false; // Mark as not first round after completion
    }
    updateProgress();
}

hintCheckbox.addEventListener('change', () => {
    hintText.style.display = hintCheckbox.checked ? 'inline' : 'none';
});

nextBtn.addEventListener('click', showNextItem);

markBtn.addEventListener('click', () => {
    if (currentIndex >= 0 && currentIndex < allItems.length) {
        markedForLater.push(allItems[currentIndex]);
        showNextItem();
    }
});

restartBtn.addEventListener('click', () => {
    currentIndex = -1;
    markedForLater = [];
    allItems = [...mapItems]; // Reset to original list
    shuffleArray(allItems); // Randomize on restart
    nextBtn.disabled = false;
    markBtn.style.display = 'block';
    restartBtn.style.display = 'none';
    hintContainer.style.display = 'block';
    isFirstRound = false; // After restart, it's not the first round
    showNextItem();
});

infoBtn.addEventListener('click', () => {
    alert("First round is not randomized; subsequent rounds are randomized.");
});

updateProgress();