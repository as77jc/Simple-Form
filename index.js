let emailFormData = document.getElementById('emailFormData');
emailFormData.addEventListener('submit', function (event) {
    event.preventDefault()
    
    let entryFormData = new FormData(event.target)
    let firstName = entryFormData.get('firstName')
    firstName = firstName[0].toUpperCase() +  firstName.slice(1).toLowerCase(); 
    
    
    let greetingMessage = "<h2>Greet Job dear, " + firstName + "! </h2><p>You information Received!</p><p>We contact you shortly ...</p>";
        
    let mainContent = document.getElementById('mainContent')
    mainContent.innerHTML = greetingMessage
    
});
