//VEDO SE FUNZIONA VUE:
console.log('VUE OK', Vue);

//INIZIALIZZO L'APP VUE:
const app = Vue.createApp({

    //CAROSELLO CONTENENTE I DATI DELLE IMMAGINI:
    name: 'carousel', 
    data() {
        return {
            currentIndex: 0,
            pictures: [{

            //PRIMA IMMAGINE:
            url: 'img/01.webp',
            title: 'Marvel\'s Spiderman Miles Morale',
            description: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.'
        },
        {
            //SECONDA IMMAGINE:
            url: 'img/02.webp',
            title: 'Ratchet & Clank: Rift Apart',
            description: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality'
        },
        {
            //TERZA IMMAGINE:
            url: 'img/03.webp',
            title: 'Fortnite',
            description: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.'
        },
        {
            //QUARTA IMMAGINE:
            url: 'img/04.webp',
            title: 'Stray',
            description: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city'
        },
        {
            //QUINTA IMMAGINE:
            url: 'img/05.webp',
            title: 'Marvel\'s Avengers',
            description: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.'
        }
    ]
        }
    },

    computed: {
        //QUANDO ARRIVO ALL'ULTIMA FOTO:
        ultimaFoto() {
            return this.currentIndex === this.pictures.lenght - 1
        }
    },

    methods: {
        //VADO ALLA PROSSIMA FOTO:
        prossimo () {
            if (this.ultimaFoto) this.currentIndex = 0;
            else this.currentIndex++;
        },

        //VADO ALLA FOTO PRECEDENTE:
        precedente () {
            this.currentIndex--;
        },
}})

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