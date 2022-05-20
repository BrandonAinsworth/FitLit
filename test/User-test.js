import { expect } from 'chai';
import User from '../src/User';
import Hydration from '../src/Hydration';

describe('User', () => {
  let user;
  let hydration;
  let hydrationData;
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

    hydrationData = [
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
  ];

    currentUser = new User(user);
    hydration = new Hydration(hydrationData);
    currentUser.getHydrationData(hydration);
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

  it('should save hydration data in an array for a single user', () => {
    expect(currentUser.hydrationData).to.deep.equal(currentUserHydration);
  });

  it('should return the average ounces consumed per day for all time', () => {
    expect(currentUser.averageAllTimeOuncesConsumed()).to.be.equal(71);
  });

  it('should return the number of ounces consumed for a specific day', () => {
    expect(currentUser.returnDailyOuncesConsumed("2019/06/19")).to.be.equal(76);
  });
});
