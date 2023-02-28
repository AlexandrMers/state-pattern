import {Document} from "./process";

const doc = new Document();

console.log(doc.getState());

doc.deleteDoc();
console.log(doc.getState());


doc.sendToModeration();
console.log(doc.getState());

doc.sendToModeration();
console.log(doc.getState());

doc.publishDoc();
console.log(doc.getState());

doc.sendToModeration();
console.log(doc.getState());
