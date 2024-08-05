// Classe Component
export class Component {
    createAndAppend(tag, parent, attributes = {}) {
        const element = document.createElement(tag);
        Object.keys(attributes).forEach(key => element.setAttribute(key, attributes[key]));
        parent.appendChild(element);
        return element;
    }

    load(containerId, componentPath) {
        const container = this.createAndAppend('div', document.querySelector('body'), { id: containerId });
        fetch('js/'+componentPath)
            .then(response => response.text())
            .then(data => {
                container.innerHTML = data;
            });
    }
}
