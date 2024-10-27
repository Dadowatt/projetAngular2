import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableVoitureComponent } from './table-voiture.component';

describe('TableVoitureComponent', () => {
  let component: TableVoitureComponent;
  let fixture: ComponentFixture<TableVoitureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableVoitureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableVoitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
