moneyCounter = document.querySelector(".clicker__money");
const musicIcon = document.querySelector("#music__icon");
const dragonHitBox = document.querySelector(".dragon__hitbox");
const healthBar = document.querySelector("#health__bar");
const healthProgress = document.querySelector(".health");

const workButton = document.querySelector(".work__button");
const upgradeMenuBtn = document.querySelector(".shop__upgrades");
const characterBtn = document.querySelector(".character__button")
const upgradeMenu = document.querySelector(".shop__upgrade-wrapper");
const characterMenu = document.querySelector(".character__menu");
const congratulation = document.querySelector(".congratulation");
const closeShopBtn = document.querySelector(".close__button-shop");
const closeCharacterBtn = document.querySelector(".close__button-character");
const retryBtn = document.querySelector("#button__retry");

const swordBtn = document.querySelector("#sword__button");
const helmetBtn = document.querySelector("#helmet__button");
const chestBtn = document.querySelector("#chest__button");
const legginsBtn = document.querySelector("#leggins__button");
const bootsBtn = document.querySelector("#boots__button");
const musicBtn = document.querySelector(".background__music");

const swordLabel = document.querySelector("#sword__label");
const helmetLabel = document.querySelector("#helmet__label");
const chestLabel = document.querySelector("#chest__label");
const legginsLabel = document.querySelector("#leggins__label");
const bootsLabel = document.querySelector("#boots__label");

const counterMoney = document.querySelector("#counter__money");
const counterClick = document.querySelector("#counter__click");
const counterMPC = document.querySelector("#counter__MPC");
const counterStrength = document.querySelector("#counter__strength");

const finalMoney = document.querySelector("#final__money");
const finalClick = document.querySelector("#final__click");
const finalMPC = document.querySelector("#final__MPC");
const finalStrength = document.querySelector("#final__strength");

let coins = 0;
MPC = 1;
strength = 1;

let buyValue = {
    sword : 25,
    helmet : 50,
    chest : 50,
    leggins : 50,
    boots : 50
}

let counter = {
    money : 0,
    click : 0,
}

const clickSnd = new Audio("sound/click.wav");
const punchSnd = new Audio("sound/punch.mp3");
const buySnd = new Audio("sound/buy.mp3");
const deathSnd = new Audio("sound/death.mp3");

const backgroundMusic = new Audio("sound/background.mp3");
backgroundMusic.loop = true;
backgroundMusic.volume = 0.35;
punchSnd.volume = 0.4;

let musicStatus = "false";

workButton.addEventListener("click", function(){
    clickSnd.play();
    clickSnd.currentTime=0;
    coins += MPC;
    counter.money += MPC;
    counter.click += 1;
    moneyCounter.textContent = `${coins} Бебра-коинов`
    counterMoney.textContent = `Всего денег : ${counter.money}`
    counterClick.textContent = `Всего кликов : ${counter.click}`
    counterMPC.textContent = `Денег за клик : ${MPC}`
})

swordBtn.addEventListener("click", function(){
    if (coins >= buyValue.sword){
        coins -= buyValue.sword;
        buyValue.sword += 25;
        strength += 1;
        moneyCounter.textContent = `${coins} Бебра-коинов`;
        swordLabel.textContent = `Меч (${buyValue.sword} Б)`;
        counterMPC.textContent = `Денег за клик : ${MPC}`;
        counterStrength.textContent = `Сила удара : ${strength}`;
        buySnd.play();
    }
})

helmetBtn.addEventListener("click", function(){
    if (coins >= buyValue.helmet){
        coins -= buyValue.helmet;
        buyValue.helmet += 25;
        MPC += 1;
        moneyCounter.textContent = `${coins} Бебра-коинов`;
        helmetLabel.textContent = `Шлем (${buyValue.helmet} Б)`;
        counterMPC.textContent = `Денег за клик : ${MPC}`
        buySnd.play();
    }
})

chestBtn.addEventListener("click", function(){
    if (coins >= buyValue.chest){
        coins -= buyValue.chest;
        buyValue.chest += 25;
        MPC += 1;
        moneyCounter.textContent = `${coins} Бебра-коинов`;
        chestLabel.textContent = `Нагрудник (${buyValue.chest} Б)`;
        counterMPC.textContent = `Денег за клик : ${MPC}`
        buySnd.play();
    }
})

legginsBtn.addEventListener("click", function(){
    if (coins >= buyValue.leggins){
        coins -= buyValue.leggins;
        buyValue.leggins += 25;
        MPC += 1;
        moneyCounter.textContent = `${coins} Бебра-коинов`;
        legginsLabel.textContent = `Поножи (${buyValue.leggins} Б)`;
        counterMPC.textContent = `Денег за клик : ${MPC}`
        buySnd.play();
    }
})

bootsBtn.addEventListener("click", function(){
    if (coins >= buyValue.boots){
        coins -= buyValue.boots;
        buyValue.boots += 25;
        MPC += 1;
        moneyCounter.textContent = `${coins} Бебра-коинов`;
        bootsLabel.textContent = `Ботинки (${buyValue.boots} Б)`;
        counterMPC.textContent = `Денег за клик : ${MPC}`
        buySnd.play();
    }
})

dragonHitBox.addEventListener("click", function(){
    healthBar.value -= strength;
    healthProgress.textContent = `${healthBar.value} / 10000`;
    punchSnd.play();
    punchSnd.currentTime=0;
    if (healthBar.value == 0){
        deathSnd.play();
        congratulation.classList.add("active");
        finalMoney.textContent = `Всего денег : ${counter.money}`;
        finalClick.textContent = `Всего кликов : ${counter.click}`;
        finalMPC.textContent = `Денег за клик : ${MPC}`;
        finalStrength.textContent = `Сила удара : ${strength}`;
    }
})


closeShopBtn.addEventListener("click", function(){
    upgradeMenu.classList.remove("active");
})

closeCharacterBtn.addEventListener("click", function(){
    characterMenu.classList.remove("active")
})

upgradeMenuBtn.addEventListener("click", function(){
    upgradeMenu.classList.add("active")
})

characterBtn.addEventListener("click", function(){
    characterMenu.classList.add("active")
})

musicBtn.addEventListener("click", function(){
    if (musicStatus == "false") {
        backgroundMusic.play()
        musicStatus = "true"
        musicIcon.src="img/button/pause.png"
    }
    else if (musicStatus == "true"){
        backgroundMusic.pause();
        musicStatus = "false";
        musicIcon.src="img/button/play.png"
    }
})

retryBtn.addEventListener("click", function(){
    healthBar.value = 10000;
    coins = 0;
    MPC = 1;
    strength = 1;
    buyValue.sword = 25;
    buyValue.helmet = 50;
    buyValue.chest = 50;
    buyValue.leggins = 50;
    buyValue.boots = 50;
    counter.money = 0;
    counter.click = 0;

    moneyCounter.textContent = `${coins} Бебра-коинов`;
    healthProgress.textContent = `${healthBar.value} / 10000`;

    swordLabel.textContent = `Меч (${buyValue.sword} Б)`;
    helmetLabel.textContent = `Шлем (${buyValue.helmet} Б)`;
    chestLabel.textContent = `Нагрудник (${buyValue.chest} Б)`;
    legginsLabel.textContent = `Поножи (${buyValue.leggins} Б)`;
    bootsLabel.textContent = `Ботинки (${buyValue.boots} Б)`;

    counterMoney.textContent = `Всего денег : ${counter.money}`
    counterClick.textContent = `Всего кликов : ${counter.click}`
    counterMPC.textContent = `Денег за клик : ${MPC}`
    counterStrength.textContent = `Сила удара : ${strength}`;

    congratulation.classList.remove("active");
})

