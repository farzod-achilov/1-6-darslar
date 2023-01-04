/**
 * @param {String} selector .
 * @param {Element} selector .
 * @return {Element} .
 */

const elLabel = findElement("label");
const elForm = findElement("form")
const elLabelName = document.querySelector("[data-label-name]")
const elLabelData = document.querySelector("[data-label-data]")
const eltodos = document.querySelector("[data-todos]")

function findElement(selector, parentElement = document) {
   return parentElement.querySelector(selector)
}



elForm.addEventListener("submit", (evt) => {
   evt.preventDefault();
   const todos = [];

   const todoItem = {
      content: null,
      isDone: false,
      createdAt:null,
   }

   todoItem.content = elLabelName.value
   todoItem.createdAt = elLabelData.value
   todos.push(todoItem)
   return todoItem
   


})


