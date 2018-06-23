// TODO: Złap w selektor jQuery poniższe elementy i zapisz je do zmiennej o stosownej nazwie:
// 1. TODO: element o ID best-hero
// 2. TODO: elementy o klasie hero
// 3. TODO: elementy o klasie hero, nie zawierające elementu z id best-hero (użyć NOT z jQuery)
// 4. TODO: tylko parzyste elementy listy heroes-list
// 5. TODO: obiekt window
// 6.TODO: jednocześnie elementy o klasach container i row


var $bestHero = $("#best-hero");
var $hero = $(".hero");
var $notBestHero = $hero.not("#best-hero");
console.log($notBestHero);

var $evenHeroesList = $(".heroes-list > li:even");
var $windowObj = $(window);
var $multipleClasses = $(".container", ".row");