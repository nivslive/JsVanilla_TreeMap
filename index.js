import Home from './js/views/home.js'; // Supondo que isso configure o seu HTML e outros elementos
import { Boot } from "./js/index.js";

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        new Home;
        new Boot();
    }, 100); // Aguarde 100ms antes de instanciar
});