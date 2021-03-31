
window.onload = function(){
  let emailState = false;

  let emailModal = document.getElementsByClassName('email-modal')[0]

  let closeModal = document.getElementsByClassName('email-modal__close-btn')[0]
  
  let showModal = () => {
    if(emailState == false){
      emailModal.classList.add('email-modal--visible');
      emailState = true
    }
  }
  closeModal.addEventListener('click', () => {
    emailModal.classList.remove('email-modal--visible');
  });

 
    document.body.addEventListener('mouseleave', () => {
      showModal();
    });
  
  
  console.log(document)
}