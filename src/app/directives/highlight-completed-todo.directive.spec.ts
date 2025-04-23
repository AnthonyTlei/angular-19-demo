import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HighlightCompletedTodoDirective } from './highlight-completed-todo.directive';
import { By } from '@angular/platform-browser';

@Component({
  template: `<li [appHighlightCompletedTodo]="isDone">Test Todo</li>`,
  standalone: true,
  imports: [HighlightCompletedTodoDirective],
})
class TestHostComponent {
  isDone = false;
}

describe('HighlightCompletedTodoDirective', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let debugEl: DebugElement;

  beforeEach(async () => {
    fixture = await TestBed.createComponent(TestHostComponent);
    fixture.detectChanges(); // 🧠 triggers effect()
    debugEl = fixture.debugElement.query(
      By.directive(HighlightCompletedTodoDirective)
    );
  });

  it('should apply default styles when not completed', () => {
    const el: HTMLElement = debugEl.nativeElement;
    expect(el.style.textDecoration).toBe('none');
    expect(el.style.backgroundColor).toBe('rgb(255, 255, 255)');
    expect(el.style.color).toBe('rgb(0, 0, 0)');
  });

  it('should apply completed styles when isCompleted is true', () => {
    fixture.componentInstance.isDone = true;
    fixture.detectChanges();
    const el: HTMLElement = debugEl.nativeElement;
    expect(el.style.textDecoration).toBe('line-through');
    expect(el.style.backgroundColor).toBe('rgb(211, 249, 216)');
    expect(el.style.color).toBe('rgb(108, 117, 125)');
  });
});
