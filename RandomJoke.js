
const apiUrl = "https://official-joke-api.appspot.com/random_joke"

async function randomJoke() {
    const data = await fetch(apiUrl);
    const data_json = await data.json();
    console.log(`Question: ${data_json.setup}`);
    console.log(`Answer: ${data_json.punchline}`);
}

randomJoke();
