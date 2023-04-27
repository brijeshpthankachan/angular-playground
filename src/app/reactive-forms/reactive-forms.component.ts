import { Component, OnInit } from '@angular/core'
import { FormArray, FormBuilder, FormGroup } from '@angular/forms'
import { ICars } from '@app/models'
import { DataStoreService } from '@app/store'

@Component({
	selector: 'app-reactive-forms',
	templateUrl: './reactive-forms.component.html',
	styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

	cars: ICars[] = []
	carForm: FormGroup = new FormGroup({})

	constructor(private readonly store: DataStoreService, private readonly fb: FormBuilder) { }

	ngOnInit() {
		this.buildForm()
		console.log(this.carForm)
		this.getCars()
	}

	getCars = (): void => {
		this.store.getCars().subscribe(cars => {
			this.cars = cars
			this.cars.map(({ carName }) => this.names().push(this.fb.control(carName)))
		})
	}

	names = () => this.carForm.get('skills') as FormArray

	address = ()  => this.carForm.get('address') as FormGroup

	add = () => this.names().push(this.fb.control(''))

	remove = (index: number) => this.names().removeAt(index)

	submit = () => console.log(this.carForm.value)

	buildForm = () => (this.carForm = this.fb.group({
		name: [],
		dob: [],
		band: [],
		address: this.fb.group({
			houseNo: [],
			street: [],
			zipCode: []
		}),
		skills: this.fb.array([])
	}))

}
