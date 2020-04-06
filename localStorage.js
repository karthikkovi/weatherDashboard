class LocalStorage {
    constructor() {
        this.cityArr = ["Adelaide", "Brisbane", "Canberra", "Darwin", "Hobart", "Melbourne", "Perth", "Sydney"];
        this.defaultCity = "Adelaide";
    }

    getLocationData() {

    }

    setLocationData() {

        let city = JSON.stringify(this.cityArr);
        localStorage.setItem("city", city);
    }

}