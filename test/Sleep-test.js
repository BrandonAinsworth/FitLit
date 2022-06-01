import { expect } from 'chai';
import Sleep from '../src/Sleep';
import { 
  sleepSampleData, 
  userOutput 
} from './Sample-sleep-data';

describe('Sleep Test', () => {

  let sleep;
  let sleepData;

  beforeEach(() => {

    sleep = new Sleep(sleepSampleData);

  });

  it('should be a function',() => {
    expect(Sleep).to.be.a('function');
  });

  it('should be an instance of Sleep', () => {
    expect(sleep).to.be.instanceOf(Sleep);
  });

  it('should have a parameter to take in all users sleep data', () => {
    expect(sleep.allUsersSleepData).to.deep.equal(sleepSampleData.sleepData);
  });

  it('should return an array of a single user\'s data', () => {
    expect(sleep.returnSpecificUser(2)).to.deep.equal(userOutput);
  });

  it('should calculate the average sleep quality for all user\'s', () => {
    expect(sleep.averageSleepQualityAllUsers()).to.be.equal(3.1);
  });
})
