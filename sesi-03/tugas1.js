let orang =  [
    { name: "Yusuf"},
    { name: "Wahyu"},
    { name: "Hafid"},
    { name: "Raka"},
    { name: "Rizky"},
    { name: "Yolan"},
  ]

orang.map((e, i) => {
  e.noAbsen = "injs-ks-" + i
})
console.log(orang);