import { expect } from 'chai';
import User from '../src/User';
import Hydration from '../src/Hydration';

describe('User', () => {
  let user;
  let currentUser;
  let currentUserHydration;

  beforeEach(() => {
    user =  [
    {
      "id": 2,
      "name": "Jarvis Considine",
      "address": "30086 Kathryn Port, Ciceroland NE 07273",
      "email": "Dimitri.Bechtelar11@gmail.com",
      "strideLength": 4.5,
      "dailyStepGoal": 5000,
      "friends": [
        9,
        18,
        24,
        19
      ]
    },
  ];

    currentUserHydration = [
    {
      "userID": 2,
      "date": "2019/06/15",
      "numOunces": 75
    },
    {
      "userID": 2,
      "date": "2019/06/16",
      "numOunces": 91
    },
    {
      "userID": 2,
      "date": "2019/06/17",
      "numOunces": 96
    },
    {
      "userID": 2,
      "date": "2019/06/18",
      "numOunces": 70
    },
    {
      "userID": 2,
      "date": "2019/06/19",
      "numOunces": 76
    },
    {
      "userID": 2,
      "date": "2019/06/20",
      "numOunces": 71
    },
    {
      "userID": 2,
      "date": "2019/06/21",
      "numOunces": 27
    },
    {
      "userID": 2,
      "date": "2019/06/22",
      "numOunces": 58
    }
  ];

    currentUser = new User(user);
  });

  it('should be a function', function () {
    expect(User).to.be.a('function');
  });

  it(`should be an instance of User`, () => {
    expect(currentUser).to.be.instanceOf(User);
  });

  it(`should be equal to user data`, () => {
    expect(currentUser.user).to.deep.equal(user[0]);
  });

  it(`should return a first name of the user`, () => {
    expect(currentUser.returnUserFirstName()).to.be.equal('Jarvis')
  });

});
