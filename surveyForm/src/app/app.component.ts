import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  name: string;
  select: boolean;
  option1 = 'Select One';
  option2 = 'Select One';
  option3 = 'Select One';
  option4 = 'Select One';
  firstSelection;
  secondSelection;
  thirdSelection;
  fourthSelection;



  scales = [
    {name: 'Select One', select: false},
    {name: '1.) Best Time', select: false},
    {name: '2.) Next Best Time', select: false},
    {name: '3.) Not As Good', select: false},
    {name: '4.) Worst Time', select: false},
  ];

//Finding what was selected

  getSelectOption(x) {
    switch (x) {
      case '1.) Best Time' : {
        this.scales[1].select = false;
        break;
      }
      case '2.) Next Best Time' : {
        this.scales[2].select = false;
        break;
      }
      case '3.) Not As Good' : {
        this.scales[3].select = false;
        break;
      }
      case '4.) Worst Time' : {
        this.scales[4].select = false;
        break;
      }
    })
  }

  //Rember what was selected.

  recurringSelections1(x) {
    switch(x) {
      case '1.) Best Time' : {
        this.getSelectOption(this.firstSelection);
        this.scales[1].select = !this.scales[1].select;
        this.firstSelection = '1.) Best Time';
        break;
      }
      case '2.) Next Best Time' : {
        this.getSelectOption(this.secondSelection);
        this.scales[2].select = !this.scales[2].select;
        this.secondSelectiontSelection = '2.) Next Best Time';
        break;
      }
      case '3.) Not As Good' : {
        this.getSelectOption(this.thirdSelection);
        this.scales[3].select = !this.scales[3].select;
        this.thirdSelection = '3.) Not As Good';
        break;
      }
      case '4.) Worst Time' : {
        this.getSelectOption(this.fourthSelection);
        this.scales[4].select = !this.scales[4].select;
        this.fourthSelection = '4.) Worst Time';
        break;
      }
      Default: {
        this.getSelectOption(this.firstSelection)
      }
    }
  }

  recurringSelections2(x) {
    switch(x) {
      case '1.) Best Time' : {
        this.getSelectOption(this.firstSelection);
        this.scales[1].select = !this.scales[1].select;
        this.firstSelection = '1.) Best Time';
        break;
      }
      case '2.) Next Best Time' : {
        this.getSelectOption(this.secondSelection);
        this.scales[2].select = !this.scales[2].select;
        this.secondSelection = '2.) Next Best Time';
        break;
      }
      case '3.) Not As Good' : {
        this.getSelectOption(this.thirdSelection);
        this.scales[3].select = !this.scales[3].select;
        this.thirdSelection = '3.) Not As Good';
        break;
      }
      case '4.) Worst Time' : {
        this.getSelectOption(this.fourthSelection);
        this.scales[4].select = !this.scales[4].select;
        this.fourthSelection = '4.) Worst Time';
        break;
      }
      Default: {
        this.getSelectOption(this.firstSelection)
      }
    }
  }

  recurringSelections3(x) {
    switch(x) {
      case '1.) Best Time' : {
        this.getSelectOption(this.firstSelection);
        this.scales[1].select = !this.scales[1].select;
        this.firstSelection = '1.) Best Time';
        break;
      }
      case '2.) Next Best Time' : {
        this.getSelectOption(this.secondSelection);
        this.scales[2].select = !this.scales[2].select;
        this.secondSelection = '2.) Next Best Time';
        break;
      }
      case '3.) Not As Good' : {
        this.getSelectOption(this.thirdSelection);
        this.scales[3].select = !this.scales[3].select;
        this.thirdSelection = '3.) Not As Good';
        break;
      }
      case '4.) Worst Time' : {
        this.getSelectOption(this.fourthSelection);
        this.scales[4].select = !this.scales[4].select;
        this.fourthSelection = '4.) Worst Time';
        break;
      }
      Default: {
        this.getSelectOption(this.firstSelection)
      }
    }
  }

  recurringSelections4(x) {
    switch(x) {
      case '1.) Best Time' : {
        this.getSelectOption(this.firstSelection);
        this.scales[1].select = !this.scales[1].select;
        this.firstSelection = '1.) Best Time';
        break;
      }
      case '2.) Next Best Time' : {
        this.getSelectOption(this.secondSelection);
        this.scales[2].select = !this.scales[2].select;
        this.secondSelection = '2.) Next Best Time';
        break;
      }
      case '3.) Not As Good' : {
        this.getSelectOption(this.thirdSelection);
        this.scales[3].select = !this.scales[3].select;
        this.thirdSelection = '3.) Not As Good';
        break;
      }
      case '4.) Worst Time' : {
        this.getSelectOption(this.fourthSelection);
        this.scales[4].select = !this.scales[4].select;
        this.fourthSelection = '4.) Worst Time';
        break;
      }
      Default: {
        this.getSelectOption(this.firstSelection)
      }
    }
  }

  // Reset Page to Default
  fixPageByReset(){
    this.option1 = 'Select One';
    this.option2 = 'Select One';
    this.option3 = 'Select One';
    this.option4 = 'Select One';
    this.scales = [
      {name: 'Select One', select: false},
      {name: '1.) Best Time', select: false},
      {name: '2.) Next Best Time', select: false},
      {name: '3.) Not As Good', select: false},
      {name: '4.) Worst Time', select: false},
    ];
  }

}