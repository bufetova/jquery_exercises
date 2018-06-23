/* TODO:1. Napisz skrypt, który po spowoduje, że po,
kliknięciu elementu o #scroll-to-top, strona zostanie płynnie przewinięta do góry */ /* $elem.animate */

var $page = $('html, body');
var $scrollBtn = $("#scroll-top-btn");

function goUp() {
  var scrollTime = 600;
  $page.animate({scrollTop: 0}, scrollTime);
}

$scrollBtn.on("click", goUp);

/* TODO:2. Napisz skrypt, który spowoduje, że linki w menu będą przewijać do odpowiedniej sekcji */

var $links = $(".nav a");

function goToSection() {
  var sectionRef = $(this).attr("href");
  var scrollTime = 400;
  $page.animate({scrollTop: $(sectionRef).offset().top}, scrollTime);
}

$links.on("click", goToSection);


/* TODO:3. Rozszerz skrypt z zadania drugiego, tak aby dodawał klasę active do aktywnego elementu listy na kliknięcie go i czyścił pozostałe */

var $links = $(".nav a");

function goToSection() {
  var sectionRef = $(this).attr("href");
  var scrollTime = 400;
  $page.animate({scrollTop: $(sectionRef).offset().top}, scrollTime);
  toggleActiveClassOnLinks($(this));
}

function toggleActiveClassOnLinks($selector) {
  $selector
    .parent()  // rodzic a
    .addClass("active")
    .siblings()
    .removeClass("active")
}

$links.on("click", goToSection);

/* TODO:4. Napisz skrypt, który będzie nasłuchiwać na scroll window,
jeśli scroll wyniesie więcej niż 80px, to doda klasę navbar-effect do elementu o klasie .navbar */

var $window = $(window);
var $nav = $(".navbar");


function addEffect() {
  if ($window.scrollTop() > 80) {
    $nav.addClass("navbar-effect");
  } else {
    $nav.removeClass("navbar-effect");
  }
}

$window.on("scroll", addEffect);


/* TODO:5. Napisz skrypt, który nasłuchuje na zaznaczenie checkboxa #terms-cbx, jeśli jest zaznaczony, to button #send-btn
to ma być odblokowany */

var $checkbox = $("#terms-cbx");
var $sendButton = $("#send-btn");

// function toogleDisabled() {
//   var agreementNotAccepted = !$checkbox.is(":checked");
//   $sendButton.prop("disabled", agreementNotAccepted);
// }

function toggleDisabled() {
  if ($checkbox.is(":checked")) {
      $sendButton.prop("disabled", false);
    } else {
      $sendButton.prop("disabled", true);
  }
};

$checkbox.on("click", toggleDisabled);

/* TODO:6. Wypełnij element select #cars, poniższą tablicą samochodów:
['BMW', 'Mazda', 'Mercedes', 'Audi'] */

/* TODO:7. Napisz metodę, która wyświetli w konsoli wybraną wartość z selecta z listą samochodów, po kliknięciu tego selecta. Nasłuchuj na event "change" na liście */


/* TODO:8. Napisz skrypt, który sprawdzi poprawność powtórznego hasła oraz jego wymagana długość (conajmniej 6 znaków).
jeśli warunki zostaną spełnione, odblokuj guzik #submit-btn */


/* TODO:EXTRAS!. ZADANIE DODATKOWE W MIEDZY CZASIE!
/ Na podstawie tablicy userów:
[
   {firstName: 'Tomasz', lastName: 'Doe', age: 23, city: 'London', id: 1},
   {firstName: 'Monika', lastName: 'Brosman', age: 35, city: 'Sosnowiec', id: 2},
   {firstName: 'Witek', lastName: 'Pitt', age: 40, city: 'Chicago', id: 3},
   {firstName: 'Kasia', lastName: 'Belucci', age: 15, city: 'Bruksela', id: 4}
];

- stworzyć dynamicznie tabelę <table> i wypełnić ją danymi z tablicy users.

A.
- Pierwsza komórka powinna zawierać checkbox, zaznaczenie checkboxa
  ma wyświetlić w konsoli ID danego użytkownika
- rząd powinien zawierać klasę table-row
- komórka powinna zawierać klasę table-cell
- najechanie na rząd ma go podświetlić

B.
- nad tabela być formularz, który pobiera dane usera i puszuje go do tablicy users i od razu pokazuje na widoku.
- formularz ma mieć select, z 5 miastami do wyboru (Twoja decyzja), pozostałe wartości pobrane z inputów textowych
- przycisk do dodania użytkownika ma być odblokowany jeśli wiek age > 18 a firstName ma więcej niż 3 litery
*/

