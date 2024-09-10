const QUESTIONS = [
  {
    text: "Co robi metoda Array.prototype.map() w JavaScript?",
    answers: [
      {
        text: "Modyfikuje każdy element tablicy według funkcji przekazanej jako argument.",
        isCorrect: false,
      },
      {
        text: "Tworzy nową tablicę zawierającą wyniki wywołania funkcji dla każdego elementu tablicy.",
        isCorrect: true,
      },
      {
        text: "Filtruje tablicę według określonego kryterium.",
        isCorrect: false,
      },
      { text: "Nic, to jest błędna metoda w JavaScript.", isCorrect: false },
    ],
  },
  {
    text: "Jakie słowo kluczowe w JavaScript tworzy zmienną o zasięgu blokowym?",
    answers: [
      { text: "var", isCorrect: false },
      { text: "let", isCorrect: true },
      { text: "const", isCorrect: false },
      { text: "block", isCorrect: false },
    ],
  },
  {
    text: "Jaka metoda jest używana do przekształcania obiektu JSON w łańcuch znaków?",
    answers: [
      { text: "JSON.parse()", isCorrect: false },
      { text: "JSON.stringify()", isCorrect: true },
      { text: "JSON.toObject()", isCorrect: false },
      { text: "JSON.toString()", isCorrect: false },
    ],
  },
  {
    text: "Który z poniższych nie jest typem danych w JavaScript?",
    answers: [
      { text: "undefined", isCorrect: false },
      { text: "number", isCorrect: false },
      { text: "boolean", isCorrect: false },
      { text: "character", isCorrect: true },
    ],
  },
  {
    text: "Jakie wyrażenie tworzy funkcję strzałkową w JavaScript?",
    answers: [
      { text: "const func = () => {}", isCorrect: true },
      { text: "function func() {}", isCorrect: false },
      { text: "var func = function() {}", isCorrect: false },
      { text: "let func = => {}", isCorrect: false },
    ],
  },
  {
    text: "Jak zadeklarować klasę w JavaScript?",
    answers: [
      { text: "class MyClass {}", isCorrect: true },
      { text: "function MyClass() {}", isCorrect: false },
      { text: "create class MyClass {}", isCorrect: false },
      { text: "new Class MyClass {}", isCorrect: false },
    ],
  },
  {
    text: "Która metoda nie służy do iteracji po elementach tablicy?",
    answers: [
      { text: "forEach()", isCorrect: false },
      { text: "map()", isCorrect: false },
      { text: "filter()", isCorrect: false },
      { text: "concat()", isCorrect: true },
    ],
  },
  {
    text: "W jaki sposób można dodać element na koniec tablicy?",
    answers: [
      { text: "array.push(element)", isCorrect: true },
      { text: "array.pop(element)", isCorrect: false },
      { text: "array.unshift(element)", isCorrect: false },
      { text: "array.shift(element)", isCorrect: false },
    ],
  },
  {
    text: "Jak sprawdzić, czy wartość jest typu 'Array'?",
    answers: [
      { text: "Array.isArray(value)", isCorrect: true },
      { text: "value.isArray()", isCorrect: false },
      { text: "value instanceof Array", isCorrect: false },
      { text: "typeof value === 'array'", isCorrect: false },
    ],
  },
  {
    text: "Jaki jest wynik porównania '5' == 5?",
    answers: [
      { text: "true, ponieważ wartości są równe.", isCorrect: true },
      { text: "false, ponieważ typy są różne.", isCorrect: false },
      { text: "TypeError", isCorrect: false },
      { text: "undefined", isCorrect: false },
    ],
  },
  {
    text: "Jakie jest domyślne wyświetlanie elementu <div> w HTML?",
    answers: [
      { text: "inline", isCorrect: false },
      { text: "block", isCorrect: true },
      { text: "inline-block", isCorrect: false },
      { text: "flex", isCorrect: false },
    ],
  },
  {
    text: "Jaką funkcję w JavaScript możemy użyć, aby opóźnić wykonanie kodu?",
    answers: [
      { text: "setTimeout()", isCorrect: true },
      { text: "delay()", isCorrect: false },
      { text: "wait()", isCorrect: false },
      { text: "setInterval()", isCorrect: false },
    ],
  },
  {
    text: "Które z poniższych jest poprawnym sposobem na zaimportowanie pliku CSS do HTML?",
    answers: [
      { text: "<link rel='stylesheet' href='styles.css'>", isCorrect: true },
      { text: "<import rel='stylesheet' href='styles.css'>", isCorrect: false },
      { text: "<style href='styles.css'>", isCorrect: false },
      { text: "<stylesheet link='styles.css'>", isCorrect: false },
    ],
  },
  {
    text: "Który atrybut HTML pozwala na wyświetlenie tekstu alternatywnego dla obrazka?",
    answers: [
      { text: "title", isCorrect: false },
      { text: "alt", isCorrect: true },
      { text: "href", isCorrect: false },
      { text: "src", isCorrect: false },
    ],
  },
  {
    text: "Jaką metodą można usunąć ostatni element z tablicy w JavaScript?",
    answers: [
      { text: "pop()", isCorrect: true },
      { text: "shift()", isCorrect: false },
      { text: "push()", isCorrect: false },
      { text: "splice()", isCorrect: false },
    ],
  },
  {
    text: "Co wyświetli console.log([1, 2, 3].length)?",
    answers: [
      { text: "1", isCorrect: false },
      { text: "2", isCorrect: false },
      { text: "3", isCorrect: true },
      { text: "undefined", isCorrect: false },
    ],
  },
  {
    text: "Jakie wartości przyjmuje właściwość 'position' w CSS?",
    answers: [
      { text: "static, relative, absolute, fixed, sticky", isCorrect: true },
      { text: "block, inline, relative, absolute", isCorrect: false },
      { text: "static, inline, block, flex", isCorrect: false },
      { text: "relative, block, inline, static", isCorrect: false },
    ],
  },
  {
    text: "Co robi metoda 'map()' w JavaScript?",
    answers: [
      {
        text: "Zwraca nową tablicę z przekształconymi elementami oryginalnej tablicy.",
        isCorrect: true,
      },
      { text: "Usuwa elementy z tablicy.", isCorrect: false },
      { text: "Zwraca pierwszy element spełniający warunek.", isCorrect: false },
      { text: "Sortuje elementy tablicy.", isCorrect: false },
    ],
  },
  {
    text: "Jaką wartość zwróci wyrażenie 'null == undefined' w JavaScript?",
    answers: [
      { text: "true", isCorrect: true },
      { text: "false", isCorrect: false },
      { text: "TypeError", isCorrect: false },
      { text: "null", isCorrect: false },
    ],
  },
  {
    text: "Który znacznik HTML jest używany do tworzenia odnośników do innych stron?",
    answers: [
      { text: "<a>", isCorrect: true },
      { text: "<link>", isCorrect: false },
      { text: "<p>", isCorrect: false },
      { text: "<href>", isCorrect: false },
    ],
  },
  {
    text: "Jaką funkcję w JavaScript można użyć do połączenia dwóch tablic?",
    answers: [
      { text: "concat()", isCorrect: true },
      { text: "join()", isCorrect: false },
      { text: "merge()", isCorrect: false },
      { text: "append()", isCorrect: false },
    ],
  },
  {
    text: "Co oznacza 'box-sizing: border-box' w CSS?",
    answers: [
      {
        text: "Szerokość i wysokość elementu obejmuje także padding i border.",
        isCorrect: true,
      },
      { text: "Szerokość i wysokość obejmują jedynie treść elementu.", isCorrect: false },
      { text: "Element jest wyświetlany jako blok.", isCorrect: false },
      { text: "Obejmuje jedynie marginesy.", isCorrect: false },
    ],
  },
  {
    text: "Które zdarzenie w JavaScript jest wywoływane, gdy użytkownik kliknie element?",
    answers: [
      { text: "click", isCorrect: true },
      { text: "hover", isCorrect: false },
      { text: "mousedown", isCorrect: false },
      { text: "keydown", isCorrect: false },
    ],
  },
  {
    text: "Która funkcja w JavaScript zwraca losową liczbę z zakresu od 0 do 1?",
    answers: [
      { text: "Math.random()", isCorrect: true },
      { text: "Math.round()", isCorrect: false },
      { text: "Math.floor()", isCorrect: false },
      { text: "Math.randomRange()", isCorrect: false },
    ],
  },
  {
    text: "Jaka jest różnica między '==' a '===' w JavaScript?",
    answers: [
      { text: "'===' porównuje zarówno wartość, jak i typ danych.", isCorrect: true },
      { text: "'==' porównuje wyłącznie typ danych.", isCorrect: false },
      { text: "'===' porównuje wyłącznie wartość.", isCorrect: false },
      { text: "'==' porównuje wartość i typ danych.", isCorrect: false },
    ],
  },
  {
    text: "Jakie właściwości w CSS można użyć do stworzenia zaokrąglonych narożników elementu?",
    answers: [
      { text: "border-radius", isCorrect: true },
      { text: "border-style", isCorrect: false },
      { text: "corner-style", isCorrect: false },
      { text: "round-corner", isCorrect: false },
    ],
  },
  {
    text: "Co zwróci wyrażenie '2 + 2 + '2'' w JavaScript?",
    answers: [
      { text: "'42'", isCorrect: true },
      { text: "'22'", isCorrect: false },
      { text: "'8'", isCorrect: false },
      { text: "'NaN'", isCorrect: false },
    ],
  },
  {
    text: "Który atrybut HTML jest używany do określenia unikalnego identyfikatora elementu?",
    answers: [
      { text: "id", isCorrect: true },
      { text: "class", isCorrect: false },
      { text: "name", isCorrect: false },
      { text: "key", isCorrect: false },
    ],
  },
  {
    text: "Jaką metodą JavaScript można zamienić wszystkie elementy tablicy na ciąg znaków, oddzielone przecinkami?",
    answers: [
      { text: "join()", isCorrect: true },
      { text: "split()", isCorrect: false },
      { text: "toString()", isCorrect: false },
      { text: "concat()", isCorrect: false },
    ],
  },
  {
    text: "Jakie jest domyślne zachowanie elementów blokowych w HTML?",
    answers: [
      {
        text: "Zajmują całą szerokość dostępnego kontenera i zaczynają nowy wiersz.",
        isCorrect: true,
      },
      {
        text: "Zajmują tylko tyle szerokości, ile potrzebują, i mogą być wyświetlane obok siebie.",
        isCorrect: false,
      },
      { text: "Są wyświetlane jako linia pozioma.", isCorrect: false },
      { text: "Są wyświetlane tylko wtedy, gdy mają zawartość.", isCorrect: false },
    ],
  },
];
export default QUESTIONS;
