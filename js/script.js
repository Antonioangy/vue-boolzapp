var boolzapp = new Vue({
    el: '.container',
    data: {
        utenteAttivo: 0,
        users:   [   
            {   
            userImg:   'img/avatar_1.jpg',   
            userName:   'Michele',   
            visible:   true,   
            messages:   [   
                    {   
                    date:   '10/01/2020 15:30:55',   
                    text:   'Hai portato a spasso il cane?',   
                    status:   'sent'   
                    },   
                    {   
                    date:   '10/01/2020   15:50:00',   
                    text:   'Ricordati di dargli da mangiare',   
                    status:   'sent'   
                    },   
                    {   
                    date:   '10/01/2020   16:15:22',   
                    text:   'Tutto fatto!',   
                    status:   'received'   
                    }   
                ],   
            },   
            {   
            userImg:   'img/avatar_2.jpg',   
            userName:   'Fabio',   
            visible:   true,   
            messages:   [   
                    {   
                    date:   '20/03/2020 16:30:00',   
                    text:   'Ciao come stai?',   
                    status:   'sent'   
                    },   
                    {   
                    date:   '20/03/2020 16:30:55',   
                    text:   'Bene grazie! Stasera ci vediamo?',   
                    status:   'received'   
                    },   
                    {   
                    date:   '20/03/2020 16:35:00',   
                    text:   'Mi piacerebbe ma devo andare a fare la spesa.',   
                    status:   'sent'   
                    }   
                    ],   
                },       
              
            {   
            userImg:   'img/avatar_3.jpg',   
            userName:   'Samuele',   
            visible:   true,   
            messages:   [   
                    {   
                    date:   '28/03/2020 10:10:40',   
                    text:   'La Marianna va in campagna',   
                    status:   'received'   
                    },   
                    {   
                    date:   '28/03/2020 10:20:10',   
                    text:   'Sicuro di non aver sbagliato chat?',   
                    status:   'sent'   
                    },   
                    {   
                    date:   '28/03/2020 16:15:22',   
                    text:   'Ah scusa!',   
                    status:   'received'   
                    }   
                    ],   
                },   
            {   
            userImg:   'img/avatar_4.jpg',   
            userName:   'Luigi',   
            visible:   true,   
            messages:   [   
                    {   
                    date:   '10/01/2020 15:30:55',   
                    text:   'Lo  sai che ha aperto una nuova pizzeria?',   
                    status:   'sent'   
                    },   
                    {   
                    date:   '10/01/2020   15:50:00',   
                    text:   'Si, ma preferirei andare al cinema',   
                    status:   'received'   
                    }   
                    ],   
                },   
            ]   
    
    },
    methods: {
        cambiaChat(i) {
            this.utenteAttivo = i;
        },
        
    }
    
});
