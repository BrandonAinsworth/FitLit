class Hydration {
  constructor(data) {
    this.allUsersHydrationData = data;
  }

  returnSpecificUser(id) {
    let hydroFilter = this.allUsersHydrationData.hydrationData.filter((user) => id === user.userID);
    return hydroFilter
  }


}

export default Hydration;
