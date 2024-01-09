import { Component } from '@angular/core';
import { AuthService } from 'src/app/public/Service/service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
    users:any[]=[];
    ok:boolean=false;
    newUser: any = {
      username: '',
      password: '',
      role: '',
      formations : []
    };
    constructor(private authService : AuthService){}

    ngOnInit(){
      this.fusers();
      console.log(this.users);
    }

    fusers() {
      const users = this.authService.getUsers();
      for (const user of users) {
      if (user.role!="admin") {
      this.users.push(user);}
    }
  }

    isok(){
      return this.ok=true;
    }

    editUser(id:any){
      this.authService.editUser(id).subscribe();
    }

    addUser() {
      console.log(this.newUser);
      this.authService.addUser(this.newUser).subscribe(
        (addedUser) => {
          this.users.push(addedUser);
          this.newUser = {
            id:0,
            username: '',
            role: '',
            password: '',
            formations : []
          };
          this.ok = false;
        },)
      }

    deleteUser(id:any){
      this.authService.deleteUser(id).subscribe(
        () => {
          this.users = this.users.filter((user) => user.id !== id);
          console.log(`User with ID ${id} deleted successfully.`);
        },
      );
    }
}
