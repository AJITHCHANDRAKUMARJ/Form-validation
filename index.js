const formEl = document.querySelector("#form")
const userNameEl = document.querySelector("#userName")
const emailEl = document.querySelector("#email")
const passwordEl = document.querySelector("#password")
const cPasswordEl = document.querySelector("#cPassword")

formEl.addEventListener("submit", (e)=>{
   
    if(!validateInput()){
        e.preventDefault()
    }
})

function validateInput(){

const userNameVal = userNameEl.value.trim()
const emailVal = emailEl.value.trim()
const passwordVal = passwordEl.value.trim()
const cPasswordVal = cPasswordEl.value.trim()
let success = true
         if (userNameVal===""){
            success=false
             setError(userNameEl, "Username required")
         }else{
            setSuccess(userNameEl)
         }
         if(emailVal===""){
            success=false;
             setError(emailEl,"Email is required")
         }else if (!validateEmail(emailVal)){
            success=false
            setError(emailEl,"Please enter a valid email")
         }else{
             setSuccess(emailEl)
         }
         if(passwordVal===""){
            success=false
            setError(passwordEl,"Password required")
         }else if(passwordVal.length< 8 ){
            success=false
            setError(passwordEl,"Password must be 8 characters long")
         }else{
            setSuccess(passwordEl)
         }
         if(cPasswordVal===""){
            success=false
            setError(cPasswordEl, "Re-enter password")
         }else if (cPasswordVal !==passwordVal ){
            setError(cPasswordEl, "Password does not match")
         }else {
            setSuccess(cPasswordEl)
         }
             
}

function setError(element, message){
    const inputGroup = element.parentElement
    const errorElement = inputGroup.querySelector(".error")
   errorElement.innerHTML = message

   inputGroup.classList.add("error")
   inputGroup.classList.remove("success")
}

function setSuccess(element){
    const inputGroup = element.parentElement
    const errorElement = inputGroup.querySelector(".error")
    errorElement.innerHTML = ""

   inputGroup.classList.remove("error")
   inputGroup.classList.add("success")
}

const validateEmail = (emailVal) => {
    return String(emailVal)
    .toLowerCase()
    .match( 
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
}
