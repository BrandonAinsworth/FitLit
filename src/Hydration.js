class Hydration {
  constructor(data) {
    this.allUsersHydrationData = data;
  }

  returnSpecificUser(id) {
    return this.allUsersHydrationData.filter((user) => id === user.userID );
  }


}

export default Hydration;
