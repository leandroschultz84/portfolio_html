function getProjects(username = 'leandroschultz84') {
  const urlGitHub = `https://api.github.com/users/${username}/repos`;
  const loadingElement = document.getElementById('loading');
  const container = document.getElementById('my-projects-list');

  loadingElement.style.display = 'block';
  loadingElement.textContent = 'A carregar...';

  fetch(urlGitHub)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Erro ${response.status}: ${response.statusText}`);
      }
    return response.json();
})
    .then((repos) => {
    loadingElement.style.display = 'none';
    container.innerHTML = '';

// Ordena os repositórios por data de criação (mais recente primeiro)
repos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

repos.forEach(repo => {
  const card = document.createElement('div');
  card.className = 'project-card';

  const title = document.createElement('p');
  const link = document.createElement('a');
  link.href = repo.html_url;
  link.target = '_blank';
  link.textContent = repo.name;
  link.className = 'project-title';
  title.appendChild(link);

  const description = document.createElement('p');
  const descriptionLink = document.createElement('a');
  descriptionLink.href = repo.html_url;
  descriptionLink.target = '_blank';
  descriptionLink.textContent = repo.description || 'Sem descrição disponível.';
  descriptionLink.className = 'project-description';
  description.appendChild(descriptionLink);

  card.appendChild(title);
  card.appendChild(description);
  container.appendChild(card);
});
    })
    .catch((error) => {
      console.error('Erro ao buscar projetos:', error);
      loadingElement.textContent = 'Erro ao carregar projetos.';
    });
}

// Chama a função ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
  getProjects();
});



document.querySelectorAll('a.nav-links').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY - 100; // Ajusta o valor aqui
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

document.getElementById('logo').addEventListener('click', function(event) {
    

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


var header = document.getElementById('header');
var navigationHeader = document.getElementById('navigation_header');
var content = document.getElementById('content')
var showSidebar = false;

function toggleSidebar(){
    showSidebar = !showSidebar;
    if(showSidebar){
        navigationHeader.style.marginLeft = '-10vh';
        navigationHeader.style.animationName = 'showSidebar';
        content.style.filter = '';

    }else{
        navigationHeader.style.marginLeft = '-100vh';
        navigationHeader.style.animationName = '';
        content.style.filter = '';
    }
}

function closeSidebar(){
    if(showSidebar){
        toggleSidebar();
    }
}

window.addEventListener('resize', function(event){
    if(this.window.innerWidth > 768 && showSidebar){
        toggleSidebar();
    }
});

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggle-theme");

  // Verifica se há preferência salva
  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
  }

  toggleButton.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");

    // Salva a preferência
    if (document.body.classList.contains("light-mode")) {
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
    }
  });
});



document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggle-theme");

  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
  }

  toggleButton.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
    }
  });
});

setTimeout(() => {
  document.querySelector('i').style.transition = 'transform 0.2s ease';
}, 100);