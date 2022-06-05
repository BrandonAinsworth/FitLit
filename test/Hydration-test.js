import { expect } from 'chai';
import Hydration from '../src/Hydration';
import { 
  hydrationSampleData, 
  userOutput
} from './Sample-hydration-data';
// const { hydrationSampleData } = require('./Sample-data');

describe('Hydration', () => {

  let hydration;
  // let hydrationData;

  beforeEach(() => {
 
    hydration = new Hydration(hydrationSampleData);
 
  });

  it('should be a function', function () {
    expect(Hydration).to.be.a('function');
  });

  it(`should be an instance of Hydration`, () => {
    expect(hydration).to.be.instanceOf(Hydration);
  });

  it('should have a parameter to take in all users hydration data', () => {
    expect(hydration.allUsersHydrationData).to.deep.equal(hydrationSampleData);
  });

  it('should return an array of a single user\'s data', () => {
  
    expect(hydration.returnSpecificUser(2)).to.deep.equal(userOutput);
  });


  // What if there is a new user with empty data arrays?

  // What if the user has less than 7 days of data available?


})
