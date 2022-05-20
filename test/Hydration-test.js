import { expect } from 'chai';
import Hydration from '../src/Hydration';

describe('Hydration', () => {

  let hydration;
  let hydrationData;

  beforeEach(() => {
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

    hydration = new Hydration(hydrationData);
  });

  it('should be a function', function () {
    expect(Hydration).to.be.a('function');
  });

  it(`should be an instance of Hydration`, () => {
    expect(hydration).to.be.instanceOf(Hydration);
  });

  it('should have a parameter to take in all users hydration data', () => {
    expect(hydration.allUsersHydrationData).to.deep.equal(hydrationData);
  });

  it('should return an array of a single user\'s data', () => {
    let output = [
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
    expect(hydration.returnSpecificUser(2)).to.deep.equal(output);
  });
});
