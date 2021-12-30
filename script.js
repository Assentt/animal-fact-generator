const facts = ["Koala fingerprints are so close to humans' that they could taint crime scenes.", "Parrots will selflessly help each other out.", "Prairie dogs kiss.", "Ghost crabs growl using teeth in their stomachs.", "The mantis shrimp has the world's fastest punch.", "Female lions do 90 percent of the hunting.", "Narwhal tusks are really an 'inside out' tooth.", "The world's oldest known breed of domesticated dog dates back to 329 BC.", "The oldest evidence of domesticated cats dates back 9,500 years.", "Puffins use twigs to scratch their bodies.", "There's a kind of ant that only lives in a small area of Manhattan.", "Cows painted with zebra-like stripes can avoid being bitten by flies.", "Capuchin monkeys wash their hands and feet in urine.", "Sperm whales in the Caribbean have an accent.", "Some pigs in China are the size of bears.", "Some sharks glow in the dark.", "Some snails have hairy shells.", "Cowbirds use secret passwords to teach their young.", "Baby Tasmanian devils make life-long friendships.", "A grizzly bear's bite is strong enough to crush a bowling ball.", "Humpback whales use bubbles to hunt.", "A housefly buzzes in an F key.", "Moray eels have a second pair of 'Alien-style' jaws.", "Ducks can surf.", "Slow lorises are the only venomous primates.", "Pigeons can do math.", "Zebra stripes act as a natural bug repellant.", "Wild chimps like to drink.", "Sea otters are adept at using tools."];

const getFact = () => {
    const randIndx = Math.floor(Math.random() * facts.length);

    return facts[randIndx];
};

console.log(getFact());