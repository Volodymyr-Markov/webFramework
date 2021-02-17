import {UserForm} from './views/UserForm';

const userForm = new UserForm(
  document.getElementById('root')
);

userForm.render();

console.log('works');