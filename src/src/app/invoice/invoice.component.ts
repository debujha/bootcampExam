import { Component, OnInit } from '@angular/core';
import { company } from '../companyName';
import { invoice } from '../invoiceInfo';
import { bill } from '../billItem';
import { profile} from '../profiles';

@Component({
	selector: 'app-invoice',  
	templateUrl: './invoice.component.html',  
	styleUrls: ['./invoice.component.css']	
})


export class InvoiceComponent implements OnInit { 
	allProfiles: profile[] = [
    		{text:'USD', value: 'USD'},
    		{text: 'INR', value: 'INR'},
    		{text: 'GBP', value: 'GBP'}
	];
	settings = {
        	bigBanner: false,
        	timePicker: false,
        	format: 'dd-MM-yyyy',
        	defaultOpen: false
    	};
	dated: Date = new Date;
	address: company = {
	name: 'My Company Name',
	address: '23 North St., Ahmedabad, Gujarat',
	email: 'tested@tester.com',
	contact: 1234567890,
	privileged: false
	};
	client: company = {
	name: 'Global Client',
	address: '456 North St., Ahmedabad, Gujarat 380001',
	contact: 9004567890,
	email: 'tested@client.com',
	privileged: true
	};

	invoiceInfo: invoice = {
	number: 4653,
	date: this.dated,
	dueDate: this.dated,
	currency: 'INR'
	};
	billItems: bill[] =  [
            {
                item: "Microsoft Office",
                task: "Microsoft Office suite installation",
                hours: 2,
                rate: 120
            },
            {
                item: "Oracle SQL developer",
                task: "SQL developer installation",
                hours: 1,
                rate: 140
            },
        ];
	
	

	total: number = 0;
	calculatedTotal: number=0;
	discount: number = 7;
	taxes: number = 18;
	deposit: number = 400;
	tempItem: string;
	tempTask: string;
	tempHours: number;
	tempRate: number;
	selectedCurrency: string ="INR";
	
	privChange(e) {
    if(e.currentTarget.checked){
      // add 5% discount if you have privileged
    }else{
      // subtract 5% discount if you have not privileged
    }
              
	}

	onSelect(i) {   
		this.billItems = this.billItems.filter(itm => itm.item !== i.item);
			//delete selected item from list       
	}
   
	getSubTotal() : number {
		let subTot: number = 0;
		this.billItems.map(itm=>{
			subTot += (itm.rate * itm.hours);
		});
		return Math.round(subTot);
        // Calculate rounded Subtotal
        
    }

	getTotal(): number {
        // Calculate rounded Total
        return 22;
	}
	
    mouseEnterAddItem(){
        // display addItem division
    }

    mouseLeaveAddItem(){
        // don't display addItem division
    }
	
	addItem() {
        // add an item into billItems array
  	}



	constructor() { }

	ngOnInit() {
	
		}

	}
