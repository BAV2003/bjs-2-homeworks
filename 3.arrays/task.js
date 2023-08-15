function compareArrays(arr1, arr2) {
  return ((arr1.length === arr2.length) && arr1.every((element, index) => element === arr2[index]));
}

function getUsersNamesInAgeRange(users, gender) {
  return result = users.filter(user => user.gender === gender).map(years => years.age).reduce((acc, years, index, arr) => {
    acc + years;
    if (index === arr.length - 1) { 
        return (acc + years) / arr.length;
    }
    return acc + years;
  }, 0);
}
