import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociateMaterialsComponent } from './associate-materials.component';

describe('AssociateMaterialsComponent', () => {
  let component: AssociateMaterialsComponent;
  let fixture: ComponentFixture<AssociateMaterialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociateMaterialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociateMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
