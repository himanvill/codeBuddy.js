// level {2}

// Re-write the below code to better code quality standards.

let getUsers = async () => {
  let doc = await Promise.all(getUser(), getProfile(), getPosts())
    .then((data) => {
      let user = data[0];
      let Profile = data[1];
      let p = data[2];
      const userProfile = {
        user: user,
        profile: Profile,
        posts: p,
      };

      return userProfile;
    })
    .catch((error) => {
      return error;
    });
};
