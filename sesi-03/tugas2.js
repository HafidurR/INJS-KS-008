let orang = [
    { name: "Yusuf", noAbsen : "injs-ks-001" },
    { name: "Wahyu", noAbsen : "injs-ks-002" },
    { name: "Hafid" , noAbsen : "injs-ks-003"},
    { name: "Raka" , noAbsen : "injs-ks-004"},
    { name: "Rizky" , noAbsen : "injs-ks-005"},
    { name: "Yolan" , noAbsen : "injs-ks-006"},
]

let result = orang.reduce((author, val) =>  {
    let hasil = orang.length ? " " : ""

    return author + val.name + hasil
})

console.log(orang);