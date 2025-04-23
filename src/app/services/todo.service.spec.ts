import { TestBed } from '@angular/core/testing';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { TodoService } from './todo.service';

describe('TodoService (real API)', () => {
  let todoService: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoService, provideHttpClient(withInterceptorsFromDi())],
    });

    todoService = TestBed.inject(TodoService);
  });

  it('should fetch real todos with length > 0', (done) => {
    todoService.getTodoList().subscribe({
      next: (todos) => {
        expect(Array.isArray(todos)).toBeTrue();
        expect(todos.length).toBeGreaterThan(0);
        done();
      },
      error: (err) => {
        fail(`Request failed: ${err.message}`);
        done();
      },
    });
  });

  it('should fetch todos with correct Todo type shape', (done) => {
    todoService.getTodoList().subscribe({
      next: (todos) => {
        const allAreTodos = todos.every(
          (todo) =>
            typeof todo.id === 'number' &&
            typeof todo.userId === 'number' &&
            typeof todo.title === 'string' &&
            typeof todo.completed === 'boolean'
        );

        expect(allAreTodos).toBeTrue();
        done();
      },
      error: (err) => {
        fail(`Request failed: ${err.message}`);
        done();
      },
    });
  });
});
