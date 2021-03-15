import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import RegisterInterface from 'src/app/interfaces/register.interface';
import { DataService } from 'src/app/services/data.service';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-second-register',
  templateUrl: './second-register.component.html',
  styleUrls: ['./second-register.component.css'],
})
export class SecondRegisterComponent implements OnInit {
  constructor(
    public _register: RegisterService,
    private data: DataService,
    public r: Router
  ) { }

  public secondRegistryForm = new FormGroup({
    first_name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    last_name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    city: new FormControl('', [Validators.required]),
    street: new FormControl('', [Validators.required, Validators.minLength(4)]),
  });

  public register() {
    this.data.registeringUser = {
      ...this.data.registeringUser,
      first_name: this.secondRegistryForm.controls.first_name.value,
      last_name: this.secondRegistryForm.controls.last_name.value,
      city: this.secondRegistryForm.controls.city.value,
      street: this.secondRegistryForm.controls.street.value,
    } as RegisterInterface;
    this._register.register(this.data.registeringUser).subscribe(
      (res: any) => {
        if (!res.error) {
          this.r.navigateByUrl('/login');
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  ngOnInit(): void {
  }
}
