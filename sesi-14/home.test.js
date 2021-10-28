const request = require("supertest")
const app = require("./app")

// untuk menggunakan express yang kita buat
// HTTP method - get, post //, put, patch, delete, dll
// Menyelesaikan request yang dibuat, menerima response dari express kita

describe("GET / Route", function () {
    test("GET / shloud return json => { page: \"\" }", function (done) {
        request(app)
            .get('/')
            .end(function (err, res) {
                if (err) console.log(err)
                else {
                    // Assertion
                    // Tipe res itu object?
                    expect(typeof res.body).toBe("object")
                    // Apakah res punya properti page?
                    expect(res.body).toHaveProperty("page")
                    // Apakah res.page sama dengan Home?
                    expect(res.body.page).toBe("Home")
                    done()
                }
            });
    })

})