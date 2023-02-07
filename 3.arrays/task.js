function compareArrays(arr1, arr2) {
  if (arr1.isArray === false || arr2.isArray === false) {
    return console.log("Передаваемое значение должно быть массивом!");
  } else {
    return (arr1.length === arr2.length && arr1.every((element, index) => element === arr2[index]));
  }
}

function getUsersNamesInAgeRange(users, gender) {
  return users.filter(element => element.gender === gender).reduce((acc, element, index, arr) => {
    acc += element.age;
    if (index === arr.length - 1) {
        return acc / arr.length;
    }
    return acc;
  }, 0);
}