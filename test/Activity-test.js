import { expect } from 'chai';
import Activity from '../src/Activity';
import {
  activitySampleData,
  currentUserActivity
} from './Sample-activity-data';

describe ('Activity', () => {
  let activity;

  beforeEach(() => {
    activity = new Activity(activitySampleData);
  });

  it('should be a function', function () {
    expect(Activity).to.be.a('function');
  });

  it(`should be an instance of Activity`, () => {
    expect(activity).to.be.instanceOf(Activity);
  });

  it('should have a parameter to take in all users activity data', () => {
    expect(activity.allUsersActivityData).to.deep.equal(activitySampleData.activityData);
  });

  it('should return an array of a single user\s data', () => {
    expect(activity.returnSpecificUser(2)).to.deep.equal(currentUserActivity);
  });

  it('should return "User not Found" if user does not have any data', () => {
    expect(activity.returnSpecificUser(4)).to.be.equal("User not found");
  });

  it('should calculate the average stairs climbed for a specific date for all users', () => {
    expect(activity.averageAllUsersStairsByDate('2019/06/16')).to.be.equal(27);
    expect(activity.averageAllUsersStairsByDate('2019/06/20')).to.be.equal(23);
  });

  it('should calculate the average steps for a specific date for all users', () => {
    expect(activity.averageAllUsersStepsByDate('2019/06/15')).to.be.equal(5091);
    expect(activity.averageAllUsersStepsByDate('2019/06/21')).to.be.equal(8161);
  });

  it('should calculate the average number of minutes active for a specific date for all users', () => {
    expect(activity.averageAllUsersMinutesByDate('2019/06/15')).to.be.equal(131);
    expect(activity.averageAllUsersMinutesByDate('2019/06/22')).to.be.equal(99);
  });
})