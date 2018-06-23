// var $heroesList = $('.heroes-list');
// /* TODO: 1. Do listy o klasie heroes-list dodaj nowy element listy <li> z nowym Heroesem:
//
// // a) jako pierwszy element listy
// // b) jako ostatni element listy */
//
//
// var $newHeroFirst = $("<li> Deadpool </li>");
// var $newHeroLast = $("<li> Loki </li>");
// $heroesList.prepend($newHeroFirst);
// $heroesList.append($newHeroLast);
//
// // var $getFirstitem = () => $("<li> Cześć </li>");
// // $heroesList.prepend($getFirstitem);
// // $heroesList.append($getFirstitem);
//
//
//
// // TODO: 2. Za listą heroes-list dodaj paragraf z dowolonym tekstem
//
// var $newPara = $("<p> Siemka! </p>");
// $heroesList.after($newPara);
//
// // TODO: 3. Każdemu elementowi o klasie hero dodaj klasę marvel-hero
//
// $(".hero").addClass("marvel-hero");
//
// // TODO: 4.Usuń ostatni element listy
//
// $heroesList.find("li").last().remove();

var $button = $("button");
var $container = $(".container");

function toggleContainer() {
  $container
    .fadeToggle(300);

}

$button.on("click", toggleContainer);



