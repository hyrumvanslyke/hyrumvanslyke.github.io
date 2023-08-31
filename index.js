
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a")
    
    navLinks.forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault()
        const targetSection = document.querySelector(link.getAttribute("href"))
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop - 50, 
            behavior: "smooth"
          })
        }
      })
    })
  })
  const contactForm = document.querySelector("#emailForm")
  const submitBtn = document.querySelector(".submit-btn")
  const nameInput = document.querySelector("#name")
  const emailInput = document.querySelector("#email")
  const phoneInput  = document.querySelector("#phone")
  const messageInput = document.querySelector("#message")

  const publicKey = "YNLw3yYHoUV0QVbwX"
  const serviceId = "service_sixgxhu"
  const templateId = "template_w2l5w8u"
  
  emailjs.init(publicKey)

  contactForm.addEventListener("submit", e =>{
    e.preventDefault()

    submitBtn.innerText = "Just A Moment..."

    const inputFields = {
        name: nameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        message: messageInput.value
    }

    emailjs.send(serviceId, templateId, inputFields)
    .then(() =>{
        submitBtn.innerText = "Message Sent Successfully"

        nameInput.value =''
        emailInput.value =''
        phoneInput.value =''
        messageInput.value =''
    }, (error) =>{
        console.log(error)
        submitBtn.innerText = "Something Went Wrong"
    })
  })