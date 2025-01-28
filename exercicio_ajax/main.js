document.addEventListener('DOMContentLoaded', function() {
    const nome = document.querySelector('#nome');
    const userName = document.querySelector('#username');
    const avatar = document.querySelector('#avatar');
    const repo = document.querySelector('#repositories');
    const followers = document.querySelector('#followers');
    const following = document.querySelector('#following');
    const link = document.querySelector('#link');

    fetch('https://api.github.com/users/BetoCruz')
    .then(function(response){
        return response.json()        
    })   
    .then(function(data){
        nome.innerText = data.name;
        userName.innerText = data.login;
        avatar.src = data.avatar_url;
        followers.innerText = data.followers;
        following.innerText = data.following;
        repo.innerText = data.public_repos;
        link.href = data.html_url;
    })
     .catch(function(error){
        alert('não foi possivel acessar a API')
    })
   
    console.log(response);



})






