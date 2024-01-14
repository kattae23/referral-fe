import { Component, OnInit } from '@angular/core';
import { DataServices } from '../data.service';
import { User } from '../../types';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(
    private dataService: DataServices
  ) {}

  users: User[] | null = null

  errors: string[] = []

  ngOnInit(): void {
    try {
      this.dataService.getUsers().subscribe(
        {
            next: (user: any) => {
              this.users = user
            },
            error: (err) => {
              this.errors = []
              console.log(err) 
              this.errors?.push(err.error.message)
            },
          }
    )
    } catch (err) {
      console.log(err)
      this.errors?.push('An error occurred');
    }
  }

}
