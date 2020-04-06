class LocalStorage {
    constructor() {
        this.cityArr;
        this.defaultCity = "Adelaide";
    }

    getLocationData() {
        
    }

    setLocationData(city) {

        city = JSON.stringify(this.cityArr);
        localStorage.setItem("city", city);
    }
}