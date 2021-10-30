const request = require('supertest');
const app = require('../app');
const data = require('../data.json');

data1 = {
    username: "hafid",
    password: "hafid123"
}

describe("Unit Test of Admin", () => {

    test("POST Register", () => {
        return request(app)
            .post('/register')
            .send({
                id: 1,
                name: 'john',
                age: 21,
                usernamae: 'john123',
                password: 'john123'
            })
            .set('Content-Type', 'application/json')
            .expect(201)
            .then(data => {
                expect(data.body.status).toBe('success')
                expect(data.body.message).toBe('register success')
                expect(data.body.data).not.toBeNull()
            })

    })

    test("Login Success", (done) => {
        request(app)
            .post('/login')
            .send(data[4])
            .end((err, res) => {
                if (err) {
                    done(err)
                }
                expect(res.status).toEqual(200);
                expect(typeof res.body).toEqual("object");
                expect(res.body).toHaveProperty("token");
                expect(typeof res.body.token).toEqual("string");
                done()
            })
    });

    test("Login error", (done) => {
        request(app)
            .post('/login')
            .send(data1)
            .end((err, res) => {
                if (err) {
                    done(err)
                }
                expect(res.status).toEqual(401);
                done()
            })
    })

    test("GET all Admin", () => {
        return request(app)
            .get('/admin')
            .set('authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwibmFtYSI6IkhhZmlkIiwiYWdlIjoyMCwidXNlcm5hbWUiOiJoYWZpZCIsInBhc3N3b3JkIjoiMTIzaGFmaWQiLCJpYXQiOjE2MzU2MDk1MzAsImV4cCI6MTYzNTY5NTkzMH0.BZBO1FF19Kid43M37wFzDTFyQ1wShJfY-L02oO4Mh48')
            .set('Content-Type', 'application/json')
            .expect(200)
            .then(data => {
                expect(data.body.status).toBe('success')
                expect(data.body.message).toBe('success get all')
            })
    })

    test("Failed GET all Admin", () => {
        return request(app)
            .get('/admin')
            .set('Content-Type', 'application/json')
            .expect(403)
    })

})