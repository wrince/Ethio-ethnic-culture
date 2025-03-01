const ethnicGroups = {
    "Amhara": "The Amhara people are one of Ethiopia's largest ethnic groups, known for their role in Ethiopian civilization. They speak Amharic, the official language of Ethiopia, and have a rich history in literature, religion, and governance. The Amhara played a significant role in the formation of the Ethiopian empire and are deeply connected to Orthodox Christianity.",
    "Oromo": "The Oromo people are the largest ethnic group in Ethiopia, making up more than a third of the population. They have a unique socio-political system known as the 'Gadaa' system, a traditional democratic governance structure. Oromo people are known for their contributions to agriculture, poetry, and music, with their language, Afaan Oromo, being widely spoken in Ethiopia.",
    "Tigray": "The Tigray people primarily inhabit northern Ethiopia. They are known for their ancient history, with ties to the Axumite civilization, one of the great African empires. The Tigrinya language is spoken by the Tigray people, and they have a deep connection to Orthodox Christianity. Their culture includes traditional dances like 'Awris' and a strong emphasis on education.",
    "Somali": "Ethiopian Somalis live in the eastern region of Ethiopia. They are predominantly pastoralists, herding camels, sheep, and cattle. Somali culture is rich in poetry and oral storytelling. The region is largely influenced by Islamic traditions, and the Somali language is widely spoken in the area.",
    "Afar": "The Afar people are nomadic pastoralists living in Ethiopia’s Afar Region. They are known for their resilience in the harsh desert climate. The Afar have a rich warrior tradition and a unique language. Their diet is primarily based on livestock products, and their society is structured around clan-based leadership.",
    "Sidama": "The Sidama people are famous for their coffee production, particularly in the Sidama Zone. They have a unique cultural identity, with traditional dances, clothing, and rituals. The Sidama practice intensive agriculture, growing enset (false banana) and coffee as staple crops.",
    "Gurage": "The Gurage people are known for their enset-based agricultural system, which provides food security in the region. They have a strong entrepreneurial culture and are known for their business acumen. Their language, Gurage, belongs to the Semitic language family.",
    "Wolayta": "The Wolayta people have a distinct identity, known for their music, traditional clothing, and dance. Agriculture is central to their lifestyle, with crops like enset and maize being widely cultivated. Wolayta culture includes a rich oral history tradition.",
    "Hadiya": "The Hadiya people live in southern Ethiopia and have a distinct language and culture. They have a mixed agricultural economy and strong cultural traditions, including music, storytelling, and social ceremonies.",
    "Gamo": "The Gamo people are known for their woven textiles and unique social structures. They have a traditional caste system and practice agroforestry, growing crops alongside trees for environmental sustainability.",
    "Kaffa": "The Kaffa region is believed to be the birthplace of coffee. The Kaffa people have a long history of coffee cultivation, and their culture revolves around coffee ceremonies and trade.",
    "Dawro": "The Dawro people have a strong oral history tradition. They practice terraced farming, which allows them to cultivate crops efficiently in mountainous terrain.",
    "Harari": "The Harari people have a deep connection to Islamic culture and history. They live mainly in the walled city of Harar, known for its ancient mosques and unique architecture.",
    "Benishangul": "The Benishangul-Gumuz region is ethnically diverse, with multiple ethnic groups living together. The region has a history of gold mining and trade.",
    "Gedeo": "The Gedeo people are known for their agroforestry system, which integrates trees, coffee, and crops. This system has been recognized by UNESCO for its sustainability.",
    "Sheka": "The Sheka people inhabit Ethiopia’s rainforest areas, relying on forestry and agriculture for their livelihood.",
    "Konso": "The Konso people are famous for their stone-walled villages and terraced farming techniques.",
    "Kambata": "The Kambata people are skilled farmers known for growing enset and potatoes.",
    "Silte": "The Silte people practice a mix of Islamic and Ethiopian traditions, with a strong emphasis on trade.",
    "Ari": "The Ari people inhabit southwestern Ethiopia and are known for pottery and blacksmithing.",
    "Nuer": "The Nuer people have a rich cattle-based economy and practice seasonal migration.",
    "Anuak": "The Anuak people live near Ethiopia's border with South Sudan and rely on fishing and farming.",
    "Berta": "The Berta people mainly inhabit Ethiopia’s western regions and have a rich oral tradition.",
    "Mursi": "The Mursi people are famous for their lip plates and body decorations.",
    "Surma": "The Surma people practice decorative body painting and cattle herding.",
    "Nyangatom": "The Nyangatom people are a Nilotic ethnic group in southwestern Ethiopia.",
    "Hamer": "The Hamer people are known for their bull-jumping initiation ceremony.",
    "Karo": "The Karo people are famous for their elaborate body painting.",
    "Dasanech": "The Dasanech people live in the Omo Valley and practice fishing.",
};

// Populate dropdown
window.onload = function() {
    const select = document.getElementById("ethnicSelect");
    for (let group in ethnicGroups) {
        let option = document.createElement("option");
        option.value = group;
        option.textContent = group;
        select.appendChild(option);
    }
};

// Display definition
function showDefinition() {
    document.getElementById("definition").textContent = ethnicGroups[document.getElementById("ethnicSelect").value] || "";
}

// Fetch Wikipedia definition
async function fetchDefinition() {
    let word = document.getElementById("searchWord").value;
    let url = `https://en.wikipedia.org/api/rest_v1/page/summary/${word}`;
    let response = await fetch(url);
    let data = await response.json();
    document.getElementById("dictionaryResult").textContent = data.extract || "No definition found.";
}