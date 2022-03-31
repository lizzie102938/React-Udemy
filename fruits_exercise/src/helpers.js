function choice(items) {
 let idx = Math.floor(Math.random()*items.length);
 return items[idx];
//  randomly selected item from array
}

function remove(items, item) {
  for (let i = 0; i < items.length; i++) {
    if (items[i] === item) {
      return [ ...items.slice(0,i), ...items.slice(i + 1) ];
    }
  }
// removes the first matching item from items, if it exists. Otherwise returns undefined
}

export { choice, remove };
