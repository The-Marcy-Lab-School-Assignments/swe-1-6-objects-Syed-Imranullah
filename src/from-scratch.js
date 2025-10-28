const coolGreeting = (person) => {
  if (person.isCool === true) {
    return `What is UP ${person.name.toUpperCase()}? How you been doin'?`
  } else {
    return `Greetings ${person.name}, how have you been lately?`
  }

};

const haveBirthday = (person) => {
  person.age = person.age + 1
};

const becomeSecretAgent = (person, spyHandle) => {
  delete person.name
  person.spyHandle = spyHandle
  return person
};

const carMaker = (name, maker, year) => {
  const car = {
    name: name,
    maker: maker,
    year: year,
    needsOilChange: false
  };
  return car;
};

console.log(carMaker("Civic", "Honda", 2020));

const weAreNotFriends = (person) => {
  return person.friends.pop();
};

const person = {
  name: "Alice",
  friends: ["Bob", "Charlie", "David"]
};

console.log(weAreNotFriends(person));
console.log(person.friends);


function listHobbies(person) {
  for (let i = 0; i < person.hobbies.length; i++) {
    console.log(person.name + " likes " + person.hobbies[i] + ".");
  }
}

const jo = {
  name: 'Jo',
  age: 34,
  hobbies: ['running', 'biking', 'baking'],
};

listHobbies(jo);

function getNextOpponent(team) {
  if (team.matches.length > 0) {
    return team.matches[0].teamName;
  } else {
    return null;
  }
}

const fighters = {
  name: 'Fighters',
  sport: 'basketball',
  wins: 3,
  location: {
    city: 'Bridgeport',
    state: 'CT',
  },
  matches: [
    {
      teamName: 'Dunkaroos',
      skill: 9,
      wins: 12,
    },
    {
      teamName: 'Space Jammers',
      skill: 10,
      wins: 16,
    },
    {
      teamName: 'Mustangs',
      skill: 6,
      wins: 10,
    },
  ]
}

console.log(getNextOpponent(fighters)); 


const listAllKeys = (obj) => {
  return Object.keys(obj);
};


const listAllValues = (obj) => {
  return Object.values(obj);
};


const convertToMatrix = (arr) => {
  if (arr.length === 0) return [];

  const keys = Object.keys(arr[0]);
  const matrix = [keys];

  for (let i = 0; i < arr.length; i++) {
    const values = Object.values(arr[i]);
    matrix.push(values);
  }

  return matrix;
};


module.exports = {
  coolGreeting,
  haveBirthday,
  becomeSecretAgent,
  carMaker,
  weAreNotFriends,
  listHobbies,
  getNextOpponent,
  listAllKeys,
  listAllValues,
  convertToMatrix,
};
