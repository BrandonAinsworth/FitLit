import { expect } from 'chai';
import Hydration from '../src/Hydration';
import User from '../src/User';
import UserRepository from '../src/UserRepository'

describe('Hydration', () => {

  let hydration;
  let hydrationData;
  let userRepo;
  let user;
  let userID;
  let usersData;

  let data;

  beforeEach(() => { 

    data = 
    {
      "hydrationData" : [
        {
          "userID": 1,
          "date": "2019/06/15",
          "numOunces": 37
        },
        {
          "userID": 2,
          "date": "2019/06/15",
          "numOunces": 75
        },
        {
          "userID": 3,
          "date": "2019/06/15",
          "numOunces": 47
        },
        {
          "userID": 1,
          "date": "2019/06/16",
          "numOunces": 69
        },
        {
          "userID": 2,
          "date": "2019/06/16",
          "numOunces": 91
        },
        {
          "userID": 3,
          "date": "2019/06/16",
          "numOunces": 99
        },
        {
          "userID": 1,
          "date": "2019/06/17",
          "numOunces": 96
        },
        {
          "userID": 2,
          "date": "2019/06/17",
          "numOunces": 96
        },
        {
          "userID": 3,
          "date": "2019/06/17",
          "numOunces": 28
        },
        {
          "userID": 1,
          "date": "2019/06/18",
          "numOunces": 61
        },
        {
          "userID": 2,
          "date": "2019/06/18",
          "numOunces": 70
        },
        {
          "userID": 3,
          "date": "2019/06/18",
          "numOunces": 40
        },
        {
          "userID": 1,
          "date": "2019/06/19",
          "numOunces": 91
        },
        {
          "userID": 2,
          "date": "2019/06/19",
          "numOunces": 76
        },
        {
          "userID": 3,
          "date": "2019/06/19",
          "numOunces": 85
        },
        {
          "userID": 1,
          "date": "2019/06/20",
          "numOunces": 50
        },
        {
          "userID": 2,
          "date": "2019/06/20",
          "numOunces": 71
        },
        {
          "userID": 3,
          "date": "2019/06/20",
          "numOunces": 51
        },
        {
          "userID": 1,
          "date": "2019/06/21",
          "numOunces": 50
        },
        {
          "userID": 2,
          "date": "2019/06/21",
          "numOunces": 27
        },
        {
          "userID": 3,
          "date": "2019/06/21",
          "numOunces": 41
        },
        {
          "userID": 1,
          "date": "2019/06/22",
          "numOunces": 43
        },
        {
          "userID": 2,
          "date": "2019/06/22",
          "numOunces": 58
        },
        {
          "userID": 3,
          "date": "2019/06/22",
          "numOunces": 78
        }
      ]
    }
  


    usersData = [
      {
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
      },
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
      {
        "id": 3,
        "name": "Herminia Witting",
        "address": "85823 Bosco Fork, East Oscarstad MI 85126-5660",
        "email": "Elwin.Tromp@yahoo.com",
        "strideLength": 4.4,
        "dailyStepGoal": 5000,
        "friends": [
          19,
          11,
          42,
          33
        ]
      }
    ];

    userID = 2;
    userRepo = new UserRepository(usersData)
    user = new User(userRepo);
    hydration = new Hydration(userID);
  });

  it('should be a function', function () {
    expect(Hydration).to.be.a('function');
  });

  it(`should be an instance of Hydration`, () => {
    expect(hydration).to.be.instanceOf(Hydration);
  });



});
