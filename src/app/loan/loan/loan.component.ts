import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { SelectItem } from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropComponent } from '../../dragNdrop/drag-drop/drag-drop.component';


@Component({
  selector: 'app-loan',
  standalone: true,
  imports: [DropdownModule,FormsModule,CommonModule,ReactiveFormsModule, DragDropComponent],
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.scss'],
  // encapsulation: ViewEncapsulation.None,
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class LoanComponent implements OnInit{
  name:string='';
  address:string='';
  contact:number=0;
  countyOptions$: Observable<SelectItem[]> = of([]);
  public zipForm!: FormGroup;
  selectedLoantype: any;
  stateOptions$: Observable<SelectItem[]> = of([
    {
      label: 'India',
      value: 'India',
    },
    {
      label: 'USA',
      value: 'USA',
    },
  ]);

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.zipForm = this.formBuilder.group({
      zipCode: [],
      state: [],
      county: [],
    });

    this.zipForm.controls['zipCode'].valueChanges.subscribe((val) => {
      if (val === '53202') {
        this.zipForm.patchValue({
          state: 'India',
          county: 'Mumbai',
        });
      } else if (val === '92113') {
        this.zipForm.patchValue({
          state: 'USA',
          county: 'SanDiego',
        });
      }
    });

    this.zipForm.controls['state'].valueChanges.subscribe((val) => {
      if (val === 'USA') {
        this.countyOptions$ = of([
          {
            label: 'Los Angeles',
            value: 'LosAngeles',
          },
          {
            label: 'San Diego',
            value: 'SanDiego',
          },
        ]);
      } else {
        this.countyOptions$ = of([
          {
            label: 'Mumbai',
            value: 'Mumbai',
          },
          {
            label: 'Kolkata',
            value: 'Kolkata',
          },
          {
            label: 'Delhi',
            value: 'Delhi',
          },
        ]);
      }
    });
  }

  getData(data:any){
    this.selectedLoantype=data?.toString();
    console.log('final',this.selectedLoantype);
    //console.log('final2:  ',this.selectedLoantype?.toString());
    //console.log('item',this.zipForm.get('county').value);
    this.createObj();
  }

  openPopup(){

  }

  createObj(){
    let saveObj={
      name: this.name,
      address: this.address,
      contact: this.contact,
      country: this.zipForm.get('state').value,
      state: this.zipForm.get('county').value,
      loanType: this.selectedLoantype
    }
    console.log(saveObj);
  }

  numericValidator(val:any){
    this.contact = val.replace(/[^0-9.]/g, "")
  }

}
