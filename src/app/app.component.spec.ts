import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'pesel'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('pesel');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Walidator PESEL');
  });

  it('should mark valid PESEL as valid', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    //expect(AppComponent.isValidPesel('19302411759')).toBe(true);
    //expect(AppComponent.isValidPesel('19302411759')).not.toBe(true);

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
  });
});
