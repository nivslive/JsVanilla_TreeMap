import { TreeMap, CityManager } from "./classes/index.js";
import { Component } from "./classes/Helper/index.js";
export class Boot {
    
    render(Page) {
        this.page(Page);
        setTimeout(() => {
            this.load();
        }, 100);
    }

    page(Page) {
        return new Page();
    }

    load() {
        const component = new Component();
        const cityManager = new CityManager();
        const Treemap = new TreeMap(document.getElementById('myChart'));


        // Expor cityManager globalmente
        window.cityManager = cityManager;
        window.treemap = Treemap;


        document.getElementById('addCityBtn').addEventListener('click', () => {
            const name = document.getElementById('cityName').value;
            const value = parseFloat(document.getElementById('cityValue').value);
            if (name && !isNaN(value)) {
                cityManager.addCity(name, value);
                document.getElementById('cityName').value = '';
                document.getElementById('cityValue').value = '';
            }
        });
    }
}