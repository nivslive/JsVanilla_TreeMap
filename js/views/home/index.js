import { Component } from "../../classes/system/index.js";
export class Home {
    constructor() {
        const componentLoader = new Component();
        const path = '/views/home/components/';
        // Carregando os componentes
        componentLoader.load('header-container', path+'header.html');
        componentLoader.load('controls-container',path+'controls.html');
        componentLoader.load('search-container', path+'search.html');
        componentLoader.load('filter-buttons-container', path+'filter_buttons.html');
        componentLoader.load('city-list-container', path+'city_list.html');
        componentLoader.load('canvas-container', path+'canvas.html');
    }
}
