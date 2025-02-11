import { Component, Input } from '@angular/core';

// get a random nummer of the Array.length Dummy Users
// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

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

  // WITH SIGNAL
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed(() => 'assets/users' + this.selectedUser().avatar);

  // onSelectUser() {
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.selectedUser.set(DUMMY_USERS[randomIndex]);
  // }
  @Input() avatar!: string; // to set property inside an Component <app-user avatar=" ">
  @Input() name!: string;

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  onSelectUser() {}
}
