import { expect } from 'chai';
import User from '../src/User';

describe('User', () => { 
  let user1;
  let luisa;

  beforeEach(() => {
    user1 =  [{
      "id": 1,
      "name": "Luisa Hane",
      "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
      "email": "Diana.Hayes1@hotmail.com",
      "strideLength": 4.3,
      "dailyStepGoal": 10000,
      "friends": [
        16,
        4,
        8
      ]
    }]

    luisa = new User(user1);
  }); 

  it('should be a function', function () {
    expect(User).to.be.a('function');
  });

  it(`should be an instance of User`, () => {
    expect(luisa).to.be.instanceOf(User);
    
  });

  it(`should be equal to user1 data`, () => {
    expect(luisa.user).to.deep.equal(user1[0]);
  });
  
  it(`should return a first name of the user`, () => {
    expect(luisa.returnUserFirstName()).to.be.equal('Luisa')
  });

});
