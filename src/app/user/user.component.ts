import { Component, EventEmitter, Input, Output } from '@angular/core';

// get a random nummer of the Array.length Dummy Users
// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// };

interface User {
  id: string;
  avatar: string;
  name: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  // WITHOUT SIGNAL
  // selectedUser = DUMMY_USERS[randomIndex];
  // // Getter Method for the imagePath of the user
  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser.avatar;
  // }
  // // Get a new user from "DUMMY_USERS" when button is clicked
  // onSelectUser() {
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.selectedUser = DUMMY_USERS[randomIndex];
  // }
  @Input({ required: true }) user!: User;
  @Output() select = new EventEmitter<string>();
  // select = output<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  // WITH SIGNAL
  // selectedUser = signal(DUMMY_USERS[randomIndex]);

  // onSelectUser() {
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.selectedUser.set(DUMMY_USERS[randomIndex]);
  // }
  // avatar = input.required<string>(); //generic function
  // name = input.required<string>();

  // imagePath = computed(() => 'assets/users/' + this.avatar());

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
