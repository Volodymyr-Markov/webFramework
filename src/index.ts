import {User} from "./models/User";

const user = User.buildUser({id: 2, name: 'New Name', age: 1012});


user.on('change', () => {
  console.log(user);
});

user.save();