import { expect } from 'chai';
import User from '../src/User';
import Hydration from '../src/Hydration';
import Sleep from '../src/Sleep';
import Activity from '../src/Activity';
import { 
  hydrationSampleData, 
  userOutput
} from './Sample-hydration-data';
import { 
  sleepSampleData,
  currentUserSleep
 } from './Sample-sleep-data';
import { 
  userSampleData, 
  userSampleWeeklySleepData,
  userSampleWeeklySleep2, 
  userSampleWeeklyHydration, 
  userSampleHydration,
  stepGoalSuccess,
  stepGoalFailure
} from './Sample-user-data';
import {
  activitySampleData,
  currentUserActivity,
  userSampleWeeklyActivityData,
  userSampleWeeklyActivityData2,
  
} from './Sample-activity-data';

describe('User', () => {

  let hydration;
  let currentUser;
  let sleep;
  let activity;

  beforeEach(() => {

    currentUser = new User(userSampleData);

    hydration = new Hydration(hydrationSampleData);
    currentUser.getHydrationData(hydration);

    sleep = new Sleep(sleepSampleData);
    currentUser.getSleepData(sleep);

    activity = new Activity(activitySampleData);
    currentUser.getActivityData(activity);
    
  });

  it('should be a function', function () {
    expect(User).to.be.a('function');
  });

  it(`should be an instance of User`, () => {
    expect(currentUser).to.be.instanceOf(User);
  });

  it(`should be equal to user data`, () => {
    expect(currentUser.user).to.deep.equal(userSampleData[0]);
  });

  it(`should return a first name of the user`, () => {
    expect(currentUser.returnUserFirstName()).to.be.equal('Jarvis');
  });

  it('should save hydration data in an array for a single user', () => {
    expect(currentUser.hydrationData).to.deep.equal(userOutput);
  });

  it('should return the average ounces consumed per day for all time', () => {
    expect(currentUser.averageAllTimeOuncesConsumed()).to.be.equal(71);
  });

  it('should return the number of ounces consumed for a specific day', () => {
    expect(currentUser.returnDailyOuncesConsumed("2019/06/19")).to.be.equal(76);
  });

  it('should return the daily consumption per day for the last 7 days', () => {
    expect(currentUser.returnWeeklyOuncesConsumed()).to.deep.equal(userSampleWeeklyHydration);
  });

  it('should return the daily consumption per day for the last 7 days', () => {
    currentUser.returnWeeklyOuncesConsumed();
    expect(currentUser.sortedHydrationData).to.deep.equal(userSampleHydration);
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
    expect(currentUser.returnWeeklySleepData('2019/06/22')).to.deep.equal(userSampleWeeklySleep2);

    expect(currentUser.returnWeeklySleepData('2019/06/21')).to.deep.equal(userSampleWeeklySleepData);
  });

  it('should save activity data in an array for a single user', () => {
    expect(currentUser.activityData).to.deep.equal(currentUserActivity);
  });

  it('should return the miles a user has walked based on their number of steps', () => {
    expect(currentUser.returnUserMilesWalked('2019/06/19')).to.be.equal(8.4);
    expect(currentUser.returnUserMilesWalked('2019/06/22')).to.be.equal(3.1);
  });

  it('should return how many minutes a user was active specified by date', () => {
    expect(currentUser.returnMinutesActive('2019/06/20')).to.be.equal(74);
    expect(currentUser.returnMinutesActive('2019/06/21')).to.be.equal(174);
  });

  it('should return an array of sorted activity data', () => {
  expect(currentUser.sortActivityData()).to.deep.equal(currentUserActivity.reverse())
  });

  it('should return average minutes active for a user for a given week', () => {
    expect(currentUser.returnWeeklyAvgMinutesActive('2019/06/21')).to.be.equal(156.4);
  });

  it('should return a boolean value indicating whether or not a user achieved their step goal', () => {
    expect(currentUser.compareToStepGoal('2019/06/17')).to.be.equal(true);
    expect(currentUser.compareToStepGoal('2019/06/22')).to.be.equal(false);
  });

  it('should return an array of all the days where a user exceeded their step goal', () => {
    expect(currentUser.returnAllDaysStepGoalExceeded()).to.deep.equal(stepGoalSuccess);
  });

  it('should notify the user they have never reached their goal', () => {
    currentUser.activityData = stepGoalFailure;
    expect(currentUser.returnAllDaysStepGoalExceeded()).to.be.equal("Goal not met");
  });

});