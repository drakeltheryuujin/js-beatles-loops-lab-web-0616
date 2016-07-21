function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (var i = 0; i < musicians.length; i++) {
    var newArray = `${musicians[i]} plays ${instruments[i]}`;
    array.push(newArray);
  }
  return array;
}

function johnLennonFacts(array) {
  var newArray = []
  var i = 0
  while (i < array.length) {
    newArray.push(`${array[i]}!!!`);
    i++;
  }
  return newArray;
}

function iLoveTheBeatles(num) {
  var newArray = []
  var i = 0
  do {
    newArray.push("I love the Beatles!");
    i++;
  } while (i < num + 1 && num < 15) {
    return newArray;
  }
}
