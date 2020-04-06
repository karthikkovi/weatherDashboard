class Storage {
    constructor() {
        this.cityArr = ["Adelaide", "Brisbane", "Canberra", "Darwin", "Hobart", "Melbourne", "Perth", "Sydney"];
    }

    setLocationData() {

        let city = JSON.stringify(this.cityArr);
        localStorage.setItem("city", city);
        let li;
        this.cityArr.reverse();

        let cities = document.querySelector(".cities");

        this.cityArr.forEach(city => {
            li = document.createElement("li");
            li.classList.add("list-group-item");
            li.textContent = city;
            cities.prepend(li);
        })
    }

}