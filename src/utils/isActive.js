
export const isActive = ()=>{
  let modalSearch = document.querySelector(".modal-search")
  let formsModal = document.querySelector(".forms-modal")
  let main = document.querySelector('main');
  modalSearch.classList.toggle('modal-search-active')
  formsModal.classList.toggle('modal-forms-active');
  main.classList.toggle('main-false')

  
}