const utils = require('./utils');
const expect = require ('expect');

describe('Utils',()=>{
  describe('#add',()=>{
    it('should add two numbers',()=>{
      var res = utils.add(33,11);
      expect(res).toBeA('number').toBe(44);
      // if (res!== 44){
      //   throw new Error(`Expected 44, but got ${res}`);
      // }
    });
    it('should async suare a number', (done) => {
      utils.asyncSquare(3,(res) =>{
        expect(res).toBe(9);
        done();
      });
    })
  })
  describe('#square',()=>{
    it('should square a number', ()=>{
      var res = utils.square(-3);
      expect(res).toBeA('number').toBe(9);
      // if (res!==9){
      //   throw new Error(`Expected 9, but got ${res}`);
      // }
    })
  })
  describe('#misc',()=>{
    it('should verify first and last names are set', ()=>{
      var user={location: 'Boston', age:40};
      var res = utils.setName(user, 'Vivek Sinha');
      expect(res).toBeA('object').toInclude({
        firstName: 'Vivek',
        lastName: 'Sinha'
      });
    })
  })
})
