import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandCatalogueComponent } from './brand-catalogue.component';

describe('BrandCatalogueComponent', () => {
  let component: BrandCatalogueComponent;
  let fixture: ComponentFixture<BrandCatalogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandCatalogueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
