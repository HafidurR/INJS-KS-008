let r = 10
const PI = 3.14

// luas(r)

r = 5
// luas(r)

r = 6
// luas(r)

r = 8
//luas(r)

//luas("Nyoba aja")

// function luas(jari) {
//     if (typeof jari === "number") {
//         console.log(PI * jari * jari)
//     } else {
//         console.log(jari + " Bukan angka");
//     }
    
// }

panggil("hafid","female")

function panggil(nama, gender) {
    // if (gender == "female") {
    //     console.log("Hallo nyonya " + nama)
    // } else if (gender == "male") {
    //     console.log("Halo tuan " + nama)
    // } else {
    //     console.log("Gender tak ada");
    // }
    //gender == "male" ? console.log(`Halo Mr ${nama}`) : console.log(`Halo Mrs ${nama}`)
}

//cara declare function

//1. Regular
//function panggil (nama, gender) {}

//2. Variable declaration
const LuasPersegi = function (p, l) {
    return p * l
}
//console.log(LuasPersegi(2,3));

//3. Arrow function
const NilaiKHS = (nilai) => {
    // >= 80 = A
    // 70 -79 = B
    // 60 - 69 = C
    // 50 - 59 = D
    // < 50 = E
    if (nilai >= 80 ) {
        return 'A'
    } else if ( nilai >= 70 && nilai <= 79) {
        return 'B'
    } else if (nilai >= 60) {
        return 'C'
    } else if (nilai  >= 50) {
        return 'D'
    } else {
        return 'E'
    }

}
//console.log(NilaiKHS(69))

//input -> parameter { params1, patams2, dst}
//proses -> { code }
//output -> return operasi  