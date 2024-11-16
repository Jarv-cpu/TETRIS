const body = document.querySelector("body")
const canvas = document.querySelector("#screen")
canvas.height = window.innerHeight / 1.4
canvas.width = canvas.height / 2
const ctx = canvas.getContext("2d")
const scoreScreen = document.querySelector("#score")
const siguientePiezaCanvas = document.querySelector("#siguientaPiezaCanvas")
const nextText = document.querySelector("#nextText")
siguientePiezaCanvas.height = canvas.height / 100 * 20
siguientePiezaCanvas.width = canvas.width / 100 * 60
const ctx2 = siguientePiezaCanvas.getContext("2d")
const colores = ["", "#ffff00", "#800080", "#ff0000", "#00ff00", "#ff7f00", "#0000ff", "#00ffff"]
const piezas = [
    class O {
        y = 1
        x = 4
        color = 1
        1 = {
            maximaY: 21,
            check(Y, X) {
                if (tablero[Y][X] == 0 && tablero[Y - 1][X] == 0 && tablero[Y][X + 1] == 0 && tablero[Y - 1][X + 1] == 0) {
                    return true
                }
            },
            erase(Y, X, screen) {
                screen[Y][X] = 0
                screen[Y - 1][X] = 0
                screen[Y][X + 1] = 0
                screen[Y - 1][X + 1] = 0
            },
            draw(Y, X, screen) {
                screen[Y][X] = pieza.color
                screen[Y - 1][X] = pieza.color
                screen[Y][X + 1] = pieza.color
                screen[Y - 1][X + 1] = pieza.color
            },
        }
    },
    class T {
        y = 1
        x = 4
        color = 2
        1 = {
            maximaY: 21,
            check(Y, X) {
                if (tablero[Y][X] == 0 && tablero[Y - 1][X] == 0 && tablero[Y][X - 1] == 0 && tablero[Y][X + 1] == 0) {
                    return true
                }
            },
            erase(Y, X, screen) {
                screen[Y][X] = 0
                screen[Y - 1][X] = 0
                screen[Y][X - 1] = 0
                screen[Y][X + 1] = 0
            },
            draw(Y, X, screen) {
                screen[Y][X] = pieza.color
                screen[Y - 1][X] = pieza.color
                screen[Y][X - 1] = pieza.color
                screen[Y][X + 1] = pieza.color
            },
        }
        2 = {
            maximaY: 20,
            check(Y, X) {
                if (tablero[Y][X] == 0 && tablero[Y - 1][X] == 0 && tablero[Y + 1][X] == 0 && tablero[Y][X + 1] == 0) {
                    return true
                }
            },
            erase(Y, X, screen) {
                screen[Y][X] = 0
                screen[Y - 1][X] = 0
                screen[Y + 1][X] = 0
                screen[Y][X + 1] = 0
            },
            draw(Y, X, screen) {
                screen[Y][X] = pieza.color
                screen[Y - 1][X] = pieza.color
                screen[Y + 1][X] = pieza.color
                screen[Y][X + 1] = pieza.color
            },
        }
        3 = {
            maximaY: 20,
            check(Y, X) {
                if (tablero[Y][X] == 0 && tablero[Y][X + 1] == 0 && tablero[Y][X - 1] == 0 && tablero[Y + 1][X] == 0) {
                    return true
                }
            },
            erase(Y, X, screen) {
                screen[Y][X] = 0
                screen[Y][X - 1] = 0
                screen[Y][X + 1] = 0
                screen[Y + 1][X] = 0
            },
            draw(Y, X, screen) {
                screen[Y][X] = pieza.color
                screen[Y][X - 1] = pieza.color
                screen[Y][X + 1] = pieza.color
                screen[Y + 1][X] = pieza.color
            },
        }
        4 = {
            maximaY: 20,
            check(Y, X) {
                if (tablero[Y][X] == 0 && tablero[Y - 1][X] == 0 && tablero[Y + 1][X] == 0 && tablero[Y][X - 1] == 0) {
                    return true
                }
            },
            erase(Y, X, screen) {
                screen[Y][X] = 0
                screen[Y - 1][X] = 0
                screen[Y + 1][X] = 0
                screen[Y][X - 1] = 0
            },
            draw(Y, X, screen) {
                screen[Y][X] = pieza.color
                screen[Y - 1][X] = pieza.color
                screen[Y + 1][X] = pieza.color
                screen[Y][X - 1] = pieza.color
            },
        }
    },
    class S {
        y = 1
        x = 4
        color = 3
        1 = {
            maximaY: 21,
            check(Y, X) {
                if (tablero[Y][X] == 0
                    && tablero[Y][X - 1] == 0
                    && tablero[Y - 1][X] == 0
                    && tablero[Y - 1][X + 1] == 0) {
                    return true
                }
            },
            erase(Y, X, screen) {
                screen[Y][X] = 0
                screen[Y][X - 1] = 0
                screen[Y - 1][X] = 0
                screen[Y - 1][X + 1] = 0
            },
            draw(Y, X, screen) {
                screen[Y][X] = pieza.color
                screen[Y][X - 1] = pieza.color
                screen[Y - 1][X] = pieza.color
                screen[Y - 1][X + 1] = pieza.color
            },
        }
        2 = {
            maximaY: 20,
            check(Y, X) {
                if (tablero[Y][X] == 0
                    && tablero[Y - 1][X] == 0
                    && tablero[Y][X + 1] == 0
                    && tablero[Y + 1][X + 1] == 0) {
                    return true
                }
            },
            erase(Y, X, screen) {
                screen[Y][X] = 0
                screen[Y - 1][X] = 0
                screen[Y][X + 1] = 0
                screen[Y + 1][X + 1] = 0
            },
            draw(Y, X, screen) {
                screen[Y][X] = pieza.color
                screen[Y - 1][X] = pieza.color
                screen[Y][X + 1] = pieza.color
                screen[Y + 1][X + 1] = pieza.color
            },
        }
        3 = {
            maximaY: 20,
            check(Y, X) {
                if (tablero[Y][X] == 0
                    && tablero[Y + 1][X] == 0
                    && tablero[Y][X + 1] == 0
                    && tablero[Y + 1][X - 1] == 0) {
                    return true
                }
            },
            erase(Y, X, screen) {
                screen[Y][X] = 0
                screen[Y + 1][X] = 0
                screen[Y][X + 1] = 0
                screen[Y + 1][X - 1] = 0
            },
            draw(Y, X, screen) {
                screen[Y][X] = pieza.color
                screen[Y + 1][X] = pieza.color
                screen[Y][X + 1] = pieza.color
                screen[Y + 1][X - 1] = pieza.color
            },
        }
        4 = {
            maximaY: 20,
            check(Y, X) {
                if (tablero[Y][X] == 0
                    && tablero[Y][X - 1] == 0
                    && tablero[Y + 1][X] == 0
                    && tablero[Y - 1][X - 1] == 0) {
                    return true
                }
            },
            erase(Y, X, screen) {
                screen[Y][X] = 0
                screen[Y][X - 1] = 0
                screen[Y + 1][X] = 0
                screen[Y - 1][X - 1] = 0
            },
            draw(Y, X, screen) {
                screen[Y][X] = pieza.color
                screen[Y][X - 1] = pieza.color
                screen[Y + 1][X] = pieza.color
                screen[Y - 1][X - 1] = pieza.color
            },
        }
    },
    class Z {
        y = 1
        x = 4
        color = 4
        1 = {
            maximaY: 21,
            check(Y, X) {
                if (tablero[Y][X] == 0
                    && tablero[Y][X + 1] == 0
                    && tablero[Y - 1][X] == 0
                    && tablero[Y - 1][X - 1] == 0) {
                    return true
                }
            },
            erase(Y, X, screen) {
                screen[Y][X] = 0
                screen[Y][X + 1] = 0
                screen[Y - 1][X] = 0
                screen[Y - 1][X - 1] = 0
            },
            draw(Y, X, screen) {
                screen[Y][X] = pieza.color
                screen[Y][X + 1] = pieza.color
                screen[Y - 1][X] = pieza.color
                screen[Y - 1][X - 1] = pieza.color
            },
        }
        2 = {
            maximaY: 20,
            check(Y, X) {
                if (tablero[Y][X] == 0
                    && tablero[Y + 1][X] == 0
                    && tablero[Y][X + 1] == 0
                    && tablero[Y - 1][X + 1] == 0) {
                    return true
                }
            },
            erase(Y, X, screen) {
                screen[Y][X] = 0
                screen[Y + 1][X] = 0
                screen[Y][X + 1] = 0
                screen[Y - 1][X + 1] = 0
            },
            draw(Y, X, screen) {
                screen[Y][X] = pieza.color
                screen[Y + 1][X] = pieza.color
                screen[Y][X + 1] = pieza.color
                screen[Y - 1][X + 1] = pieza.color
            },
        }
        3 = {
            maximaY: 20,
            check(Y, X) {
                if (tablero[Y][X] == 0
                    && tablero[Y + 1][X] == 0
                    && tablero[Y][X - 1] == 0
                    && tablero[Y + 1][X + 1] == 0) {
                    return true
                }
            },
            erase(Y, X, screen) {
                screen[Y][X] = 0
                screen[Y + 1][X] = 0
                screen[Y][X - 1] = 0
                screen[Y + 1][X + 1] = 0
            },
            draw(Y, X, screen) {
                screen[Y][X] = pieza.color
                screen[Y + 1][X] = pieza.color
                screen[Y][X - 1] = pieza.color
                screen[Y + 1][X + 1] = pieza.color
            },
        }
        4 = {
            maximaY: 20,
            check(Y, X) {
                if (tablero[Y][X] == 0
                    && tablero[Y][X - 1] == 0
                    && tablero[Y - 1][X] == 0
                    && tablero[Y + 1][X - 1] == 0) {
                    return true
                }
            },
            erase(Y, X, screen) {
                screen[Y][X] = 0
                screen[Y][X - 1] = 0
                screen[Y - 1][X] = 0
                screen[Y + 1][X - 1] = 0
            },
            draw(Y, X, screen) {
                screen[Y][X] = pieza.color
                screen[Y][X - 1] = pieza.color
                screen[Y - 1][X] = pieza.color
                screen[Y + 1][X - 1] = pieza.color
            },
        }
    },
    class L {
        y = 1
        x = 4
        color = 5
        1 = {
            maximaY: 21,
            check(Y, X) {
                if (tablero[Y][X] == 0
                    && tablero[Y][X - 1] == 0
                    && tablero[Y][X + 1] == 0
                    && tablero[Y - 1][X + 1] == 0) {
                    return true
                }
            },
            erase(Y, X, screen) {
                screen[Y][X] = 0
                screen[Y][X - 1] = 0
                screen[Y][X + 1] = 0
                screen[Y - 1][X + 1] = 0
            },
            draw(Y, X, screen) {
                screen[Y][X] = pieza.color
                screen[Y][X - 1] = pieza.color
                screen[Y][X + 1] = pieza.color
                screen[Y - 1][X + 1] = pieza.color
            },
        }
        2 = {
            maximaY: 20,
            check(Y, X) {
                if (tablero[Y][X] == 0
                    && tablero[Y - 1][X] == 0
                    && tablero[Y + 1][X] == 0
                    && tablero[Y + 1][X + 1] == 0) {
                    return true
                }
            },
            erase(Y, X, screen) {
                screen[Y][X] = 0
                screen[Y - 1][X] = 0
                screen[Y + 1][X] = 0
                screen[Y + 1][X + 1] = 0
            },
            draw(Y, X, screen) {
                screen[Y][X] = pieza.color
                screen[Y - 1][X] = pieza.color
                screen[Y + 1][X] = pieza.color
                screen[Y + 1][X + 1] = pieza.color
            },
        }
        3 = {
            maximaY: 20,
            check(Y, X) {
                if (tablero[Y][X] == 0
                    && tablero[Y][X - 1] == 0
                    && tablero[Y][X + 1] == 0
                    && tablero[Y + 1][X - 1] == 0) {
                    return true
                }
            },
            erase(Y, X, screen) {
                screen[Y][X] = 0
                screen[Y][X - 1] = 0
                screen[Y][X + 1] = 0
                screen[Y + 1][X - 1] = 0
            },
            draw(Y, X, screen) {
                screen[Y][X] = pieza.color
                screen[Y][X - 1] = pieza.color
                screen[Y][X + 1] = pieza.color
                screen[Y + 1][X - 1] = pieza.color
            },
        }
        4 = {
            maximaY: 20,
            check(Y, X) {
                if (tablero[Y][X] == 0
                    && tablero[Y - 1][X] == 0
                    && tablero[Y + 1][X] == 0
                    && tablero[Y - 1][X - 1] == 0) {
                    return true
                }
            },
            erase(Y, X, screen) {
                screen[Y][X] = 0
                screen[Y - 1][X] = 0
                screen[Y + 1][X] = 0
                screen[Y - 1][X - 1] = 0
            },
            draw(Y, X, screen) {
                screen[Y][X] = pieza.color
                screen[Y - 1][X] = pieza.color
                screen[Y + 1][X] = pieza.color
                screen[Y - 1][X - 1] = pieza.color
            },
        }
    },
    class J {
        y = 1
        x = 4
        color = 6
        1 = {
            maximaY: 21,
            check(Y, X) {
                if (tablero[Y][X] == 0
                    && tablero[Y][X - 1] == 0
                    && tablero[Y][X + 1] == 0
                    && tablero[Y - 1][X - 1] == 0) {
                    return true
                }
            },
            erase(Y, X, screen) {
                screen[Y][X] = 0
                screen[Y][X - 1] = 0
                screen[Y][X + 1] = 0
                screen[Y - 1][X - 1] = 0
            },
            draw(Y, X, screen) {
                screen[Y][X] = pieza.color
                screen[Y][X - 1] = pieza.color
                screen[Y][X + 1] = pieza.color
                screen[Y - 1][X - 1] = pieza.color
            },
        }
        2 = {
            maximaY: 20,
            check(Y, X) {
                if (tablero[Y][X] == 0
                    && tablero[Y - 1][X] == 0
                    && tablero[Y + 1][X] == 0
                    && tablero[Y - 1][X + 1] == 0) {
                    return true
                }
            },
            erase(Y, X, screen) {
                screen[Y][X] = 0
                screen[Y - 1][X] = 0
                screen[Y + 1][X] = 0
                screen[Y - 1][X + 1] = 0
            },
            draw(Y, X, screen) {
                screen[Y][X] = pieza.color
                screen[Y - 1][X] = pieza.color
                screen[Y + 1][X] = pieza.color
                screen[Y - 1][X + 1] = pieza.color
            },
        }
        3 = {
            maximaY: 20,
            check(Y, X) {
                if (tablero[Y][X] == 0
                    && tablero[Y][X - 1] == 0
                    && tablero[Y][X + 1] == 0
                    && tablero[Y + 1][X + 1] == 0) {
                    return true
                }
            },
            erase(Y, X, screen) {
                screen[Y][X] = 0
                screen[Y][X - 1] = 0
                screen[Y][X + 1] = 0
                screen[Y + 1][X + 1] = 0
            },
            draw(Y, X, screen) {
                screen[Y][X] = pieza.color
                screen[Y][X - 1] = pieza.color
                screen[Y][X + 1] = pieza.color
                screen[Y + 1][X + 1] = pieza.color
            },
        }
        4 = {
            maximaY: 20,
            check(Y, X) {
                if (tablero[Y][X] == 0
                    && tablero[Y - 1][X] == 0
                    && tablero[Y + 1][X] == 0
                    && tablero[Y + 1][X - 1] == 0) {
                    return true
                }
            },
            erase(Y, X, screen) {
                screen[Y][X] = 0
                screen[Y - 1][X] = 0
                screen[Y + 1][X] = 0
                screen[Y + 1][X - 1] = 0
            },
            draw(Y, X, screen) {
                screen[Y][X] = pieza.color
                screen[Y - 1][X] = pieza.color
                screen[Y + 1][X] = pieza.color
                screen[Y + 1][X - 1] = pieza.color
            },
        }
    },
    class I {
        y = 1
        x = 4
        color = 7
        1 = {
            maximaY: 21,
            check(Y, X) {
                if (tablero[Y][X] == 0
                    && tablero[Y][X - 1] == 0
                    && tablero[Y][X + 1] == 0
                    && tablero[Y][X + 2] == 0) {
                    return true
                }
            },
            erase(Y, X, screen) {
                screen[Y][X] = 0
                screen[Y][X - 1] = 0
                screen[Y][X + 1] = 0
                screen[Y][X + 2] = 0
            },
            draw(Y, X, screen) {
                screen[Y][X] = pieza.color
                screen[Y][X - 1] = pieza.color
                screen[Y][X + 1] = pieza.color
                screen[Y][X + 2] = pieza.color
            },
        }
        2 = {
            maximaY: 19,
            check(Y, X) {
                if (tablero[Y][X] == 0
                    && tablero[Y - 1][X] == 0
                    && tablero[Y + 1][X] == 0
                    && tablero[Y + 2][X] == 0) {
                    return true
                }
            },
            erase(Y, X, screen) {
                screen[Y][X] = 0
                screen[Y - 1][X] = 0
                screen[Y + 1][X] = 0
                screen[Y + 2][X] = 0
            },
            draw(Y, X, screen) {
                screen[Y][X] = pieza.color
                screen[Y - 1][X] = pieza.color
                screen[Y + 1][X] = pieza.color
                screen[Y + 2][X] = pieza.color
            },
        }
        3 = {
            maximaY: 21,
            check(Y, X) {
                if (tablero[Y][X] == 0
                    && tablero[Y][X - 1] == 0
                    && tablero[Y][X + 1] == 0
                    && tablero[Y][X - 2] == 0) {
                    return true
                }
            },
            erase(Y, X, screen) {
                screen[Y][X] = 0
                screen[Y][X - 1] = 0
                screen[Y][X + 1] = 0
                screen[Y][X - 2] = 0
            },
            draw(Y, X, screen) {
                screen[Y][X] = pieza.color
                screen[Y][X - 1] = pieza.color
                screen[Y][X + 1] = pieza.color
                screen[Y][X - 2] = pieza.color
            },
        }
        4 = {
            maximaY: 20,
            check(Y, X) {
                if (tablero[Y][X] == 0
                    && tablero[Y - 1][X] == 0
                    && tablero[Y + 1][X] == 0
                    && tablero[Y - 2][X] == 0) {
                    return true
                }
            },
            erase(Y, X, screen) {
                screen[Y][X] = 0
                screen[Y - 1][X] = 0
                screen[Y + 1][X] = 0
                screen[Y - 2][X] = 0
            },
            draw(Y, X, screen) {
                screen[Y][X] = pieza.color
                screen[Y - 1][X] = pieza.color
                screen[Y + 1][X] = pieza.color
                screen[Y - 2][X] = pieza.color
            },
        }
    },
]
const audioPoint = new Audio("./point.mp3")
const audioDrop = new Audio("drop.mp3")
const audioRotate = new Audio("rotate.mp3")
const audioLose = new Audio("/gameOver.mp3")
let pause = false
let lose = false
let seEstaPresionando = false
let sePuedeCambiar = true
let score = 0
let formaActual = 1
let moveDown
let fps = 0
let lastMoveDown
let tablero = []
let siguientePiezaTablero = []
let bag = []
let pieza
let siguientePieza


reset()
requestAnimationFrame(game)


function game() {

    move()
    dibujarTablero()
    if (!pause && !lose) {
        requestAnimationFrame(game)
    }
}


function move() {

    moveDown = Math.floor(fps / 60)
    fps++

    if (moveDown != lastMoveDown) {
        if (!down()) {
            if (pieza.y === 1 && pieza.x === 4) {
                youLose()
            }
            else {
                verLineas()
                elejirPieza()
                fps = 0
                formaActual = 1
                sePuedeCambiar = true
            }
            audioDrop.play()
        }
    }
    lastMoveDown = moveDown

}


function fillBag() {
    while (bag.length < piezas.length) {
        let dado = Math.floor(Math.random() * piezas.length)
        if (!bag.includes(dado)) {
            bag.push(dado)
        }
    }
}


function reset() {
    for (let i = 0; i < 22; i++) {
        tablero[i] = []
        for (let j = 0; j < 10; j++) {
            tablero[i][j] = 0
        }
    }

    for (let i = 0; i < 4; i++) {
        siguientePiezaTablero[i] = []
        for (let j = 0; j < 6; j++) {
            siguientePiezaTablero[i][j] = 0
        }
    }

    bag = []
    score = 0
    formaActual = 1
    sePuedeCambiar = true
    lose = false
    nextText.innerHTML = "NEXT"
    siguientePiezaCanvas.classList.remove("hidden")
    elejirPieza()
}


function elejirPieza() {
    if (bag.length < 1) {
        fillBag()
    }

    if (siguientePieza) {
        siguientePieza[1].erase(2, 2, siguientePiezaTablero)
    }

    if (!siguientePieza) {
        let nuevaPieza = bag[bag.length - 1]
        siguientePieza = new piezas[nuevaPieza]
        bag.pop()
    }
    pieza = siguientePieza

    let nuevaPieza = bag[bag.length - 1]
    siguientePieza = new piezas[nuevaPieza]
    bag.pop()
    siguientePieza[1].draw(2, 2, siguientePiezaTablero)
    console.table(siguientePiezaTablero)
}


function youLose() {
    audioLose.play()
    nextText.innerHTML = `YOU LOSE <br> PREESS "R" <br> TO <br> RESTART`
    siguientePiezaCanvas.classList.add("hidden")
    lose = true
}


function verLineas() {

    let ciclo = 0
    let Y
    for (let i = 0; i < 22; i++) {
        for (let j = 0; j < 10; j++) {
            if (tablero[i][j] == 0) {
                j = 10
            }
            if (j == 9 && tablero[i][j] != 0) {
                ciclo++
                for (let j = 0; j < 10; j++) {
                    tablero[i][j] = 0
                }
                Y = i
            }
        }
    }

    if (ciclo > 0) {
        aumentarScore(ciclo)
    }

    while (ciclo > 0) {
        bajarLineas(Y)
        ciclo--
    }

}


function bajarLineas(Y) {
    for (let i = Y; i > 0; i--) {
        for (let j = 0; j < 10; j++) {
            if (tablero[i - 1][j] !== 0) {
                tablero[i][j] = tablero[i - 1][j]
                tablero[i - 1][j] = 0
            }
        }
    }
}


function dibujarTablero() {
    let px = canvas.width / 10
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (let i = 0; i < 22; i++) {
        for (let j = 0; j < 10; j++) {
            if (tablero[i][j] != 0) {
                ctx.fillStyle = colores[tablero[i][j]]
                ctx.fillRect(j * px, (i - 2) * px, px, px)
            }
        }
    }

    for (let i = 0; i < 20; i++) {
        for (let j = 0; j < 10; j++) {
            ctx.lineWidth = px / 40;
            ctx.strokeStyle = "#5c5c5c"
            ctx.strokeRect(j * px, i * px, px, px)
        }
    }

    ctx2.clearRect(0, 0, siguientePiezaCanvas.width, siguientePiezaCanvas.height)
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 10; j++) {
            if (siguientePiezaTablero[i][j] != 0) {
                ctx2.fillStyle = colores[siguientePieza.color]
                ctx2.fillRect(j * px, i * px, px, px)
            }
        }
    }

}


function aumentarScore(points) {
    audioPoint.play()
    if (points == 1) {
        score += 100
    }
    if (points == 2) {
        score += 300
    }
    if (points == 3) {
        score += 500
    }
    if (points >= 4) {
        score += 800
    }
    scoreScreen.innerHTML = `SCORE: <br> ${score}`
}


function cambiarForma() {
    pieza[formaActual].erase(pieza.y, pieza.x, tablero)
    let siguienteForma
    formaActual == 4 ?
        siguienteForma = 1 :
        siguienteForma = formaActual + 1;

    wallKick(siguienteForma)

    pieza[formaActual].draw(pieza.y, pieza.x, tablero)
}


function wallKick(siguienteForma) {
    if (pieza[siguienteForma].check(pieza.y, pieza.x)) {
        formaActual = siguienteForma
        audioRotate.play()
    } else if (pieza[siguienteForma].check(pieza.y, pieza.x + 1)) {
        pieza.x++
        formaActual = siguienteForma
    } else if (pieza[siguienteForma].check(pieza.y, pieza.x - 1)) {
        pieza.x--
        formaActual = siguienteForma
    }
    else if (pieza[siguienteForma].check(pieza.y, pieza.x + 2)) {
        pieza.x += 2
        formaActual = siguienteForma
    } else if (pieza[siguienteForma].check(pieza.y, pieza.x - 2)) {
        pieza.x -= 2
        formaActual = siguienteForma
        audioRotate.play()
    }


}
function cambiarPieza() {
    sePuedeCambiar = false
    pieza[formaActual].erase(pieza.y, pieza.x, tablero)
    siguientePieza[1].erase(2, 2, siguientePiezaTablero)
    formaActual = 1
    pieza.y = 1
    pieza.x = 4
    let auxiliar = pieza
    pieza = siguientePieza
    siguientePieza = auxiliar
    pieza[formaActual].draw(pieza.y, pieza.x, tablero)
    siguientePieza[1].draw(2, 2, siguientePiezaTablero)
}


function moveRight() {
    pieza[formaActual].erase(pieza.y, pieza.x, tablero)
    if (pieza[formaActual].check(pieza.y, pieza.x + 1)) {
        pieza.x++
    }
    pieza[formaActual].draw(pieza.y, pieza.x, tablero)
}


function moveLeft() {
    pieza[formaActual].erase(pieza.y, pieza.x, tablero)
    if (pieza[formaActual].check(pieza.y, pieza.x - 1)) {
        pieza.x--
    }
    pieza[formaActual].draw(pieza.y, pieza.x, tablero)
}


function down() {
    pieza[formaActual].erase(pieza.y, pieza.x, tablero)
    if (pieza.y < pieza[formaActual].maximaY) {
        if (pieza[formaActual].check(pieza.y + 1, pieza.x)) {
            pieza.y++
            pieza[formaActual].draw(pieza.y, pieza.x, tablero)
            return true
        }
    }
    pieza[formaActual].draw(pieza.y, pieza.x, tablero)
}


function superDown() {
    let hasta = pieza[formaActual].maximaY + 1
    for (let i = pieza.y; i < hasta; i++) {
        if (!down()) {
            i = hasta
            moveDown = 1
            lastMoveDown = 0
            move()
        }
    }
}

body.addEventListener("keydown", (e) => {
    if (e.key == "p") {
        pause = !pause
        requestAnimationFrame(game)
    }
    if (!pause && !seEstaPresionando) {
        if (e.key == "a") {
            moveLeft()
        }
        if (e.key == "d") {
            moveRight()
        }
        if (e.key == "w") {
            if (pieza.color != 1) {
                cambiarForma()
            }
        }
        if (e.key == "s") {
            down()
        }
        if (e.key === " ") {
            superDown()
        }
        if (e.key == "r") {
            reset()
            requestAnimationFrame(game)
        }
        if (e.key == "Shift" && sePuedeCambiar) {
            cambiarPieza()
        }
    }
    seEstaPresionando = true
})

body.addEventListener("keyup", (e) => {
    seEstaPresionando = false
})