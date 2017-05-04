const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');


describe('App',() => {
  var db = {
    saveUser: expect.createSpy()
  };
  app.__set__('db',db);

  it('it should call the spy correctly', ()=>{
    var spy = expect.createSpy();
    spy();
    expect(spy).toHaveBeenCalled();
  });

  it('it should call saveUser with user object',()=>{
    var email = 'vsinha@xe.com';
    var password = 'abcd';
    app.handleSignup(email,password);
    expect(db.saveUser).toHaveBeenCalledWith({email,password});
  });
});
