export class Router {
    get(file) {
        window.onload = function() {
        fetch(file)
            .then(response => response.text())
            .then(data => {
                document.body.innerHTML = data;
            })
            .catch(error => console.error('Erro ao carregar o conteúdo:', error));
        };
    }
}