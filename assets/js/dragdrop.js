const cLista = document.getElementById('lista')

Sortable.create(cLista, {
    animation: 150,
    chosenClass: "pulsado",
    ghostClass: "phantom",
    dragClass: "arrastrar",

    onEnd: () => {
        console.log('Elemento Insertado');
    }
});