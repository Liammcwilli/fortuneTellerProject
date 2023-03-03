// posssible options for each category (relationship, mood, and life length)
const options = {
    relationship: ['single','divorced','married','complicated','hopeless romantic'],
    mood: ['happy','sad','boring','decent','divine','unsucessful','depressing','a roller coaster','a mess','a dumpster-fire'],
    lifeLength: [80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]
   }
// function that picks a random item from the array
const selectRandom = arr => {
    const randomIndex = Math.floor(Math.random() * arr.length);

    const item = arr[randomIndex];

    return item;
}
// variables declaring phrases that will be printed to the console using the function
const welcomeMessage = "welcome to the magical fortune telling program! Your life's fortune lies below->"
const relationshipFortune = `Your future relationship status will be ${selectRandom(options.relationship)}. `
const lifeFortune = `Your life will be ${selectRandom(options.mood)}.`
const ageFortune = `You will live to be ${selectRandom(options.lifeLength)} years old.`

console.log(welcomeMessage)
console.log(relationshipFortune);
console.log(lifeFortune);
console.log(ageFortune);