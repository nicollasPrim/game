
let des = document.getElementById('des')?.getContext('2d')
    
const car = new Obj(0, 0, 600, 900, './img/menuGame.png')
const f1 = new Car(300, 650, 100, 150, './img/carro3Direita.png')
const c2 = new Carro2(100, -180, 90, 150, './img/carro2Esquerda.png', 8)
const c3 = new Carro3(300, -180, 90, 150, './img/renan-removebg-preview.png', 6)
const c4 = new Carro4(500, -180, 90, 150, './img/mcLata-removebg-preview.png', 7)

let pitStop = new PitStop(600, -40, 100, 100, './img/pitStop.png')
let zebra1 = new Estrada(560, 0, 55, 90, 'red')
let zebra2 = new Estrada(560, 90, 50, 90, 'white')
let zebra3 = new Estrada(560, 180, 55, 90, 'red')
let zebra4 = new Estrada(560, 270, 55, 90, 'white')
let zebra5 = new Estrada(560, 360, 55, 90, 'red')
let zebra6 = new Estrada(560, 450, 55, 90, 'white')
let zebra7 = new Estrada(560, 540, 55, 90, 'red')
let zebra8 = new Estrada(560, 630, 55, 90, 'white')
let zebra9 = new Estrada(560, 720, 55, 90, 'red')
let zebra10 = new Estrada(560, 810, 55, 90, 'white')
let zebra11 = new Estrada(560, 990, 55, 90, 'red')
let zebra1e = new Estrada(0, 0, 50, 90, 'red')
let zebra2e = new Estrada(0, 90, 50, 90, 'white')
let zebra3e = new Estrada(0, 180, 50, 90, 'red')
let zebra4e = new Estrada(0, 270, 50, 90, 'white')
let zebra5e = new Estrada(0, 360, 50, 90, 'red')
let zebra6e = new Estrada(0, 450, 50, 90, 'white')
let zebra7e = new Estrada(0, 540, 50, 90, 'red')
let zebra8e = new Estrada(0, 630, 50, 90, 'white')
let zebra9e = new Estrada(0, 720, 50, 90, 'red')
let zebra10e = new Estrada(0, 810, 50, 90, 'white')
let zebra11e = new Estrada(0, 900, 50, 90, 'red')
let fase = document.getElementById('fase')

let textFase = new Text()

let pitStopPaused = false
let pitStopStartTime = 0
pitStop.speed = 5

let speed;

let game = true

let sair = document.getElementById('sair')

let menuSong = new Audio('./assets/gaem oveh.wav')
let gameSong = new Audio('./assets/gaem oveh.wav')
let motor = new Audio('./assets/motor.wav')

motor.volume = 0.8
motor.loop = true

let phaseMessage = ''
let phaseMessageTime = 0

let gameOver = false

let fase1 = `GP da Austrália! `
let fase2 = 'GP da China! '
let fase3 = 'GP de Mônaco! '
let fase4 = 'GP de São Paulo! '

menuSong.loop = true
gameSong.loop = true

function reiniciarJogo() {
    iniciarJogo()
    gameOver = false
}

function iniciarJogo() {
    gameOver = false
    f1.vida = 3
    f1.pontos = 0
    f1.x = 300  
    f1.y = 650
    c2.recomeca()
    c3.recomeca()
    c4.recomeca()
    pitStop.recomeca()
    pitStop.speed = 5  
    phaseMessage = ''
    phaseMessageTime = 0
    game = true
}

function voltaMenu(){
    if(gameOver){
        
    }
}

document.addEventListener('keypress', (e) => {
    if (gameOver) {
        if (e.key.toLowerCase() === 'g') reiniciarJogo()
        if (e.key.toLowerCase() === 'p') voltaMenu() // Adicionado
    } else {
        if (e.key.toLowerCase() === 'g' && !game) iniciarJogo()
        if (e.key.toLowerCase() === 'p') game = false
    }
});

document.addEventListener('keydown', (e) => {
    if (game && !pitStopPaused) { 
        if (e.key === 'a') {
            f1.dir = -10
        } else if (e.key === 'd') {
            f1.dir = +10
        }
    }
})

document.addEventListener('keyup', (e) => {
    if (game) {
        if (e.key === 'a' || e.key === 'd') {
            f1.dir = 0
        }
    }
})

function voltaMenu(){
    game = false
    gameOver = false
    f1.vida = 5
    f1.pontos = 0
    f1.x = 100
    f1.y = 650
    c2.recomeca()
    c3.recomeca()
    c4.recomeca()
    pitStop.recomeca()
    
    des.clearRect(0, 0, 600, 900)
    desenharInicio()
}



function colisao() {
    if (f1.colid(c2)) {
        f1.vida -= 1;
        f1.invencivel = true 
        c2.recomeca()
        setTimeout(() => {
            f1.invencivel = false
        }, 1000)
    }
    if(f1.colid(c3)){
        f1.vida -= 1
        f1.invencivel = true
        c3.recomeca()
        setTimeout(() => {
            f1.invencivel = false
        }, 1000)
    }
    if(f1.colid(c4)){
        f1.vida -= 1
        f1.invencivel = true
        c4.recomeca()
        setTimeout(()=>{
            f1.invencivel = false
        }, 1000)
    }
    if (f1.colid(pitStop)) {
        if(f1.vida < 5) { 
            f1.vida += 1;
        }
        pitStop.recomeca()
    }
}

function pontos(){
    if (f1.point(c2)) {
        f1.pontos += 1
    }
    if(f1.point(c3)){
        f1.pontos += 1
    }
    if(f1.point(c4)){
        f1.pontos += 1
    }
}


function atualizar(){
    motor.play()
    zebra1.mov_est()
    zebra2.mov_est()
    zebra3.mov_est()
    zebra4.mov_est()
    zebra5.mov_est()
    zebra6.mov_est()
    zebra7.mov_est()
    zebra8.mov_est()
    zebra9.mov_est()
    zebra10.mov_est()
    zebra11.mov_est()
    zebra1e.mov_est()
    zebra2e.mov_est()
    zebra3e.mov_est()
    zebra4e.mov_est()
    zebra5e.mov_est()
    zebra6e.mov_est()
    zebra7e.mov_est()
    zebra8e.mov_est()
    zebra9e.mov_est()
    zebra10e.mov_est()
    zebra11e.mov_est()
    f1.move()
    c2.move()
    c3.move()
    c4.move()

    pitStop.move()
    if(c2.justRespawned) {
        f1.pontos += 1
        c2.justRespawned = false
    }
    colisao()
    if(f1.colid(c2)) {
        f1.vida -= 1
        c2.recomeca()
        f1.x = 100 
        f1.y = 600
    }
    if(c3.justRespawned) {
        f1.pontos += 1
        c3.justRespawned = false
    }
    colisao()
    if(f1.colid(c3)) {
        f1.vida -= 1
        c3.recomeca()
        f1.x = 100  
        f1.y = 600
    }
    if(c4.justRespawned) {
        f1.pontos += 1
        c4.justRespawned = false
    }
    colisao()
    if(f1.colid(c4)) {
        f1.vida -= 1
        c4.recomeca()
        f1.x = 100;
        f1.y = 600
    }
    if(f1.vida <= 0) {
        game = false
        gameOver = true;
    }
    if(pitStop.y >= 900) {
        pitStop.recomeca()
    }
}

function desenhar(){
    des.fillStyle = 'grey'; 
    des.fillRect(0, 0, 600, 900)
    
    zebra1.des_estrada()
    zebra2.des_estrada()
    zebra3.des_estrada()
    zebra4.des_estrada()
    zebra5.des_estrada()
    zebra6.des_estrada()
    zebra7.des_estrada()
    zebra8.des_estrada()
    zebra9.des_estrada()
    zebra10.des_estrada()
    zebra11.des_estrada()
    zebra1e.des_estrada()
    zebra2e.des_estrada()
    zebra3e.des_estrada()
    zebra4e.des_estrada()
    zebra5e.des_estrada()
    zebra6e.des_estrada()
    zebra7e.des_estrada()
    zebra8e.des_estrada()
    zebra9e.des_estrada()
    zebra10e.des_estrada()
    zebra11e.des_estrada()
    f1.draw();
    c2.draw();
    c3.draw();
    c4.draw();

    let corrida = document.getElementById('corrida')
    let circuito = document.getElementById('circuito')
    let pais = document.getElementById('pais')
    let cidade = document.getElementById('cidade') 
    let tamanho = document.getElementById('tamanho') 
    let gp = document.getElementById('gp')

    if(f1.pontos < 20) {
        gp.innerHTML = 'GP da Australia'
        corrida.innerHTML = '1'
        circuito.innerHTML = `Albert Park`
        pais.innerHTML = `Australia`
        cidade.innerHTML = `Melbourne`
        tamanho.innerHTML = `5,278 Km`
    }
    }
    if(f1.pontos >= 20 && f1.pontos < 40) {
        gp.innerHTML = 'GP da China!'
        corrida.innerHTML = '2'
        circuito.innerHTML = `Internacional de Xangai`
        pais.innerHTML = `Chima`
        cidade.innerHTML = `Xangai`
        tamanho.innerHTML = `5,451 Km`
        c2.speed = 13
        c3.speed = 16
        c4.speed = 12
    }
    if(f1.pontos >= 40 && f1.pontos < 60) {
        gp.innerHTML = 'GP de Mônaco!'
        corrida.innerHTML = '3'
        circuito.innerHTML = `*CIRCUITO DE RUA*`
        pais.innerHTML = `Mõnaco`
        cidade.innerHTML = `Mônaco`
        tamanho.innerHTML = `3,337 Km`
        c2.speed = 17
        c3.speed = 19
        c4.speed = 16
    }
    if(f1.pontos >= 60 && f1.pontos < 80) {
        gp.innerHTML = 'GP de São Paulo!'
        corrida.innerHTML = '4'
        circuito.innerHTML = `Interlagos`
        pais.innerHTML = `Brasil`
        cidade.innerHTML = `São Paulo`
        tamanho.innerHTML = `4,309 Km`
        c2.speed = 20
        c3.speed = 24 
        c4.speed = 22
    }

    pitStop.draw();
    
    des.fillStyle = 'white';
    des.font = '20px Bankgothic md bt';
    des.fillText(`Vidas: ${f1.vida}`, 30, 30);
    des.fillText(`Ultrapassagens: ${f1.pontos}`, 30, 60);
    
    if(f1.inPitStop) {
        des.fillStyle = 'rgba(0, 0, 0, 0.7)';
        des.fillRect(0, 0, 600, 900);
        
        const progresso = f1.pitStopProgress / f1.pitStopDuration;
        des.fillStyle = 'yellow';
        des.fillRect(150, 400, 300 * progresso, 30);
        
        des.fillStyle = 'white';
        des.font = '30px Arial';
        des.fillText('PIT STOP', 250, 380);
        des.fillText(`${Math.floor(progresso * 100)}%`, 280, 450);
    }
    
    if(phaseMessageTime > 0){
        des.fillStyle = 'gold';
        des.font = '40px Bankgothic md bt';
        des.textAlign = 'center';
        des.fillText(phaseMessage, 300, 450);
        phaseMessageTime -= 16;
    }


function desenharInicio(){
    car.draw()
}

function desenharGameOver() {
    des.fillStyle = 'red';
    des.font = '60px futura md bt';
    des.textAlign = 'center';
    des.fillText('GAME OVER', 300, 450);
    
    des.fillStyle = 'white';
    des.font = '20px Arial';
    des.fillText('Pressione F5 para recomeçar ou P para voltar ao menu!', 300, 500);
}

function main(){
    if(game) {
        des.clearRect(0, 0, 600, 900); 
        atualizar();
        desenhar();
        requestAnimationFrame(main);
    } else {
        des.clearRect(0, 0, 600, 900);
        if(gameOver) {
            desenharGameOver();
        } else {
            desenharInicio();
        }
        requestAnimationFrame(main);
    }
}

main();
 