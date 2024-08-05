const body = document.querySelector("body")
const canvas = document.querySelector("#screen")
const ctx = canvas.getContext("2d")
canvas.height = window.innerHeight / 1.4
canvas.width = canvas.height / 1.5
const colores = ["", "#ffff00", "#800080", "#ff0000", "#00ff00", "#ff7f00", "#0000ff", "#00ffff"]
const piezas = [
    class O {
        color = 1
        1 = {
            y: 1,
            x: 4,
            check(Y, X) {
                if (tablero[Y][X] == 0 && tablero[Y - 1][X] == 0 && tablero[Y][X + 1] == 0 && tablero[Y - 1][X + 1] == 0) {
                    return true
                }
            },
            erase() {
                tablero[this.y][this.x] = 0
                tablero[this.y][this.x + 1] = 0
                tablero[this.y - 1][this.x] = 0
                tablero[this.y - 1][this.x + 1] = 0
            },
            draw() {
                tablero[this.y][this.x] = square.color
                tablero[this.y][this.x + 1] = square.color
                tablero[this.y - 1][this.x] = square.color
                tablero[this.y - 1][this.x + 1] = square.color
            },
            down() {
                this.erase()
                if (this.y < 16) {
                    if (this.check(this.y + 1, this.x)) {
                        this.y++
                        this.draw()
                        return true
                    }
                }
                this.draw()
            },
            right() {
                this.erase()
                if (this.check(this.y, this.x + 1)) {
                    this.x++
                }
                this.draw()
            },
            left() {
                this.erase()
                if (this.check(this.y, this.x - 1)) {
                    this.x--
                }
                this.draw()
            }
        }
    },
    class T {
        color = 2
        1 = {
            y: 1,
            x: 4,
            check(Y, X) {
                if (tablero[Y][X] == 0 && tablero[Y + 1][X] == 0 && tablero[Y][X - 1] == 0 && tablero[Y][X + 1] == 0) {
                    return true
                }
            },
            erase() {
                tablero[this.y][this.x] = 0
                tablero[this.y - 1][this.x] = 0
                tablero[this.y][this.x - 1] = 0
                tablero[this.y][this.x + 1] = 0
            },
            draw() {
                tablero[this.y][this.x] = square.color
                tablero[this.y - 1][this.x] = square.color
                tablero[this.y][this.x - 1] = square.color
                tablero[this.y][this.x + 1] = square.color
            },
            down() {
                if (this.y < 16) {
                    if (tablero[this.y + 1][this.x] == 0 && tablero[this.y + 1][this.x - 1] == 0 && tablero[this.y + 1][this.x + 1] == 0) {
                        this.erase()
                        this.y++
                        this.draw()
                        return true
                    }
                }
            },
            right() {
                this.erase()
                if (this.check(this.y, this.x + 1)) {
                    this.x++
                }
                this.draw()
            },
            left() {
                this.erase()
                if (this.check(this.y, this.x - 1)) {
                    this.x--
                }
                this.draw()
            }
        }
        2 = {
            y: 1,
            x: 4,
            check(Y, X) {
                if (tablero[Y][X] == 0 && tablero[Y - 1][X] == 0 && tablero[Y + 1][X] == 0 && tablero[Y][X + 1] == 0) {
                    return true
                }
            },
            erase() {
                tablero[this.y][this.x] = 0
                tablero[this.y - 1][this.x] = 0
                tablero[this.y + 1][this.x] = 0
                tablero[this.y][this.x + 1] = 0
            },
            draw() {
                tablero[this.y][this.x] = square.color
                tablero[this.y - 1][this.x] = square.color
                tablero[this.y + 1][this.x] = square.color
                tablero[this.y][this.x + 1] = square.color
            },
            down() {
                if (this.y < 15) {
                    if (tablero[this.y + 2][this.x] == 0 && tablero[this.y + 1][this.x + 1] == 0) {
                        this.erase()
                        this.y++
                        this.draw()
                        return true
                    }
                }
            },
            right() {
                this.erase()
                if (this.check(this.y, this.x + 1)) {
                    this.x++
                }
                this.draw()
            },
            left() {
                this.erase()
                if (this.check(this.y, this.x - 1)) {
                    this.x--
                }
                this.draw()
            }
        }
        3 = {
            y: 1,
            x: 4,
            check(y, x) {
                if (
                    tablero[y][x] == 0
                    && tablero[y - 1][x] == 0
                    && tablero[y - 1][x - 1] == 0
                    && tablero[y - 1][x + 1] == 0
                ) {
                    return true
                }
            },
            erase() {
                tablero[this.y][this.x] = 0
                tablero[this.y + 1][this.x] = 0
                tablero[this.y][this.x - 1] = 0
                tablero[this.y][this.x + 1] = 0
            },
            draw() {
                tablero[this.y][this.x] = square.color
                tablero[this.y + 1][this.x] = square.color
                tablero[this.y][this.x - 1] = square.color
                tablero[this.y][this.x + 1] = square.color
            },
            down() {
                if (this.y < 15) {
                    if (tablero[this.y + 2][this.x] == 0 && tablero[this.y + 1][this.x - 1] == 0 && tablero[this.y + 1][this.x + 1] == 0) {
                        this.erase()
                        this.y++
                        this.draw()
                        return true
                    }
                }
            },
            right() {
                this.erase()
                if (this.check(this.y, this.x + 1)) {
                    this.x++
                }
                this.draw()
            },
            left() {
                this.erase()
                if (this.check(this.y, this.x - 1)) {
                    this.x--
                }
                this.draw()
            }
        }
        4 = {
            y: 1,
            x: 4,
            check(y, x) {
                if (
                    tablero[y][x] == 0
                    && tablero[y - 1][x] == 0
                    && tablero[y - 2][x] == 0
                    && tablero[y - 1][x - 1] == 0
                ) {
                    return true
                }
            },
            erase() {
                tablero[this.y][this.x] = 0
                tablero[this.y - 1][this.x] = 0
                tablero[this.y + 1][this.x] = 0
                tablero[this.y][this.x - 1] = 0
            },
            draw() {
                tablero[this.y][this.x] = square.color
                tablero[this.y - 1][this.x] = square.color
                tablero[this.y + 1][this.x] = square.color
                tablero[this.y][this.x - 1] = square.color
            },
            down() {
                if (this.y < 15) {
                    if (tablero[this.y + 2][this.x] == 0 && tablero[this.y + 1][this.x - 1] == 0) {
                        this.erase()
                        this.y++
                        this.draw()
                        return true
                    }
                }
            },
            right() {
                this.erase()
                if (this.check(this.y, this.x + 1)) {
                    this.x++
                }
                this.draw()
            },
            left() {
                this.erase()
                if (this.check(this.y, this.x - 1)) {
                    this.x--
                }
                this.draw()
            }
        }
    },
    class S {
        color = 3
        1 = {
            y: 1,
            x: 4,
            check(Y, X) {
                if (
                    tablero[Y][X] == 0
                    && tablero[Y - 1][X] == 0
                    && tablero[Y - 1][X + 1] == 0
                    && tablero[Y][X - 1] == 0
                ) {
                    return true
                }
            },
            erase() {
                tablero[this.y][this.x] = 0
                tablero[this.y - 1][this.x] = 0
                tablero[this.y - 1][this.x + 1] = 0
                tablero[this.y][this.x - 1] = 0
            },
            draw() {
                tablero[this.y][this.x] = square.color
                tablero[this.y - 1][this.x] = square.color
                tablero[this.y - 1][this.x + 1] = square.color
                tablero[this.y][this.x - 1] = square.color
            },
            down() {
                this.erase()
                if (this.y < 16) {
                    if (this.check(this.y + 1, this.x)) {
                        this.y++
                        this.draw()
                        return true
                    }
                }
                this.draw()
            },
            right() {
                this.erase()
                if (this.check(this.y, this.x + 1)) {
                    this.x++
                }
                this.draw()
            },
            left() {
                this.erase()
                if (this.check(this.y, this.x - 1)) {
                    this.x--
                }
                this.draw()
            }
        }
        2 = {
            y: 1,
            x: 4,
            check(Y, X) {
                if (
                    tablero[Y][X] == 0
                    && tablero[Y + 1][X] == 0
                    && tablero[Y][X - 1] == 0
                    && tablero[Y - 1][X - 1] == 0
                ) {
                    return true
                }
            },
            erase() {
                tablero[this.y][this.x] = 0
                tablero[this.y + 1][this.x] = 0
                tablero[this.y][this.x - 1] = 0
                tablero[this.y - 1][this.x - 1] = 0
            },
            draw() {
                tablero[this.y][this.x] = square.color
                tablero[this.y + 1][this.x] = square.color
                tablero[this.y][this.x - 1] = square.color
                tablero[this.y - 1][this.x - 1] = square.color
            },
            down() {
                this.erase()
                if (this.y < 15) {
                    if (this.check(this.y + 1, this.x)) {
                        this.y++
                        this.draw()
                        return true
                    }
                }
                this.draw()
            },
            right() {
                this.erase()
                if (this.check(this.y, this.x + 1)) {
                    this.x++
                }
                this.draw()
            },
            left() {
                this.erase()
                if (this.check(this.y, this.x - 1)) {
                    this.x--
                }
                this.draw()
            }
        }
        3 = {
            y: 1,
            x: 4,
            check(Y, X) {
                if (
                    tablero[Y][X] == 0
                    && tablero[Y + 1][X] == 0
                    && tablero[Y][X + 1] == 0
                    && tablero[Y + 1][X - 1] == 0
                ) {
                    return true
                }
            },
            erase() {
                tablero[this.y][this.x] = 0
                tablero[this.y + 1][this.x] = 0
                tablero[this.y][this.x + 1] = 0
                tablero[this.y + 1][this.x - 1] = 0
            },
            draw() {
                tablero[this.y][this.x] = square.color
                tablero[this.y + 1][this.x] = square.color
                tablero[this.y][this.x + 1] = square.color
                tablero[this.y + 1][this.x - 1] = square.color
            },
            down() {
                this.erase()
                if (this.y < 15) {
                    if (this.check(this.y + 1, this.x)) {
                        this.y++
                        this.draw()
                        return true
                    }
                }
                this.draw()
            },
            right() {
                this.erase()
                if (this.check(this.y, this.x + 1)) {
                    this.x++
                }
                this.draw()
            },
            left() {
                this.erase()
                if (this.check(this.y, this.x - 1)) {
                    this.x--
                }
                this.draw()
            }
        }
        4 = {
            y: 1,
            x: 4,
            check(y, x) {
                if (
                    tablero[y][x] == 0
                    && tablero[y - 1][x] == 0
                    && tablero[y][x + 1] == 0
                    && tablero[y + 1][x + 1] == 0
                ) {
                    return true
                }
            },
            erase() {
                tablero[this.y][this.x] = 0
                tablero[this.y - 1][this.x] = 0
                tablero[this.y][this.x + 1] = 0
                tablero[this.y + 1][this.x + 1] = 0
            },
            draw() {
                tablero[this.y][this.x] = square.color
                tablero[this.y - 1][this.x] = square.color
                tablero[this.y][this.x + 1] = square.color
                tablero[this.y + 1][this.x + 1] = square.color
            },
            down() {
                this.erase()
                if (this.y < 15) {
                    if (this.check(this.y + 1, this.x)) {
                        this.y++
                        this.draw()
                        return true
                    }
                }
                this.draw()
            },
            right() {
                this.erase()
                if (this.check(this.y, this.x + 1)) {
                    this.x++
                }
                this.draw()
            },
            left() {
                this.erase()
                if (this.check(this.y, this.x - 1)) {
                    this.x--
                }
                this.draw()
            }
        }
    },
    class Z {
        color = 4
        1 = {
            y: 1,
            x: 4,
            check(Y, X) {
                if (
                    tablero[Y][X] == 0
                    && tablero[Y - 1][X] == 0
                    && tablero[Y - 1][X - 1] == 0
                    && tablero[Y][X + 1] == 0
                ) {
                    return true
                }
            },
            erase() {
                tablero[this.y][this.x] = 0
                tablero[this.y - 1][this.x] = 0
                tablero[this.y - 1][this.x - 1] = 0
                tablero[this.y][this.x + 1] = 0
            },
            draw() {
                tablero[this.y][this.x] = square.color
                tablero[this.y - 1][this.x] = square.color
                tablero[this.y - 1][this.x - 1] = square.color
                tablero[this.y][this.x + 1] = square.color
            },
            down() {
                this.erase()
                if (this.y < 16) {
                    if (this.check(this.y + 1, this.x)) {
                        this.y++
                        this.draw()
                        return true
                    }
                }
                this.draw()
            },
            right() {
                this.erase()
                if (this.check(this.y, this.x + 1)) {
                    this.x++
                }
                this.draw()
            },
            left() {
                this.erase()
                if (this.check(this.y, this.x - 1)) {
                    this.x--
                }
                this.draw()
            }
        }
        2 = {
            y: 1,
            x: 4,
            check(Y, X) {
                if (
                    tablero[Y][X] == 0
                    && tablero[Y + 1][X] == 0
                    && tablero[Y][X + 1] == 0
                    && tablero[Y - 1][X + 1] == 0
                ) {
                    return true
                }
            },
            erase() {
                tablero[this.y][this.x] = 0
                tablero[this.y + 1][this.x] = 0
                tablero[this.y][this.x + 1] = 0
                tablero[this.y - 1][this.x + 1] = 0
            },
            draw() {
                tablero[this.y][this.x] = square.color
                tablero[this.y + 1][this.x] = square.color
                tablero[this.y][this.x + 1] = square.color
                tablero[this.y - 1][this.x + 1] = square.color
            },
            down() {
                this.erase()
                if (this.y < 15) {
                    if (this.check(this.y + 1, this.x)) {
                        this.y++
                        this.draw()
                        return true
                    }
                }
                this.draw()
            },
            right() {
                this.erase()
                if (this.check(this.y, this.x + 1)) {
                    this.x++
                }
                this.draw()
            },
            left() {
                this.erase()
                if (this.check(this.y, this.x - 1)) {
                    this.x--
                }
                this.draw()
            }
        }
        3 = {
            y: 1,
            x: 4,
            check(Y, X) {
                if (
                    tablero[Y][X] == 0
                    && tablero[Y + 1][X] == 0
                    && tablero[Y][X - 1] == 0
                    && tablero[Y + 1][X + 1] == 0
                ) {
                    return true
                }
            },
            erase() {
                tablero[this.y][this.x] = 0
                tablero[this.y + 1][this.x] = 0
                tablero[this.y][this.x - 1] = 0
                tablero[this.y + 1][this.x + 1] = 0
            },
            draw() {
                tablero[this.y][this.x] = square.color
                tablero[this.y + 1][this.x] = square.color
                tablero[this.y][this.x - 1] = square.color
                tablero[this.y + 1][this.x + 1] = square.color
            },
            down() {
                this.erase()
                if (this.y < 15) {
                    if (this.check(this.y + 1, this.x)) {
                        this.y++
                        this.draw()
                        return true
                    }
                }
                this.draw()
            },
            right() {
                this.erase()
                if (this.check(this.y, this.x + 1)) {
                    this.x++
                }
                this.draw()
            },
            left() {
                this.erase()
                if (this.check(this.y, this.x - 1)) {
                    this.x--
                }
                this.draw()
            }
        }
        4 = {
            y: 1,
            x: 4,
            check(y, x) {
                if (
                    tablero[y][x] == 0
                    && tablero[y - 1][x] == 0
                    && tablero[y][x - 1] == 0
                    && tablero[y + 1][x - 1] == 0
                ) {
                    return true
                }
            },
            erase() {
                tablero[this.y][this.x] = 0
                tablero[this.y - 1][this.x] = 0
                tablero[this.y][this.x - 1] = 0
                tablero[this.y + 1][this.x - 1] = 0
            },
            draw() {
                tablero[this.y][this.x] = square.color
                tablero[this.y - 1][this.x] = square.color
                tablero[this.y][this.x - 1] = square.color
                tablero[this.y + 1][this.x - 1] = square.color
            },
            down() {
                this.erase()
                if (this.y < 15) {
                    if (this.check(this.y + 1, this.x)) {
                        this.y++
                        this.draw()
                        return true
                    }
                }
                this.draw()
            },
            right() {
                this.erase()
                if (this.check(this.y, this.x + 1)) {
                    this.x++
                }
                this.draw()
            },
            left() {
                this.erase()
                if (this.check(this.y, this.x - 1)) {
                    this.x--
                }
                this.draw()
            }
        }
    },
    class L {
        color = 5
        1 = {
            y: 1,
            x: 4,
            check(Y, X) {
                if (
                    tablero[Y][X] == 0
                    && tablero[Y - 1][X] == 0
                    && tablero[Y + 1][X] == 0
                    && tablero[Y + 1][X + 1] == 0
                ) {
                    return true
                }
            },
            erase() {
                tablero[this.y][this.x] = 0
                tablero[this.y - 1][this.x] = 0
                tablero[this.y + 1][this.x] = 0
                tablero[this.y + 1][this.x + 1] = 0
            },
            draw() {
                tablero[this.y][this.x] = square.color
                tablero[this.y - 1][this.x] = square.color
                tablero[this.y + 1][this.x] = square.color
                tablero[this.y + 1][this.x + 1] = square.color
            },
            down() {
                this.erase()
                if (this.y < 15) {
                    if (this.check(this.y + 1, this.x)) {
                        this.y++
                        this.draw()
                        return true
                    }
                }
                this.draw()
            },
            right() {
                this.erase()
                if (this.check(this.y, this.x + 1)) {
                    this.x++
                }
                this.draw()
            },
            left() {
                this.erase()
                if (this.check(this.y, this.x - 1)) {
                    this.x--
                }
                this.draw()
            }
        }
        2 = {
            y: 1,
            x: 4,
            check(Y, X) {
                if (
                    tablero[Y][X] == 0
                    && tablero[Y][X + 1] == 0
                    && tablero[Y][X - 1] == 0
                    && tablero[Y + 1][X - 1] == 0
                ) {
                    return true
                }
            },
            erase() {
                tablero[this.y][this.x] = 0
                tablero[this.y][this.x + 1] = 0
                tablero[this.y][this.x - 1] = 0
                tablero[this.y + 1][this.x - 1] = 0
            },
            draw() {
                tablero[this.y][this.x] = square.color
                tablero[this.y][this.x + 1] = square.color
                tablero[this.y][this.x - 1] = square.color
                tablero[this.y + 1][this.x - 1] = square.color
            },
            down() {
                this.erase()
                if (this.y < 15) {
                    if (this.check(this.y + 1, this.x)) {
                        this.y++
                        this.draw()
                        return true
                    }
                }
                this.draw()
            },
            right() {
                this.erase()
                if (this.check(this.y, this.x + 1)) {
                    this.x++
                }
                this.draw()
            },
            left() {
                this.erase()
                if (this.check(this.y, this.x - 1)) {
                    this.x--
                }
                this.draw()
            }
        }
        3 = {
            y: 1,
            x: 4,
            check(Y, X) {
                if (
                    tablero[Y][X] == 0
                    && tablero[Y - 1][X] == 0
                    && tablero[Y + 1][X] == 0
                    && tablero[Y - 1][X - 1] == 0
                ) {
                    return true
                }
            },
            erase() {
                tablero[this.y][this.x] = 0
                tablero[this.y - 1][this.x] = 0
                tablero[this.y + 1][this.x] = 0
                tablero[this.y - 1][this.x - 1] = 0
            },
            draw() {
                tablero[this.y][this.x] = square.color
                tablero[this.y - 1][this.x] = square.color
                tablero[this.y + 1][this.x] = square.color
                tablero[this.y - 1][this.x - 1] = square.color
            },
            down() {
                this.erase()
                if (this.y < 15) {
                    if (this.check(this.y + 1, this.x)) {
                        this.y++
                        this.draw()
                        return true
                    }
                }
                this.draw()
            },
            right() {
                this.erase()
                if (this.check(this.y, this.x + 1)) {
                    this.x++
                }
                this.draw()
            },
            left() {
                this.erase()
                if (this.check(this.y, this.x - 1)) {
                    this.x--
                }
                this.draw()
            }
        }
        4 = {
            y: 1,
            x: 4,
            check(y, x) {
                if (
                    tablero[y][x] == 0
                    && tablero[y][x + 1] == 0
                    && tablero[y][x - 1] == 0
                    && tablero[y - 1][x + 1] == 0
                ) {
                    return true
                }
            },
            erase() {
                tablero[this.y][this.x] = 0
                tablero[this.y][this.x + 1] = 0
                tablero[this.y][this.x - 1] = 0
                tablero[this.y - 1][this.x + 1] = 0
            },
            draw() {
                tablero[this.y][this.x] = square.color
                tablero[this.y][this.x + 1] = square.color
                tablero[this.y][this.x - 1] = square.color
                tablero[this.y - 1][this.x + 1] = square.color
            },
            down() {
                this.erase()
                if (this.y < 16) {
                    if (this.check(this.y + 1, this.x)) {
                        this.y++
                        this.draw()
                        return true
                    }
                }
                this.draw()
            },
            right() {
                this.erase()
                if (this.check(this.y, this.x + 1)) {
                    this.x++
                }
                this.draw()
            },
            left() {
                this.erase()
                if (this.check(this.y, this.x - 1)) {
                    this.x--
                }
                this.draw()
            }
        }
    },
    class J {
        color = 6
        1 = {
            y: 1,
            x: 4,
            check(Y, X) {
                if (
                    tablero[Y][X] == 0
                    && tablero[Y - 1][X] == 0
                    && tablero[Y + 1][X] == 0
                    && tablero[Y + 1][X - 1] == 0
                ) {
                    return true
                }
            },
            erase() {
                tablero[this.y][this.x] = 0
                tablero[this.y - 1][this.x] = 0
                tablero[this.y + 1][this.x] = 0
                tablero[this.y + 1][this.x - 1] = 0
            },
            draw() {
                tablero[this.y][this.x] = square.color
                tablero[this.y - 1][this.x] = square.color
                tablero[this.y + 1][this.x] = square.color
                tablero[this.y + 1][this.x - 1] = square.color
            },
            down() {
                this.erase()
                if (this.y < 15) {
                    if (this.check(this.y + 1, this.x)) {
                        this.y++
                        this.draw()
                        return true
                    }
                }
                this.draw()
            },
            right() {
                this.erase()
                if (this.check(this.y, this.x + 1)) {
                    this.x++
                }
                this.draw()
            },
            left() {
                this.erase()
                if (this.check(this.y, this.x - 1)) {
                    this.x--
                }
                this.draw()
            }
        }
        2 = {
            y: 1,
            x: 4,
            check(Y, X) {
                if (
                    tablero[Y][X] == 0
                    && tablero[Y][X + 1] == 0
                    && tablero[Y][X - 1] == 0
                    && tablero[Y - 1][X - 1] == 0
                ) {
                    return true
                }
            },
            erase() {
                tablero[this.y][this.x] = 0
                tablero[this.y][this.x + 1] = 0
                tablero[this.y][this.x - 1] = 0
                tablero[this.y - 1][this.x - 1] = 0
            },
            draw() {
                tablero[this.y][this.x] = square.color
                tablero[this.y][this.x + 1] = square.color
                tablero[this.y][this.x - 1] = square.color
                tablero[this.y - 1][this.x - 1] = square.color
            },
            down() {
                this.erase()
                if (this.y < 16) {
                    if (this.check(this.y + 1, this.x)) {
                        this.y++
                        this.draw()
                        return true
                    }
                }
                this.draw()
            },
            right() {
                this.erase()
                if (this.check(this.y, this.x + 1)) {
                    this.x++
                }
                this.draw()
            },
            left() {
                this.erase()
                if (this.check(this.y, this.x - 1)) {
                    this.x--
                }
                this.draw()
            }
        }
        3 = {
            y: 1,
            x: 4,
            check(Y, X) {
                if (
                    tablero[Y][X] == 0
                    && tablero[Y - 1][X] == 0
                    && tablero[Y + 1][X] == 0
                    && tablero[Y - 1][X + 1] == 0
                ) {
                    return true
                }
            },
            erase() {
                tablero[this.y][this.x] = 0
                tablero[this.y - 1][this.x] = 0
                tablero[this.y + 1][this.x] = 0
                tablero[this.y - 1][this.x + 1] = 0
            },
            draw() {
                tablero[this.y][this.x] = square.color
                tablero[this.y - 1][this.x] = square.color
                tablero[this.y + 1][this.x] = square.color
                tablero[this.y - 1][this.x + 1] = square.color
            },
            down() {
                this.erase()
                if (this.y < 15) {
                    if (this.check(this.y + 1, this.x)) {
                        this.y++
                        this.draw()
                        return true
                    }
                }
                this.draw()
            },
            right() {
                this.erase()
                if (this.check(this.y, this.x + 1)) {
                    this.x++
                }
                this.draw()
            },
            left() {
                this.erase()
                if (this.check(this.y, this.x - 1)) {
                    this.x--
                }
                this.draw()
            }
        }
        4 = {
            y: 1,
            x: 4,
            check(y, x) {
                if (
                    tablero[y][x] == 0
                    && tablero[y][x + 1] == 0
                    && tablero[y][x - 1] == 0
                    && tablero[y + 1][x + 1] == 0
                ) {
                    return true
                }
            },
            erase() {
                tablero[this.y][this.x] = 0
                tablero[this.y][this.x + 1] = 0
                tablero[this.y][this.x - 1] = 0
                tablero[this.y + 1][this.x + 1] = 0
            },
            draw() {
                tablero[this.y][this.x] = square.color
                tablero[this.y][this.x + 1] = square.color
                tablero[this.y][this.x - 1] = square.color
                tablero[this.y + 1][this.x + 1] = square.color
            },
            down() {
                this.erase()
                if (this.y < 15) {
                    if (this.check(this.y + 1, this.x)) {
                        this.y++
                        this.draw()
                        return true
                    }
                }
                this.draw()
            },
            right() {
                this.erase()
                if (this.check(this.y, this.x + 1)) {
                    this.x++
                }
                this.draw()
            },
            left() {
                this.erase()
                if (this.check(this.y, this.x - 1)) {
                    this.x--
                }
                this.draw()
            }
        }
    },
    class I {
        color = 7
        1 = {
            y: 1,
            x: 4,
            check(Y, X) {
                if (
                    tablero[Y][X] == 0
                    && tablero[Y - 1][X] == 0
                    && tablero[Y + 1][X] == 0
                    && tablero[Y + 2][X] == 0
                ) {
                    return true
                }
            },
            erase() {
                tablero[this.y][this.x] = 0
                tablero[this.y - 1][this.x] = 0
                tablero[this.y + 1][this.x] = 0
                tablero[this.y + 2][this.x] = 0
            },
            draw() {
                tablero[this.y][this.x] = square.color
                tablero[this.y - 1][this.x] = square.color
                tablero[this.y + 1][this.x] = square.color
                tablero[this.y + 2][this.x] = square.color
            },
            down() {
                this.erase()
                if (this.y < 14) {
                    if (this.check(this.y + 1, this.x)) {
                        this.y++
                        this.draw()
                        return true
                    }
                }
                this.draw()
            },
            right() {
                this.erase()
                if (this.check(this.y, this.x + 1)) {
                    this.x++
                }
                this.draw()
            },
            left() {
                this.erase()
                if (this.check(this.y, this.x - 1)) {
                    this.x--
                }
                this.draw()
            }
        }
        2 = {
            y: 1,
            x: 4,
            check(Y, X) {
                if (
                    tablero[Y][X] == 0
                    && tablero[Y][X + 1] == 0
                    && tablero[Y][X - 1] == 0
                    && tablero[Y][X - 2] == 0
                ) {
                    return true
                }
            },
            erase() {
                tablero[this.y][this.x] = 0
                tablero[this.y][this.x + 1] = 0
                tablero[this.y][this.x - 1] = 0
                tablero[this.y][this.x - 2] = 0
            },
            draw() {
                tablero[this.y][this.x] = square.color
                tablero[this.y][this.x + 1] = square.color
                tablero[this.y][this.x - 1] = square.color
                tablero[this.y][this.x - 2] = square.color
            },
            down() {
                this.erase()
                if (this.y < 16) {
                    if (this.check(this.y + 1, this.x)) {
                        this.y++
                        this.draw()
                        return true
                    }
                }
                this.draw()
            },
            right() {
                this.erase()
                if (this.check(this.y, this.x + 1)) {
                    this.x++
                }
                this.draw()
            },
            left() {
                this.erase()
                if (this.check(this.y, this.x - 1)) {
                    this.x--
                }
                this.draw()
            }
        }
        3 = {
            y: 1,
            x: 4,
            check(Y, X) {
                if (
                    tablero[Y][X + 1] == 0
                    && tablero[Y - 2][X + 1] == 0
                    && tablero[Y - 1][X + 1] == 0
                    && tablero[Y + 1][X + 1] == 0
                ) {
                    return true
                }
            },
            erase() {
                tablero[this.y][this.x + 1] = 0
                tablero[this.y - 2][this.x + 1] = 0
                tablero[this.y - 1][this.x + 1] = 0
                tablero[this.y + 1][this.x + 1] = 0
            },
            draw() {
                tablero[this.y][this.x + 1] = square.color
                tablero[this.y - 2][this.x + 1] = square.color
                tablero[this.y - 1][this.x + 1] = square.color
                tablero[this.y + 1][this.x + 1] = square.color
            },
            down() {
                this.erase()
                if (this.y < 15) {
                    if (this.check(this.y + 1, this.x)) {
                        this.y++
                        this.draw()
                        return true
                    }
                }
                this.draw()
            },
            right() {
                this.erase()
                if (this.check(this.y, this.x + 1)) {
                    this.x++
                }
                this.draw()
            },
            left() {
                this.erase()
                if (this.check(this.y, this.x - 1)) {
                    this.x--
                }
                this.draw()
            }
        }
        4 = {
            y: 1,
            x: 4,
            check(y, x) {
                if (
                    tablero[y - 1][x] == 0
                    && tablero[y - 1][x + 2] == 0
                    && tablero[y - 1][x - 1] == 0
                    && tablero[y - 1][x + 1] == 0
                ) {
                    return true
                }
            },
            erase() {
                tablero[this.y - 1][this.x] = 0
                tablero[this.y - 1][this.x + 2] = 0
                tablero[this.y - 1][this.x - 1] = 0
                tablero[this.y - 1][this.x + 1] = 0
            },
            draw() {
                tablero[this.y - 1][this.x] = square.color
                tablero[this.y - 1][this.x + 2] = square.color
                tablero[this.y - 1][this.x - 1] = square.color
                tablero[this.y - 1][this.x + 1] = square.color
            },
            down() {
                this.erase()
                if (this.y < 15) {
                    if (this.check(this.y + 1, this.x)) {
                        this.y++
                        this.draw()
                        return true
                    }
                }
                this.draw()
            },
            right() {
                this.erase()
                if (this.check(this.y, this.x + 1)) {
                    this.x++
                }
                this.draw()
            },
            left() {
                this.erase()
                if (this.check(this.y, this.x - 1)) {
                    this.x--
                }
                this.draw()
            }
        }
    },
]
let pause = false
let sePuedeCambiar = true
let formaActual = 1
let y
let frame = 0
let lastPx
let tablero = []
let bag = []
let square
let slow = 60



for (let i = 0; i < 18; i++) {
    tablero[i] = []
    for (let j = 0; j < 10; j++) {
        tablero[i][j] = 0
    }
}

requestAnimationFrame(game)

elejirPieza()

function elejirPieza() {
    if (bag.length < 1) {
        fillBag()
    }
    square = new piezas[bag[bag.length - 1]]
    bag.pop()
}

function game() {

    move()
    dibujarTablero()
    if (!pause) {
        requestAnimationFrame(game)
    }
}

function move() {

    y = Math.floor(frame / slow)
    frame++

    if (y != lastPx) {
        if (!square[formaActual].down()) {
            verLineas()
            elejirPieza()
            frame = 0
            formaActual = 1
            sePuedeCambiar = true
        }
    }
    lastPx = y

}

function fillBag() {
    while (bag.length < piezas.length) {
        let dado = Math.floor(Math.random() * piezas.length)
        if (!bag.includes(dado)) {
            bag.push(dado)
        }
    }
}

function verLineas() {

    let ciclo = 0
    let Y
    for (let i = 0; i < 18; i++) {
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
    for (let i = 0; i < 17; i++) {
        for (let j = 0; j < 10; j++) {
            if (tablero[i][j] != 0) {
                ctx.fillStyle = colores[tablero[i][j]]
                ctx.fillRect(j * px, (i - 2) * px, px, px)
            }
        }
    }
    for (let i = 0; i < 17; i++) {
        for (let j = 0; j < 10; j++) {
            ctx.lineWidth = px / 10;
            ctx.strokeStyle = "#101720"
            ctx.strokeRect(j * px, i * px, px, px)
        }
    }
}

function cambiarForma() {
    square[formaActual].erase()
    let Y = square[formaActual].y
    let X = square[formaActual].x
    let hasta = formaActual + 4
    let i = formaActual + 1
    for (i; i < hasta; i++) {
        if (i < 5) {
            if (square[i].check(Y, X)) {
                formaActual = i
                square[formaActual].y = Y
                square[formaActual].x = X
                square[formaActual].draw()
                return
            }
        }
        if (i > 4) {
            if (square[i - 4].check(Y, X)) {
                formaActual = i - 4
                square[formaActual].y = Y
                square[formaActual].x = X
                square[formaActual].draw()
                return
            }
        }
    }
    square[formaActual].y = Y
    square[formaActual].x = X
    square[formaActual].draw()
}

function cambiarPieza() {
    sePuedeCambiar = false
    square[formaActual].erase()
    let piezaActual = square.color
    elejirPieza()
    bag.push(piezaActual)
}

body.addEventListener("keydown", (e) => {
    if (e.key == "a") {
        square[formaActual].left()
    }
    if (e.key == "d") {
        square[formaActual].right()
    }
    if (e.key == "p") {
        pause = !pause
        requestAnimationFrame(game)
    }
    if (e.key == "w") {
        if (square.color != 1) {
            cambiarForma()
        }
    }
    if (e.key == "s") {
        slow = 2
    }
    if (e.key === " " && sePuedeCambiar) {
        cambiarPieza()
    }
})

body.addEventListener("keyup", (e) => {
    if (e.key == "s") {
        slow = 60
    }
})