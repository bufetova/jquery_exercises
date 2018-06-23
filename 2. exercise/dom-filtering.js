var $heroes = $('.hero');

// TODO: 1. Kolekcję elementów o klasie hero, ogranicz tylko do tych, które posiadają klasę isa-hero

$heroes.filter(".isa-hero").css("color", "red");

// TODO: 2. W kolekcji o klasie heroes-list, znajdź element o id best-hero

var $bestHero = $(".heroes-list").find("#best-hero");

// TODO: 3. Uchwyć pierwszy element kolekcji elementów o klasie hero

var $firstHero =$heroes.first().css("color", "green");

// TODO: 4. Uchwyć drugi element kolekcji elementów o klasie hero

var $secondHero = $heroes.eq(1).css("color", "pink");

