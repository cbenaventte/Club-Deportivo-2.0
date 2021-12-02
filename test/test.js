const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../index')
chai.use(chaiHttp)
describe('Probando API REST con Mocha - Chai', function () {
    it('Probando GET - La data debe contener una propiedad llamada deportes y esta debe ser un arreglo',
        function () {
            chai
                .request(server)
                .get('/deportes')
                .end(function (err, res) {
                    let data = JSON.parse(res.text)
                    chai.expect(data).to.have.property('deportes')
                    chai.expect(data.deportes).to.be.an('array')
                })
        })
})