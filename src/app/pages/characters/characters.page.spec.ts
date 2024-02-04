import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharactersPage } from './characters.page';

describe('CharactersPage', () => {
  let component: CharactersPage;
  let fixture: ComponentFixture<CharactersPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CharactersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
function async(arg0: () => void): jasmine.ImplementationCallback {
  throw new Error('Function not implemented.');
}

