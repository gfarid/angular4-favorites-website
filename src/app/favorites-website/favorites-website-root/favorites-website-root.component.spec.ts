import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FavoritesWebsiteRootComponent } from './favorites-website-root.component';

describe('FavoritesWebsiteRootComponent', () => {
  let component: FavoritesWebsiteRootComponent;
  let fixture: ComponentFixture<FavoritesWebsiteRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritesWebsiteRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesWebsiteRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
