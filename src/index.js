console.log("Clientside code running")

const button = document.getElementById('getLocation');
button.addEventListener('click', function(e) {
    console.log('button was clicked');

    fetch('/clicked', {method: 'POST'})
    .then(function(response) {
        if(response.ok) {
            console.log("click was recorded");
            return;
        }
        throw new Error('Request failed');
    })
    .catch(function(error) {
        console.log(error);
    });
});