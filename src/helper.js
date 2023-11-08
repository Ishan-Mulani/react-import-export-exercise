function choice(items) {
  const arrLength = items.length;
  const randIndex = Math.floor(Math.random() * arrLength);
  return items[randIndex];
}

function remove(items, item) {
  const index = items.indexOf(item);
  if (index > -1) {
    items.splice(index, 1);
    return items;
  }
  return undefined;
}

export { choice, remove };
