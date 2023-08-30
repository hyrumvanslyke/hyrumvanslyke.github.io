
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
  document.getElementById("emailForm").addEventListener("submit", function(event) {
    event.preventDefault()
  
    const name = document.getElementById("name").value
    const subject = document.getElementById("subject").value
    const body = document.getElementById("body").value
  
    const emailContent = `Name: ${name}\nSubject: ${subject}\nBody: ${body}`
    const mailtoLink = `mailto:hyrumevanslyke@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailContent)}`
  
    window.location.href = mailtoLink
  })
  
  