import { City } from './City.js';

export class CityManager {
    constructor() {
        this.data = [
            new City('São Paulo', 5000),
            new City('Rio de Janeiro', 3000),
            new City('Belo Horizonte', 2000),
            new City('Salvador', 1500),
        ];
        this.filteredData = [...this.data];
        this.cityList = document.getElementById('cityList');
        console.log(this.cityList);
        this.searchInput = document.getElementById('searchInput');
        this.valueSearchInput = document.getElementById('valueSearchInput');
        this.updateCityList();
    }

    addCity(name, value) {
        this.data.push(new City(name, value));
        this.filteredData = [...this.data];
        this.updateCityList();
        treemap.updateTreeMap(this.filteredData);
    }

    filterCities() {
        const searchValue = this.searchInput.value;
        const valueValue = this.valueSearchInput.value;
        this.updateCityList(searchValue, valueValue);
        treemap.updateTreeMap(this.filteredData);
    }

    filterByValue(condition) {
        const value = parseFloat(this.valueSearchInput.value);
        if (isNaN(value)) {
            this.filteredData = [...this.data];
        } else {
            this.filteredData = this.data.filter(city =>
                condition === 'greater' ? city.value > value : city.value < value
            );
        }
        this.updateCityList(this.searchInput.value, this.valueSearchInput.value);
        treemap.updateTreeMap(this.filteredData);
    }

    resetFilter() {
        this.filteredData = [...this.data];
        this.searchInput.value = '';
        this.valueSearchInput.value = '';
        this.updateCityList();
        treemap.updateTreeMap(this.filteredData);
    }

    updateCityList(search = '', value = '') {
        this.cityList.innerHTML = '';
        const filtered = this.filteredData.filter(city =>
            city.name.toLowerCase().includes(search.toLowerCase()) &&
            (!value || city.value.toString().includes(value))
        );

        filtered.forEach(city => {
            const li = document.createElement('li');
            li.className = 'city-info';
            li.textContent = `${city.name} - R$ ${city.value.toFixed(2)}`;

            const editBtn = document.createElement('button');
            editBtn.textContent = 'Editar';
            editBtn.addEventListener('click', () => this.editCity(city));
            li.appendChild(editBtn);

            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remover';
            removeBtn.addEventListener('click', () => this.removeCity(city));
            li.appendChild(removeBtn);

            this.cityList.appendChild(li);
        });
    }

    editCity(city) {
        const newValue = prompt(`Editar valor para ${city.name}:`, city.value);
        if (newValue !== null) {
            city.value = parseFloat(newValue);
            this.updateCityList();
            treemap.updateTreeMap(this.filteredData);
        }
    }

    removeCity(cityToRemove) {
        this.data = this.data.filter(city => city !== cityToRemove);
        this.filteredData = [...this.data];
        this.updateCityList();
        treemap.updateTreeMap(this.filteredData);
    }
}
