

const bebidasFrias = [
    {
        id: 1,
        nombre: "Frappe de cafe",
        precio: 75,
        categoria: "Bebida fria",
        tamano: "Grande"
    },
    {
        id: 2,
        nombre: "Te helado de limon",
        precio: 45,
        categoria: "Te",
        tamano: "Mediano"
    },
    {
        id: 3,
        nombre: "Latte frio",
        precio: 60,
        categoria: "Cafe frio",
        tamano: "Grande"
    },
    {
        id: 4,
        nombre: "Malteada de chocolate",
        precio: 70,
        categoria: "Malteada",
        tamano: "Grande"
    },
    {
        id: 5,
        nombre: "Cold Brew",
        precio: 55,
        categoria: "Cafe frio",
        tamano: "Mediano"
    }
];

const filtrados = bebidasFrias.filter(p => p.tamano == "Mediano");
const total = bebidasFrias.filter(p => p.tamano == "Grande").reduce((total, p) => total + p.precio, 0);
const promedio = (total / bebidasFrias.filter(p => p.tamano == "Grande").length);
const ordenados = [...bebidasFrias].sort((a, b) => a.precio - b.precio)



console.log("Lista de objectos filtrados:", filtrados);
console.log("Suma total de precio de todas las bebidas grandes: ", total);
console.log("Promedio: ", promedio);
console.log("Ordenados: ", ordenados);
