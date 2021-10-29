let url = 'https://api.github.com/users/Ofelia-1985/repos'
        fetch(url)
            .then(response => response.json())
            .then(data => mostrarData(data))
            .catch(error => console.log(error))
			
        const mostrarData = (data) => {
            console.log(data)
            let body = ''
            for (let i = 0; i<data.length; i++){
                body += `<tr><td>${data[i].name}</td><td>${data[i].html_url}</td><td>${data[i].language}</td></tr>`                
            }
            document.getElementById('data').innerHTML = body}