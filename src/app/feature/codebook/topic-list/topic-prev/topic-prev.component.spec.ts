import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicPrevComponent } from './topic-prev.component';

describe('TopicPrevComponent', () => {
  let component: TopicPrevComponent;
  let fixture: ComponentFixture<TopicPrevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopicPrevComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopicPrevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
