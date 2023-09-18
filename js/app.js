document.addEventListener("DOMContentLoaded", ()=>{
  const callToAction = document.getElementById("callToAction");
  const closeForm = document.getElementById("closeForm");
  const formContainer = document.getElementById("form-screen");
  const formulario = document.getElementById("formulario_get_info");
  const inputs = document.querySelectorAll(".inputs-container .label");
  const emailIncorrect = document.getElementById("email-incorrect");
  const check_invalid = document.getElementById("check-invalid");
  const  mail_sent= document.getElementById("mail-sent");

  inputs.forEach(element =>{
    element.addEventListener("click", ()=>{
      element.classList.toggle("selected");
      console.log("Se activa");
    });
  });

  // Abrir form
  callToAction.addEventListener("click", ()=>{
    formContainer.classList.remove("hidden");
  })

  // Cerrar form
  closeForm.addEventListener("click", ()=>{
    formContainer.classList.add("hidden");
  });

  formulario.addEventListener("submit", (e)=>{
    let _error = false;
    e.preventDefault();
    const form_data = new FormData(formulario);
    if(!form_data.get("mail").match("^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$")){
      _error = true;
      emailIncorrect.classList.add("display");
      
    }else{
      emailIncorrect.classList.remove("display");
    }
    
    if((form_data.get("crossfit") === null) && (form_data.get("calisthenics") === null) && (form_data.get("powerlifting") === null)){
      _error = true;
      check_invalid.classList.add("display");
    }else{
      check_invalid.classList.remove("display");
    }

    if(!_error){
      mail_sent.classList.add("display");
      setTimeout(()=>{
        mail_sent.classList.remove("display");
      }, 2000);
    }
  });

});