import { EMBEREK } from "./adat.js";
import { rendez, szures } from "./adatKezelo.js";
import { tablazatLetrehoz, megjelenit } from "./listakezelo.js";
 function regiMunka() {
  
function listaKiir() {
  for (let index = 0; index < EMBEREK.length; index++) {
    const element = EMBEREK[index];
    console.log(element);
    console.log(EMBEREK[index]);
  }
}

listaKiir();

/*const listaKiir2() {
    for (let index = 0; index < LISTA.length; index++) {
        const element = LISTA[index];
        console.log(element)
        console.log(LISTA[index])
        
    }
}*/

//listaKiir2()

const listaKiir3 = function () {
  for (let index = 0; index < EMBEREK.length; index++) {
    const element = EMBEREK[index];
    console.log(element);
    console.log(EMBEREK[index]);
  }
};

listaKiir3();

function listaKiir4() {
  EMBEREK.forEach(function (ember, i) {
    console.log(ember);
    //LISTA.forEach(function (rokarudi, kismacsa) {
    // console.log(rokarudi,kismacska)
    //LISTA.forEach(function (elem, index) {
    //     console.log(elem,index)
  });
}

listaKiir4();

function idosebb30() {
  const regebbMint30 = EMBEREK.filter(function (ember) {
    return ember.kor > 30;
  });
  console.log(regebbMint30);
}

idosebb30();

function ferfiak() {
  const ferfiak = EMBEREK.filter(function (ember) {
    return ember.nem;
  });
  console.log(ferfiak);
}

ferfiak();

function ferfiak20evFelett() {
  const ferfiak20 = EMBEREK.filter(function (ember) {
    return ember.nem && ember.kor >= 20;
  });
  console.log(ferfiak20);
}
ferfiak20evFelett();

function rendez() {
  EMBEREK.sort(function (e1, e2) {
    return e1.kor - e2.kor;
  });

  console.log(EMBEREK);
}

rendez();

function veletlen() {
  EMBEREK.sort(function () {
    return Math.random() - 0.5;
  });

  console.log(EMBEREK);
}

veletlen();
}

let rIrany = 1
init(EMBEREK)
szuresNevSzerint()
function init(lista) {

  let szoveg = tablazatLetrehoz(lista);
  megjelenit(szoveg);
  rendezEsemeny()
}

function rendezEsemeny() {
    const nevMezoELEM = $(".adatok table th").eq(0)
    nevMezoELEM.on("click", function () {
      const LISTA = rendez(EMBEREK,"nev", rIrany)
      console.log(LISTA);
      init(LISTA)
      rIrany *= -1
      console.log(rIrany);
    })
}

function szuresNevSzerint() {
  const szELEM = $("#sznev")
szELEM.on("keyup", function () {
  let szoveg = szELEM.val()
  init(szures(EMBEREK,szoveg))
})
}


  



