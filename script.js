/* ZÁKLADNÍ INFO
string (text) "Lenka"
number (číslo) 25
operátory     +,-,*,/
             <,>, <=, >=
              === rovná se
              != nerovná se

 a zároveň - && (alt+C)
 nebo - || (alt+W)

Proměnna - let (jménoproměnný) = (cokoliv)
Vypsání něco do konzole - console.log (cokoliv)
Podmínka    If(15>20){console.log("toto číslo je větší než dvacet")}
            Když 15 je větší než 20 do konzole vypíš toto číslo je větší než dvacet
            else if(....){....}
            else {....}

FUNKCE
function pozdrav1(){console.log("pozdrav")}
pozdrav1()

let pozdrav2 = function(){console.log("Toto je pozdrav 2")}
pozdrav2()

let pozdrav3 = () => console.log("Totoje pozdrav 3")
pozdrav3()

let naPatou = function(num){console.log (num / num)}
naPatou(5)

let jmeno = "Honza"
console.log(`ahoj zde je pepan a ${jmeno} a je jim patnáct`) //     $ =alt + tlačítko vedle L
                                                            //      `` = alt + 2x 7










*/
/*
console.log("Ahoj")
console.log("Pepan")

let firstname = "David"
let secondname = "Křížek"

console.log (firstname + "," + secondname)
*/
// ÚKOL
/* 
let firstname = "David"
let job = "programátor"

console.log("Ahoj, jmenuji se "+ firstname +" a pracuji jako "+ job)
*/
/*
let jmeno = "David"
let vek = 30

// početní operace +, -, /, *
let x = vek + (18 * 5) / 5

console.log (jmeno + " " + vek)
console.log (x)
*/

//ÚKOL
/*
let firstname = "David"
let age = 22

console.log ("Jmenuji se " + firstname + " a je mi " + age)
age = age + 5
console.log ("Za pět let mi bude " + age)
*/
//ÚKOL
/*
let student1 = 43
let student2 = 85
let maxpoints = 100
let student1name = "David"
let student2name = "Igor"
console.log (student1name + " dosáhl " + student1 + " % úspěšnosti")
*/

//string (text) "Lenka"
//number (číslo) 25
//operátory     +,-,*,/
//              <,>, <=, >=
//              === rovná se
//              != nerovná se

//ÚKOL
/*
let age = 25
let child = age < 18
let adult = age >= 18
let pensioner = age >= 65
console.log (adult)
*/
/*
let age = 15
let adult = 18

if(age>=adult){
    console.log("Je dospělý")
} else {
    console.log ("Není dospělý")
}
*/
/*
let name = "Jana"
let name2 = "Jana"
let name3 = "Pepa"

if(name === "David"){
    console.log("Ahoj, Davide")}
   else if(name ==="Igor"){console.log("Ahoj, Igore")}
   else if (name === "Pepa"){console.log("Ahoj, Pepo")}
   else {console.log("Nemůžete vstoupit")}
*/

//ÚKOL
/*
let job = "programátorka"

if(job==="programátor" || "programátorka"){console.log("Jaký je rozdíl mezi HTML,CSS a Javascriptem")}
else if(job==="administrátor"){console.log("Jaké znáte druhy sítí")}
else if(job==="sekretářka"){console.log("Jaké znáte funkce v excelu")}
else {console.log("pro vás nemám žádnou otázku")}
*/
//ÚKOL
/*
let teplota = 9

if(teplota<=10){console.log("Chladno")}
else if(teplota>=11&&teplota<=25){console.log("teplo")}
else if(teplota>=26){console.log("horko")}
*/
/*
function pozdrav1(){console.log("pozdrav")}
pozdrav1()

let pozdrav2 = function(){console.log("Toto je pozdrav 2")}
pozdrav2()

let pozdrav3 = () => console.log("Totoje pozdrav 3")
pozdrav3()


let naPatou = (num)=>console.log (num * num)
naPatou(10)

let zdraviciFunkce = (jmeno)=>console.log("Ahoj, já jsem "+ jmeno)
zdraviciFunkce("Igor")
*/

/*

let adultChecker = function(vek){
    if(vek>=18){    let vysledek = "dospělý"
                    return vysledek
}
    else {  let vysledek = "dítě"
                        return vysledek}
}
//adultChecker(15)
let hodnota = adultChecker(10)


if(hodnota === "dospělý"){console.log("můžeš vstoupit")}
else if(hodnota === "dítě"){console.log("nemůžeš vstoupit")}
*/

/*
let kod1 = 15
let kod2 = 30
let kod3 = 50

let heslo=function(x, y, z){if(x===kod1&&y===kod2&&z===kod3)
{console.log("Můžeš vstoupit")}
else{console.log("kod je špatně")}}
heslo(15,30,50)
*/
/*
let jmeno = "Honza"
console.log(`ahoj zde je pepan a ${jmeno} a je jim patnáct`) //     $ =alt + tlačítko vedle L
                                                            //      `` = alt + 2x 7
*/
/*
let IDavid = {
    prijmeni :"Jahn",
    narozeni : "11.05.2000",
}
console.log (IDavid)
console.log (`${IDavid.prijmeni} David se narodil ${IDavid.narozeni}`)
*/
/*
let person1 = {
    name : "David Jahn",
    age : 22,
    city : "Rosice",
}

let person2 = {
    name : "Gabriela Pantůčková",
    age : 20,
    city : "Medlov"
}

console.log(`Jmenuje se ${person2.name} a je jí ${person2.age} a pochází z ${person2.city}`)
console.log(`Jmenuje se ${person1.name} a je jí ${person1.age} a pochází z ${person1.city}`)
*/
/*
let hrac1 = {
    jmeno: "Ronaldo",
    team: "MU",
    noha: "pravák"
}

let hrac2 = {
    jmeno: "Messi",
    team: "PSG",
    noha: "levák"
}


let fotbalista=function(hrac){
    console.log(`${hrac.jmeno} hraje za klub ${hrac.team} a je ${hrac.noha}`)
}

fotbalista(hrac1)
fotbalista(hrac2)
*/

//ÚKOL
/*
let vladniNarizeni = true

let School = {
    type: "Gymnázium",
    street: "Husovická",
    city: "Brno",
    capacity: 25,
    open: function(){
        console.log("Škola " + this.type + " " +this.street+ " " +"je otevřena")
    },
    closed: function(){
        return("Škola je zavřena")
    }

}

let zavrena = School.closed()

console.log(School.type)
console.log(School.city)
School.open()
console.log(zavrena)


if( vladniNarizeni === true){School.open()}
else if(vladniNarizeni === false){console.log(zavrena)}
*/
/*
let password = "17221234"

if(password.length >=13){console.log("Velmi silné heslo")}
else if(password.length <=13&&password.length>=8){console.log("Silné heslo")}
else if(password.length <=8){console.log("Slabé heslo")}

if(password.includes(1234)){console.log("Heslo nesmí obsahovat 1234")}
else{}
*/
/*
let password = ["ahoj123", "čau159", "zdar258"]

let randomn = (Math.ceil(Math.random()*3))
let jok = (Math.ceil(Math.random()*3))
console.log (password[randomn])
console.log (jok)
*/

/*
let jmeno1 = prompt()
let jmeno2 = prompt()
let jmeno3 = prompt()
let pole1 = []
pole1.push = jmeno1 + " " + jmeno2 +" "+ jmeno3
console.log(pole1)
let pole2 = pole1
let jmeno4 = prompt()
let jmeno5 = prompt()
let jmeno6 = prompt()
pole2.shift = jmeno4 +" "+ jmeno5 +" " + jmeno6

console.log(pole1)
*/
/*

let toDo = ["Vyvenčit psa","Koupit kečup","Uvařit","Zatancovat si"]

toDo.forEach(function(activity, index){
    let number = index + 1
    console.log (number + ". "+activity) 
})
*/
/*
let toDo = ["sestříhat video", "uklidit pokoj", "vyluxovat"]

toDo.forEach(function(activity, index){
    let number = index +1
    console.log(number + ". " +activity)
})

let pole = []

for(let i=0;i<5;i++){pole.push(i)}

console.log(pole)
*/

// Projdi videa 6 nazpět a napiš si všechny push, shift.....