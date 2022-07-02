// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

// V1.0
function lookUpProfile(name, prop) {
  // Only change code below this line
  const res = [];
  let index = contacts.findIndex(obj => obj.firstName === name);
  contacts.map(contact => {
    if (contact["firstName"] === name) {
      if (contact[prop]) {
        res.push(contact[prop]);
      } else {
        res.push("No such property");
      }
    } else {
      res.push("No such contact");
    }
  });
  if (index < 0) index++;
  return res[index];
  // Only change code above this line
}

// v2.0
function lookUpProfile(name, prop)
{
  let index = contacts.findIndex(obj => obj.firstName === name);
  if (index >= 0)
  {
    if (contacts[index][prop])
    {
      return contacts[index][prop];
    } else {
      return "No such property";
    }
  }
  return "No such contact";
}

// TRIED TO USE ARROW FUN
const myFunDirty = (name, prop) => contacts.map(x => {
  if (x["firstName"] === name) {
    if (x[prop]) {
      return x[prop];
    } else {
      return "No such property";
    }
  } else {
    return "No such contact";
  } 
});
const myFun = (name, prop) => {
  const res = myFunDirty(name, prop);
  let index = [contacts.findIndex(obj => obj.firstName === name)];
  if (index < 0) index++;
  return res[index];
};
