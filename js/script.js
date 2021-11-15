
var carousel = new Vue ({
    el: ".container",
    data: {
        users: [
            {
                userImg: 'img/01.jpg',
                userName: 'Michele',
                text: 'Hai portato a spasso il cane?',
                status:'sent'
            },
            {
                userImg: 'img/02.jpg',
                userName: 'Fabio',
                text: 'Ciao come stai?',
                status:'sent'
            },
            {
                userImg: 'img/03.jpg',
                userName: 'Samuele',
                text: 'La Marianna va in campagna.',
                status:'received'            },
            {
                userImg: 'img/04.jpg',
                userName: 'Luigi',
                text: 'Lo sai che ha aperto una nuova pizzeria?',
                status:'received'
            }
           
        ]
    },
   
})
