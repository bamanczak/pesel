import {
  Component,
  OnInit
} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  inputNumber: string;
  isValid: boolean;
  peselArray: Array<number>;
  year;
  month;
  day;
  isMale;
  isInitiated: boolean;


  onSubmit() {
    this.isInitiated = true;
    let pesel = this.inputNumber;


    this.isValid = this.isValidPesel(pesel);
    console.log('PESEL z inputu:', this.isValid);

    if (this.isValid){
      this.year = this.getYear(this.peselArray);
      this.month = this.getMonth(this.peselArray);
      this.day = this.getDay(this.peselArray);
      this.isMale = this.peselArray[9]%2==1;
      //console.log(this.sex);
    }

    //Testy
    /*
    console.log('Prawidłowy pesel LM', this.isValidPesel('19302411759')); //Prawidłowy pesel true
    console.log('Prawidłowy pesel BM', this.isValidPesel('89082907810')); //Prawidłowy pesel true
    console.log('Prawidłowy pesel SNM', this.isValidPesel('90012214766')); //Prawidłowy pesel true
    console.log('Prawidłowy pesel', this.isValidPesel('89082907810')); //Prawidłowy pesel true
    console.log('Prawidłowy pesel', this.isValidPesel('64042999928')); //Prawidłowy pesel true
    console.log('Prawidłowy pesel', this.isValidPesel('52022114478')); //Prawidłowy pesel true
    console.log('Prawidłowy pesel', this.isValidPesel('72021706812')); //Prawidłowy pesel true
    console.log('Prawidłowy pesel', this.isValidPesel('80042448774')); //Prawidłowy pesel true
    console.log('Prawidłowy pesel', this.isValidPesel('97031003029')); //Prawidłowy pesel true
    console.log('Nieprawidłowy pesel WIKI', this.isValidPesel('44051401358')); //Nieprawidłowy pesel false
    console.log('Nieprawidłowy pesel', this.isValidPesel('97031003021')); //Nieprawidłowy pesel false
    console.log('Nieprawidłowy pesel', this.isValidPesel('97031003023')); //Nieprawidłowy pesel false
    console.log('Nieprawidłowy pesel', this.isValidPesel('')); //Nieprawidłowy pesel false
    console.log('Nieprawidłowy pesel', this.isValidPesel(1)); //Nieprawidłowy pesel false
    console.log('Nieprawidłowy pesel', this.isValidPesel(true)); //Nieprawidłowy pesel false
    console.log('Nieprawidłowy pesel', this.isValidPesel(null)); //Nieprawidłowy pesel false
    */
  }

  isValidPesel(pesel) {
    if (typeof pesel !== 'string') {
      return false;
    } else {
      let peselArray = new Array();
      for (let i=0; i<11; i++) {
        peselArray[i] = parseInt(pesel.substring(i,i+1));
      }
      this.peselArray = peselArray;
    //let weight = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
      return this.verifyControlNumber(peselArray) && this.verifyDate(this.getYear(peselArray), this.getMonth(peselArray), this.getDay(peselArray));
    }
  }

  verifyControlNumber(pesel: Array<number>) {
    let weight = [9, 7, 3, 1, 9, 7, 3, 1, 9, 7];
    let sum = 0;
    let controlNumber = pesel[10];
    for (let i = 0; i < weight.length; i++) {
      sum += (pesel[i] * weight[i]);
    }
    sum = sum % 10;
    return sum === controlNumber;
  }

  getDate(pesel: Array<number>) {
    this.getYear(pesel);
    this.getMonth(pesel);
    this.getDay(pesel);
  }

  verifyDate (y:number, m:number, d:number) {
    var dt = new Date(y,m-1,d);
    return dt.getDate()==d &&
          dt.getMonth()==m-1 &&
          dt.getFullYear()==y;
  }

  getMonth (pesel: Array<number>) {
    return (pesel[2]%2) * 10 + pesel[3];
  }

  getDay (pesel: Array<number>) {
    return pesel[4] * 10 + pesel[5];
  }

  getYear(pesel: Array<number>) {
    let year = 1900 + pesel[0]*10 + pesel[1];

    if (pesel[2] >= 8) {
      // Dates in the XIX century
      year -= 100;
    } else if (pesel[2] >= 2) {
      // Dates in the XXI, XXII and XXIII  century
      year += Math.floor(pesel[2]/2)*100;
    }

    return year;
  }

  /*
  //
    var miesiac = (aInt[2]%2)*10+aInt[3];
    var dzien = aInt[4]*10+aInt[5];

    //Sprawdź poprawność daty urodzenia
    if (SetError(!checkDate(dzien,miesiac,rok)))
      return;
    var plec = (aInt[9]%2==1)?"M":"K";

    //Uzupełnij pola wchodzące w skład numeru PESEL
    document.getElementById("rok").value = rok;
    document.getElementById("miesiac").value = miesiac;
    document.getElementById("dzien").value = dzien;
    document.getElementById("plec").value = plec;
  }
  function SetError(c){
    document.getElementById("hasError").style.visibility=(c?"visible":"hidden");
    return c;
  }
  function checkDate(d,m,y)
  {
    var dt = new Date(y,m-1,d);
    return dt.getDate()==d &&
          dt.getMonth()==m-1 &&
          dt.getFullYear()==y;
  }
  */

}
