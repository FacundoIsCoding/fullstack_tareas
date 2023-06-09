function changeColor() {
  document.querySelector(".cuadrado").style.background = "red";
  document.querySelector(".cuadrado2").style.background = "green";
  document.querySelector(".cuadrado3").style.background = "blue";
}

const mensaje = document.getElementById('mensaje');
const contador = document.getElementById('contador');

mensaje.addEventListener('input', function(e) {
    const target = e.target;
    const longitudMax = target.getAttribute('maxlength');
    const longitudAct = target.value.length;
    contador.innerHTML = `${longitudAct}/${longitudMax}`;
});

const alumnos = [
  {
    nombre: "Juan Gomez",

    nota: 7,
  },
  {
    nombre: "Pedro Rodriguez",

    nota: 4,
  },
  {
    nombre: "Roxana García",

    nota: 8,
  },
  {
    nombre: "Luciano Lopez",

    nota: 5,
  },
  {
    nombre: "Fernanda Gimenez",

    nota: 6,
  },
  {
    nombre: "Florencia Martinez",

    nota: 10,
  },
  {
    nombre: "Raul Sanchez",

    nota: 7,
  },
  {
    nombre: "Sandra Figueroa",

    nota: 8,
  },
];

const resultado = alumnos.filter(Number => Number.length <= 7);
console.log(resultado);