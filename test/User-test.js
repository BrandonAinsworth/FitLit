import { expect } from 'chai';
import User from '../src/User';

describe('User', () => {

    let data;
    let userData;
    let user1;

    beforeEach(() => {
        data = {
            "users": [{
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
            ],
            "activityData": [{
                    "userID": 1,
                    "date": "2019/06/15",
                    "numSteps": 3577,
                    "minutesActive": 140,
                    "flightsOfStairs": 16
                }, 
                {
                    "userID": 1,
                    "date": "2019/06/16",
                    "numSteps": 6637,
                    "minutesActive": 175,
                    "flightsOfStairs": 36
                },
                {
                    "userID": 2,
                    "date": "2019/06/15",
                    "numSteps": 4294,
                    "minutesActive": 138,
                    "flightsOfStairs": 10
                },
                {
                    "userID": 3,
                    "date": "2019/06/15",
                    "numSteps": 7402,
                    "minutesActive": 116,
                    "flightsOfStairs": 33
                },
                {
                    "userID": 2,
                    "date": "2019/06/16",
                    "numSteps": 4112,
                    "minutesActive": 220,
                    "flightsOfStairs": 37
                },
                {
                    "userID": 3,
                    "date": "2019/06/16",
                    "numSteps": 12304,
                    "minutesActive": 152,
                    "flightsOfStairs": 8
                }, 
                {
                    "userID": 1,
                    "date": "2019/06/17",
                    "numSteps": 14329,
                    "minutesActive": 168,
                    "flightsOfStairs": 18
                },
                {
                    "userID": 2,
                    "date": "2019/06/17",
                    "numSteps": 13750,
                    "minutesActive": 65,
                    "flightsOfStairs": 4
                },
                {
                    "userID": 3,
                    "date": "2019/06/17",
                    "numSteps": 4547,
                    "minutesActive": 97,
                    "flightsOfStairs": 5
                }, 
                {
                    "userID": 1,
                    "date": "2019/06/18",
                    "numSteps": 4419,
                    "minutesActive": 165,
                    "flightsOfStairs": 33
                },
                {
                    "userID": 2,
                    "date": "2019/06/18",
                    "numSteps": 4662,
                    "minutesActive": 181,
                    "flightsOfStairs": 31
                },
                {
                    "userID": 3,
                    "date": "2019/06/18",
                    "numSteps": 2546,
                    "minutesActive": 274,
                    "flightsOfStairs": 26
                }, 
                {
                    "userID": 1,
                    "date": "2019/06/19",
                    "numSteps": 8429,
                    "minutesActive": 275,
                    "flightsOfStairs": 2
                },
                {
                    "userID": 2,
                    "date": "2019/06/19",
                    "numSteps": 9858,
                    "minutesActive": 243,
                    "flightsOfStairs": 44
                },
                {
                    "userID": 3,
                    "date": "2019/06/19",
                    "numSteps": 10961,
                    "minutesActive": 188,
                    "flightsOfStairs": 17
                }, 
                {
                    "userID": 1,
                    "date": "2019/06/20",
                    "numSteps": 14478,
                    "minutesActive": 140,
                    "flightsOfStairs": 12
                },
                {
                    "userID": 2,
                    "date": "2019/06/20",
                    "numSteps": 8153,
                    "minutesActive": 74,
                    "flightsOfStairs": 10
                },
                {
                    "userID": 3,
                    "date": "2019/06/20",
                    "numSteps": 5369,
                    "minutesActive": 129,
                    "flightsOfStairs": 46
                }, 
                {
                    "userID": 1,
                    "date": "2019/06/21",
                    "numSteps": 6760,
                    "minutesActive": 135,
                    "flightsOfStairs": 6
                },
                {
                    "userID": 2,
                    "date": "2019/06/21",
                    "numSteps": 10225,
                    "minutesActive": 174,
                    "flightsOfStairs": 26
                },
                {
                    "userID": 3,
                    "date": "2019/06/21",
                    "numSteps": 7498,
                    "minutesActive": 199,
                    "flightsOfStairs": 13
                }, 
                {
                    "userID": 1,
                    "date": "2019/06/22",
                    "numSteps": 10289,
                    "minutesActive": 119,
                    "flightsOfStairs": 6
                },
                {
                    "userID": 2,
                    "date": "2019/06/22",
                    "numSteps": 3605,
                    "minutesActive": 124,
                    "flightsOfStairs": 31
                },
                {
                    "userID": 3,
                    "date": "2019/06/22",
                    "numSteps": 11342,
                    "minutesActive": 53,
                    "flightsOfStairs": 17
                }
            ],
            "hydrationData": [{
                    "userID": 1,
                    "date": "2019/06/15",
                    "numOunces": 37
                },
                {
                    "userID": 1,
                    "date": "2019/06/16",
                    "numOunces": 69
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
            ],
            "sleepData": [{
                    "userID": 1,
                    "date": "2019/06/15",
                    "hoursSlept": 6.1,
                    "sleepQuality": 2.2
                },
                {
                    "userID": 1,
                    "date": "2019/06/16",
                    "hoursSlept": 4.1,
                    "sleepQuality": 3.8
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
        }



        userData = {
            "users": [{
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
            }],
            "activityData": [{
                "userID": 1,
                "date": "2019/06/15",
                "numSteps": 3577,
                "minutesActive": 140,
                "flightsOfStairs": 16
            }, 
            {
                "userID": 1,
                "date": "2019/06/16",
                "numSteps": 6637,
                "minutesActive": 175,
                "flightsOfStairs": 36
            }, 
            {
                "userID": 1,
                "date": "2019/06/17",
                "numSteps": 14329,
                "minutesActive": 168,
                "flightsOfStairs": 18
            }, 
            {
                "userID": 1,
                "date": "2019/06/18",
                "numSteps": 4419,
                "minutesActive": 165,
                "flightsOfStairs": 33
            }, 
            {
                "userID": 1,
                "date": "2019/06/19",
                "numSteps": 8429,
                "minutesActive": 275,
                "flightsOfStairs": 2
            }, 
            {
                "userID": 1,
                "date": "2019/06/20",
                "numSteps": 14478,
                "minutesActive": 140,
                "flightsOfStairs": 12
            }, 
            {
                "userID": 1,
                "date": "2019/06/21",
                "numSteps": 6760,
                "minutesActive": 135,
                "flightsOfStairs": 6
            }, 
            {
                "userID": 1,
                "date": "2019/06/22",
                "numSteps": 10289,
                "minutesActive": 119,
                "flightsOfStairs": 6
            }],
            "hydrationData": [{
                    "userID": 1,
                    "date": "2019/06/15",
                    "numOunces": 37
                },
                {
                    "userID": 1,
                    "date": "2019/06/16",
                    "numOunces": 69
                }, 
                {
                    "userID": 1,
                    "date": "2019/06/17",
                    "numOunces": 96
                }, 
                {
                    "userID": 1,
                    "date": "2019/06/18",
                    "numOunces": 61
                }, 
                {
                    "userID": 1,
                    "date": "2019/06/19",
                    "numOunces": 91
                }, 
                {
                    "userID": 1,
                    "date": "2019/06/20",
                    "numOunces": 50
                }, 
                {
                    "userID": 1,
                    "date": "2019/06/21",
                    "numOunces": 50
                }, 
                {
                    "userID": 1,
                    "date": "2019/06/22",
                    "numOunces": 43
                }
            ],
            "sleepData": [{
                "userID": 1,
                "date": "2019/06/15",
                "hoursSlept": 6.1,
                "sleepQuality": 2.2
            }, 
            {
                "userID": 1,
                "date": "2019/06/16",
                "hoursSlept": 4.1,
                "sleepQuality": 3.8
            }, 
            {
                "userID": 1,
                "date": "2019/06/17",
                "hoursSlept": 8,
                "sleepQuality": 2.6
            }, 
            {
                "userID": 1,
                "date": "2019/06/18",
                "hoursSlept": 10.4,
                "sleepQuality": 3.1
            }, 
            {
                "userID": 1,
                "date": "2019/06/19",
                "hoursSlept": 10.7,
                "sleepQuality": 1.2
            }, 
            {
                "userID": 1,
                "date": "2019/06/20",
                "hoursSlept": 9.3,
                "sleepQuality": 1.2
            }, 
            {
                "userID": 1,
                "date": "2019/06/21",
                "hoursSlept": 7.8,
                "sleepQuality": 4.2
            }, 
            {
                "userID": 1,
                "date": "2019/06/22",
                "hoursSlept": 7,
                "sleepQuality": 3
            }]
        }
        user1 = new User(userData)
    });

    it('should be a function', () => {

        expect(User).to.be.a('function');
    
    });

    it('should be an instance of User', () => {

        expect(user1).to.be.an.instanceof(User);
    });

    it('should have properties of: userID, name, address, email, dailyStepGoal', () => {

        expect(user1).to.have.property('userID');
        expect(user1).to.have.property('name');
        expect(user1).to.have.property('address');
        expect(user1).to.have.property('email');
        expect(user1).to.have.property('dailyStepGoal');
    });

    it('should return user first name', () => {

       
        expect(user1.returnUserFirstName()).to.equal('Luisa');
    });

    it('should return user full name', () => {

        expect(user1.returnUserFullName()).to.equal('Luisa Hane');
    });

    it('should return user email', () => {

        expect(user1.returnUserEmail()).to.equal("Diana.Hayes1@hotmail.com");
    });

    it('should return user daily step goal', () => {

        expect(user1.returnUserDailyStepGoal()).to.equal(10000);
    });

    it('should return daily ounces of water consumed', () => {

        expect(user1.returnDailyOuncesConsumed(userData.hydrationData[2].date)).to.equal(96);
    });

    it('should return weekly ounces of water consumed', () => {

        expect(user1.returnWeeklyOuncesConsumed(userData.hydrationData[6].date)).to.equal(460);
    });

    it.skip('should return average of all time ounces of water consumed', () => {

        expect(user1.averageForAllTimeOuncesConsumed()).to.equal(62);
    });

    it.skip('should return average hours slept all time', () => {

        expect(user1.averageHoursSleptAllTime()).to.equal(7.9);
    });

    it.skip('should return all time average sleep quality', () => {

        expect(user1.averageSleepQualityAllTime()).to.equal(2.7);
    });

    });