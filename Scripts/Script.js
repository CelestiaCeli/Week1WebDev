function apiCall(){
    fetch('https://random-word-api.vercel.app/api?words=1&length=5')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
        })
    .then(data => {
        console.log('Data:', data);
        // Hnadle the data here
    })
    .catch (error => { console.errror('Error fetching data:', error);
    });
}

