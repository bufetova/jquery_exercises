var $bestHero = $("#best-hero");


// TODO: 1. Chwytając za element #best-hero, złap referencję do diva .container i dodaj do niego jakiś css

$bestHero.closest(".container")
  .css ({
    border: "1px solid black",
    background: "green"

  });

// TODO: 2. Chwytając za element #best-hero, złap referencję do najbliższego diva .row

$bestHero.closest(".row");

// TODO: 3. Chwytając za element #best-hero, złap referencję do uprzedniego elementu listy

$bestHero.prev().css("color", "green");

// TODO: 4. Chwytając za element #best-hero, złap referencję do następnego elementu listy i dodaj jakiś cssvar

$bestHero.next().css("color", "violet");

// TODO: 5. Chwytając za element #best-hero, złap referencję do jego bezpośredniego rodzica

$bestHero.parent();

// TODO: 6. Chwytając za element #best-hero, złap referencję do jego bezpośredniego rodzica i dodaj do niego jakąś klasę oraz atrybut name

$bestHero.parent().addClass("name");
