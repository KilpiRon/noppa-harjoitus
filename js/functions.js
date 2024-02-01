function noppa() {
    let diceimage = document.querySelector("#dice img")
    let diceimages = ["./img/noppa1.png", "./img/noppa2.png", "./img/noppa3.png", "./img/noppa4.png", "./img/noppa5.png", "./img/noppa6.png" ]

    let number = Math.floor(Math.random() * 6)

    diceimage.src = diceimages[number]
}
