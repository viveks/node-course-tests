const request = require('supertest');
const server = require ('./server.js');
const expect = require('expect');

var app = server.app;

describe('Server', () => {
  describe('#users',() => {
    it('should check if user is present',(done) =>{
      request(app)
      .get('/users')
      .expect(200)
      .expect((res) => {
        expect(res.body).toInclude({
          name: 'Vivek Sinha',
          age: 25,
          location: 'Framingham MA'
        })
      })
      .end(done);
    })
  })
})
