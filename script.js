//VEDO SE FUNZIONA VUE:
console.log('VUE OK', Vue);

//INIZIALIZZO L'APP VUE:
const app = Vue.createApp({
    name: 'carousel', 
    data() {
        return {
            currentIndex: 0,
            pictures: [{
            url: 'img/01.webp',
            title: 'Immagine 1',
            description: 'Questa è la prima immagine'
        },
        {
            url: 'img/02.webp',
            title: 'Immagine 2',
            description: 'Questa è la seconda immagine'
        },
        {
            url: 'img/03.webp',
            title: 'Immagine 3',
            description: 'Questa è la terza immagine'
        },
        {
            url: 'img/04.webp',
            title: 'Immagine 4',
            description: 'Questa è la quarta immagine'
        },
        {
            url: 'img/05.webp',
            title: 'Immagine 5',
            description: 'Questa è la quinta immagine'
        }
    ]
        }
    },
    methods: {
        goToNext () {
            this.currentIndex++;
        },
        goToPrev () {
            this.currentIndex++;
        },
    }
});

//LA MONTO NELL'ELEMENTO HTML RADICE:
app.mount('#root');




//QUI DI SEGUITO CODICE JAVASCRIPT ESERCIZIO CAROSELLO:

/*
//VEDO SE FUNZIONA 
console.log('JS OK');

//RECUPERIAMO LA GALLERY DAL DOM:
const gallery = document.querySelector('.gallery');

//RECUPERIAMO I PULSANTI DAL DOM:
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

//PREPARO LE IMMAGINI:
const sources = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp']

//PER OGNI SOURCE, CREO UN TAG IMG:
for (let i = 0; i < sources.length; i++) {
    const imageElement = document.createElement('img');
    imageElement.src = sources[i];
    imageElement.alt = `'immagine' ${i + 1}`;
    gallery.appendChild(imageElement);
}

//RECUPERIAMO TUTTE LE IMMAGINI:
const images = document.querySelectorAll('#carousel img');

//PREPARO LA GESTIONE DELL'INDICE:
let currentIndex = 0;

//IMPOSTIAMO LA PRIMA IMMAGINE COME QUELLA ATTIVA:
images[currentIndex].classList.add('active');

//METTO IN ASCOLTO IL NEXT:
nextButton.addEventListener('click', function () {
    if(currentIndex === images.length - 1) return;

    //RIMUOVERE LA CLASSE ATTIVA DALL'IMMAGINE CORRISPONDENTE ALL'INDICE:
    images[currentIndex].classList.remove('active');

    //INCREMENTO L'INDICE:
    currentIndex++;

    //AGGIUNGO LA CLASSE ATTIVA ALL'IMMAGINE CORRISPONDENTE AL NUOVO INDICE:
    images[currentIndex].classList.add('active');

});

//METTO IN ASCOLTO IL PREV:
prevButton.addEventListener('click', function () {
    if (!currentIndex) return;

    //RIMUOVERE LA CLASSE ATTIVA DALL'IMMAGINE CORRISPONDENTE ALL'INDICE:
    images[currentIndex].classList.remove('active');

    //DECREMENTO L'INDICE:
    currentIndex--;

    //AGGIUNGO LA CLASSE ATTIVA ALL'IMMAGINE CORRISPONDENTE AL NUOVO INDICE:
    images[currentIndex].classList.add('active');
}) */