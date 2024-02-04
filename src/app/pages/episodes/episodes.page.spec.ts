import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EpisodesPage } from './episodes.page';

describe('EpisodesPage', () => {
  let component: EpisodesPage;
  let fixture: ComponentFixture<EpisodesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EpisodesPage);
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
