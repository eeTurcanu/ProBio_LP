function start() {
    if (sessionStorage.getItem("setup") === null) {
        var listings =  [
                {"id":0, "name":"Ardei gras roșu", "category":"legumes", "src":"assets/images/products/ardei-gras-rosu.png"},
                {"id":1, "name":"Cartofi albi noi", "src":"assets/images/products/cartofi-albi-noi.png"},
                {"id":2, "name":"Ceapă albă", "src":"assets/images/products/ceapa-alba.png"},
                {"id":3, "name":"Ceapă verde", "src":"assets/images/products/ceapa-verde.png"},
                {"id":4, "name":"Dovlecei", "src":"assets/images/products/dovlecei.png"},
                {"id":5, "name":"Morcovi", "src":"assets/images/products/morcovi.png"},
                {"id":6, "name":"Ridichi rosii", "src":"assets/images/products/ridichi-rosii.png"},
                {"id":7, "name":"Usturoi", "src":"assets/images/products/usturoi.png"},
            ];
        listings = JSON.stringify(listings);
        sessionStorage.setItem("listings", listings);
        sessionStorage.setItem("setup", true);
    }
}

function update_listings_container() {
    var container = document.getElementById("div-produse");
    container.innerHTML = "";
    var listings = JSON.parse(sessionStorage.getItem("listings"));
    for (i = 0; i < listings.length; i++) {
        var product = document.createElement("div");
        product.classList.add("product");
        product.id = i;

        var img = document.createElement("img");
        img.src = listings[i].src;

        var div = document.createElement("div");
        div.innerHTML = listings[i].name;
        div.innerHTML += `<button class="remove-listing" onclick="remove_listing(${listings[i].id})"></button>`;

        product.append(img);
        product.append(div);
        container.append(product);
    }
}

function modify_listings(listings) {
    listings = JSON.stringify(listings);
    sessionStorage.setItem("listings", listings);
}

function remove_listing(listing_id) {
    if (confirm("Sigur vrei sa stergi anuntul?") == true)
    {
        var listings = JSON.parse(sessionStorage.getItem("listings"));
        for (i = 0; i < listings.length; i++) {
            if (listings[i].id == listing_id) {
                listings.splice(i, 1);
                modify_listings(listings);
                update_listings_container();
                break;
            }
        }
    }
}
