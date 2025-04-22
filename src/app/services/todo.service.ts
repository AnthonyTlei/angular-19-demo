import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.type';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todoList: Todo[] = [
    {
      userId: 1,
      completed: false,
      title: 'Buy groceries',
      id: 101,
    },
    {
      userId: 2,
      completed: true,
      title: 'Finish Angular homework',
      id: 102,
    },
    {
      userId: 3,
      completed: false,
      title: 'Walk the dog',
      id: 103,
    },
    {
      userId: 1,
      completed: true,
      title: 'Read a book',
      id: 104,
    },
    {
      userId: 2,
      completed: false,
      title: 'Clean the kitchen',
      id: 105,
    },
  ];
  constructor() {}
}
