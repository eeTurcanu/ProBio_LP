function start() {
    if (sessionStorage.getItem("setup") === null) {
        var listings =  [
                {"id":0, "name":"Ardei gras roșu", "category":"legumes", "src":"assets/images/products/ardei-gras-rosu.png"},
                {"id":1, "name":"Cartofi albi noi", "category":"legumes", "src":"assets/images/products/cartofi-albi-noi.png"},
                {"id":2, "name":"Ceapă albă", "category":"legumes", "src":"assets/images/products/ceapa-alba.png"},
                {"id":3, "name":"Ceapă verde", "category":"legumes", "src":"assets/images/products/ceapa-verde.png"},
                {"id":4, "name":"Dovlecei", "category":"legumes", "src":"assets/images/products/dovlecei.png"},
                {"id":5, "name":"Morcovi", "category":"legumes", "src":"assets/images/products/morcovi.png"},
                {"id":6, "name":"Ridichi rosii", "category":"legumes", "src":"assets/images/products/ridichi-rosii.png"},
                {"id":7, "name":"Usturoi", "category":"legumes", "src":"assets/images/products/usturoi.png"},
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

function change_category(category) {
    sessionStorage.setItem('category', category);
    var container = document.getElementById("produse-div");
    container.innerHTML = "";
    var listings = JSON.parse(sessionStorage.getItem("listings"));
    for (i = 0; i < listings.length; i++) {
        if (listings[i].category == category) {
            var product = document.createElement("div");
            product.classList.add("product");
            product.id = i;

            var img = document.createElement("img");
            img.src = listings[i].src;

            var div = document.createElement("div");
            div.innerHTML = listings[i].name;

            product.append(img);
            product.append(div);
            container.append(product);
        }
    }
    if (container.innerHTML.length == 0) {
        container.innerHTML = "Nu exista anunturi pentru aceasta categorie la momentul de fata."
    }

}

function search() {
    var value = document.getElementById("search-bar").value;
    var category = sessionStorage.getItem('category');
    if (value.length > 0) {
        var container = document.getElementById("produse-div");
        container.innerHTML = "";
        var listings = JSON.parse(sessionStorage.getItem("listings"));
        for (i = 0; i < listings.length; i++) {
            if (listings[i].category == category && listings[i].name.toLowerCase().includes(value.toLowerCase())) {
                var product = document.createElement("div");
                product.classList.add("product");
                product.id = i;

                var img = document.createElement("img");
                img.src = listings[i].src;

                var div = document.createElement("div");
                div.innerHTML = listings[i].name;

                product.append(img);
                product.append(div);
                container.append(product);
            }
        }
        if (container.innerHTML.length == 0) {
            container.innerHTML = "Nu exista anunturi care sa se potriveasca cu criteriile de cautare."
        }
    } else {
        change_category(category);
    }
}

function create_listing() {
    var listings = JSON.parse(sessionStorage.getItem("listings"));

    var name = document.getElementById("title").value;
    var photo_src = document.getElementById("photo").value;
    var description = document.getElementById("description").value;
    var category = document.getElementById("category").value;

    listings.push({
        'id': listings.length,
        'name': name,
        'src': photo_src,
        'description': description,
        'category': category,
    })
    modify_listings(listings);
    update_listings_container();
}
