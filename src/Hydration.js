class Hydration {
  constructor(data) {
    this.allUsersHydrationData = data;
  }

  returnSpecificUser(id) {
    return this.allUsersHydrationData.hydrationData.filter((user) => id === user.id );
  }


}

export default Hydration;