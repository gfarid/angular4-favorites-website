import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesSitesComponent } from './favorites-sites.component';

describe('FavoritesSitesComponent', () => {
  let component: FavoritesSitesComponent;
  let fixture: ComponentFixture<FavoritesSitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritesSitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesSitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
