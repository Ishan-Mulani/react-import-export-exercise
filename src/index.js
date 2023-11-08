import foods from "./food";
import { choice, remove } from "./helper";
const selectedFood = choice(foods);
console.log(`I’d like one ${selectedFood}, please`);
console.log(`Here you go: ${selectedFood}`);
console.log("Delicious! May I have another?");
const remainingFood = remove(foods, selectedFood);
console.log(`I’m sorry, we’re all out. We have ${remainingFood.length} left.`);
