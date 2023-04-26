import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../data-store.service';
import { ICars } from '../models';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  cars: ICars[] = [];
  carForm: FormGroup = new FormGroup({});

  constructor(private readonly store: DataStoreService, private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
    this.getCars();
  }

  getCars = (): void => {
    this.store.getCars().subscribe({
      next: (cars) => {
        this.cars = cars;
        this.cars.map(({ carName }) => this.names().push(this.fb.control(carName)));
      },
      error: (err) => console.error(err),
    });
  };

  names = (): FormArray => this.carForm.get('names') as FormArray;

  addName = () => this.names().push(this.fb.control(''));

  remove = (index: number) => this.names().removeAt(index);

  submit = () => console.log(this.carForm.value);

  buildForm = () => (this.carForm = this.fb.group({ names: this.fb.array([]) }));

}
