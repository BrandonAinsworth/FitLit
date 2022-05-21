class Hydration {
  constructor(data) {
    this.allUsersHydrationData = data;
  }

  returnSpecificUser(id) {
    console.log('allhydration',this.allUsersHydrationData);
    let hydroFilter = this.allUsersHydrationData.filter((user) => id === user.userID);
    console.log('hydrofilter',hydroFilter);
    return hydroFilter
  }


}

export default Hydration;
