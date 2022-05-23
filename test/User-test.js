import { expect } from 'chai';
import User from '../src/User';
import Hydration from '../src/Hydration';
import Sleep from '../src/Sleep';

describe('User', () => {
  let user;
  let hydration;
  let hydrationData;
  let currentUser;
  let currentUserHydration;
  let sleepData;
  let currentUserSleep;
  let sleep;

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
    }];

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

    hydrationData = {
      "hydrationData": 
      [{
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
    ]};

    currentUser = new User(user);
    hydration = new Hydration(hydrationData);
    currentUser.getHydrationData(hydration);

    sleepData = {
      "sleepData": [
        {
          "userID": 1,
          "date": "2019/06/15",
          "hoursSlept": 6.1,
          "sleepQuality": 2.2
        },
        {
          "userID": 2,
          "date": "2019/06/15",
          "hoursSlept": 7,
          "sleepQuality": 4.7
        },
        {
          "userID": 3,
          "date": "2019/06/15",
          "hoursSlept": 10.8,
          "sleepQuality": 4.7
        },
        {
          "userID": 1,
          "date": "2019/06/16",
          "hoursSlept": 4.1,
          "sleepQuality": 3.8
        },
        {
          "userID": 2,
          "date": "2019/06/16",
          "hoursSlept": 7.5,
          "sleepQuality": 3.8
        },
        {
          "userID": 3,
          "date": "2019/06/16",
          "hoursSlept": 10.7,
          "sleepQuality": 3.4
        },
        {
          "userID": 1,
          "date": "2019/06/17",
          "hoursSlept": 8,
          "sleepQuality": 2.6
        },
        {
          "userID": 2,
          "date": "2019/06/17",
          "hoursSlept": 5.7,
          "sleepQuality": 3
        },
        {
          "userID": 3,
          "date": "2019/06/17",
          "hoursSlept": 5.3,
          "sleepQuality": 4.9
        },
        {
          "userID": 1,
          "date": "2019/06/18",
          "hoursSlept": 10.4,
          "sleepQuality": 3.1
        },
        {
          "userID": 2,
          "date": "2019/06/18",
          "hoursSlept": 10.8,
          "sleepQuality": 3.2
        },
        {
          "userID": 3,
          "date": "2019/06/18",
          "hoursSlept": 9.8,
          "sleepQuality": 2.6
        },
        {
          "userID": 1,
          "date": "2019/06/19",
          "hoursSlept": 10.7,
          "sleepQuality": 1.2
        },
        {
          "userID": 2,
          "date": "2019/06/19",
          "hoursSlept": 9.6,
          "sleepQuality": 2.5
        },
        {
          "userID": 3,
          "date": "2019/06/19",
          "hoursSlept": 7.2,
          "sleepQuality": 3.4
        },
        {
          "userID": 1,
          "date": "2019/06/20",
          "hoursSlept": 9.3,
          "sleepQuality": 1.2
        },
        {
          "userID": 2,
          "date": "2019/06/20",
          "hoursSlept": 10.1,
          "sleepQuality": 2.4
        },
        {
          "userID": 3,
          "date": "2019/06/20",
          "hoursSlept": 9.4,
          "sleepQuality": 1.2
        },
        {
          "userID": 1,
          "date": "2019/06/21",
          "hoursSlept": 7.8,
          "sleepQuality": 4.2
        },
        {
          "userID": 2,
          "date": "2019/06/21",
          "hoursSlept": 4.3,
          "sleepQuality": 4.8
        },
        {
          "userID": 3,
          "date": "2019/06/21",
          "hoursSlept": 8.9,
          "sleepQuality": 3.7
        },
        {
          "userID": 1,
          "date": "2019/06/22",
          "hoursSlept": 7,
          "sleepQuality": 3
        },
        {
          "userID": 2,
          "date": "2019/06/22",
          "hoursSlept": 4.8,
          "sleepQuality": 3.3
        },
        {
          "userID": 3,
          "date": "2019/06/22",
          "hoursSlept": 9.8,
          "sleepQuality": 2.1
        }
      ]
    };

    sleep = new Sleep(sleepData);
    currentUser.getSleepData(sleep);
    currentUserSleep = [
      {
        "userID": 2,
        "date": "2019/06/15",
        "hoursSlept": 7,
        "sleepQuality": 4.7
      },
      {
        "userID": 2,
        "date": "2019/06/16",
        "hoursSlept": 7.5,
        "sleepQuality": 3.8
      },
      {
        "userID": 2,
        "date": "2019/06/17",
        "hoursSlept": 5.7,
        "sleepQuality": 3
      },
      {
        "userID": 2,
        "date": "2019/06/18",
        "hoursSlept": 10.8,
        "sleepQuality": 3.2
      },
      {
        "userID": 2,
        "date": "2019/06/19",
        "hoursSlept": 9.6,
        "sleepQuality": 2.5
      },
      {
        "userID": 2,
        "date": "2019/06/20",
        "hoursSlept": 10.1,
        "sleepQuality": 2.4
      },
      {
        "userID": 2,
        "date": "2019/06/21",
        "hoursSlept": 4.3,
        "sleepQuality": 4.8
      },
      {
        "userID": 2,
        "date": "2019/06/22",
        "hoursSlept": 4.8,
        "sleepQuality": 3.3
      }
    ];
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
    expect(currentUser.returnUserFirstName()).to.be.equal('Jarvis');
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

  it('should return the daily consumption per day for the last 7 days', () => {
    expect(currentUser.returnWeeklyOuncesConsumed()).to.deep.equal([
      {
        "userID": 2,
        "date": "2019/06/22",
        "numOunces": 58
      },      
      {
        "userID": 2,
        "date": "2019/06/21",
        "numOunces": 27
      },
      {
        "userID": 2,
        "date": "2019/06/20",
        "numOunces": 71
      },      
      {
        "userID": 2,
        "date": "2019/06/19",
        "numOunces": 76
      },
      {
        "userID": 2,
        "date": "2019/06/18",
        "numOunces": 70
      },
      {
        "userID": 2,
        "date": "2019/06/17",
        "numOunces": 96
      },
      {
        "userID": 2,
        "date": "2019/06/16",
        "numOunces": 91
      }
    ]);
  });

  it('should return the daily consumption per day for the last 7 days', () => {
    currentUser.returnWeeklyOuncesConsumed();
    expect(currentUser.sortedHydrationData).to.deep.equal([
      {
        "userID": 2,
        "date": "2019/06/22",
        "numOunces": 58
      },      
      {
        "userID": 2,
        "date": "2019/06/21",
        "numOunces": 27
      },
      {
        "userID": 2,
        "date": "2019/06/20",
        "numOunces": 71
      },      
      {
        "userID": 2,
        "date": "2019/06/19",
        "numOunces": 76
      },
      {
        "userID": 2,
        "date": "2019/06/18",
        "numOunces": 70
      },
      {
        "userID": 2,
        "date": "2019/06/17",
        "numOunces": 96
      },
      {
        "userID": 2,
        "date": "2019/06/16",
        "numOunces": 91
      },
      {
        "userID": 2,
        "date": "2019/06/15",
        "numOunces": 75
      }
    ]);
  });

  it('should save sleep data in an array for a single user', () => {
    expect(currentUser.sleepData).to.deep.equal(currentUserSleep);
  });

  it('should calculate the average number of hours slept per day for all time', () => {
    expect(currentUser.averageHoursSleptAllTime()).to.be.equal(7.5);
  });
  
  it('should calculate average sleep quality per day for all time', () => {
    expect(currentUser.averageSleepQualityAllTime()).to.be.equal(3.5);
  });
  
  it('should return how many hours slept for a specific day', () => {
    expect(currentUser.returnDailyHoursSlept('2019/06/18')).to.be.equal(10.8);
  });
  
  it('should return sleep quality for a specific day', () => {
    expect(currentUser.returnDailySleepQuality('2019/06/18')).to.be.equal(3.2);
  });
  
  it('should return sleep data each day over the course of any given week', () => {
    expect(currentUser.returnWeeklySleepData('2019/06/22')).to.deep.equal([{
      "userID": 2,
      "date": "2019/06/22",
      "hoursSlept": 4.8,
      "sleepQuality": 3.3
    }, {
      "userID": 2,
      "date": "2019/06/21",
      "hoursSlept": 4.3,
      "sleepQuality": 4.8
    }, {
      "userID": 2,
      "date": "2019/06/20",
      "hoursSlept": 10.1,
      "sleepQuality": 2.4
    }, {
      "userID": 2,
      "date": "2019/06/19",
      "hoursSlept": 9.6,
      "sleepQuality": 2.5
    }, {
      "userID": 2,
      "date": "2019/06/18",
      "hoursSlept": 10.8,
      "sleepQuality": 3.2
    }, {
      "userID": 2,
      "date": "2019/06/17",
      "hoursSlept": 5.7,
      "sleepQuality": 3
    }, {
      "userID": 2,
      "date": "2019/06/16",
      "hoursSlept": 7.5,
      "sleepQuality": 3.8
    }]);

    expect(currentUser.returnWeeklySleepData('2019/06/21')).to.deep.equal([{
      "userID": 2,
      "date": "2019/06/21",
      "hoursSlept": 4.3,
      "sleepQuality": 4.8
    }, {
      "userID": 2,
      "date": "2019/06/20",
      "hoursSlept": 10.1,
      "sleepQuality": 2.4
    }, {
      "userID": 2,
      "date": "2019/06/19",
      "hoursSlept": 9.6,
      "sleepQuality": 2.5
    }, {
      "userID": 2,
      "date": "2019/06/18",
      "hoursSlept": 10.8,
      "sleepQuality": 3.2
    }, {
      "userID": 2,
      "date": "2019/06/17",
      "hoursSlept": 5.7,
      "sleepQuality": 3
    }, {
      "userID": 2,
      "date": "2019/06/16",
      "hoursSlept": 7.5,
      "sleepQuality": 3.8
    }, {
      "userID": 2,
      "date": "2019/06/15",
      "hoursSlept": 7,
      "sleepQuality": 4.7
    }]);
  });
})