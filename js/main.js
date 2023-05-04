const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];


// prendere gli oggetti all interno dell array
for (let i = 0; i < posts.length; i++) {
    
}

//crearci un post
let container = document.getElementById("container")
console.log(container)

function creapost() {
    // container post
    let postContainer = document.createElement("div")
    postContainer.classList.add("post")
    console.log(postContainer)
    // header post
    let postHeader = document.createElement("div")
    creaClasse(postHeader,"post__header")
    console.log(postHeader)
    // postMeta
    let postMeta =document.createElement("div")
    creaClasse(postMeta,"post-meta")
    console.log(postMeta)
    //postMeta__icon 
    let postMeta__icon =document.createElement("div")
    creaClasse(postMeta__icon,"post-meta__icon")
    console.log(postMeta__icon)
    postMeta__icon.innerHTML=posts[0].media=


// append
    appendo(container,postContainer)
    appendo(postContainer,postHeader)
    appendo(postHeader,postMeta)
    appendo(postMeta,postMeta__icon)

}

creapost()

function creaClasse(oggetto, valore) {
    oggetto.classList.add(valore)
}

function appendo(padre,figlio) {
    padre.appendChild(figlio)
}