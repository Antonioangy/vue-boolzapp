
var carousel = new Vue ({
    el: ".container",
    data: {
        users: [
            {
                userImg: 'img/01.jpg',
                userName: 'Michele',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                status:'sent'
            },
            {
                userImg: 'img/02.jpg',
                userName: 'Fabio',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                status:'sent'
            },
            {
                userImg: 'img/03.jpg',
                userName: 'Samuele',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                status:'received'            },
            {
                userImg: 'img/04.jpg',
                userName: 'Luigi',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                status:'received'
            }
           
        ]
    },
   
})
