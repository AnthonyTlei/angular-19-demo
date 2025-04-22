import { Component, inject, OnInit, signal } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo.type';

@Component({
  selector: 'app-todo',
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent implements OnInit {
  todoService = inject(TodoService);
  todoList = signal<Todo[]>([]);

  ngOnInit(): void {
    console.log(this.todoService.todoList);
    this.todoList.set(this.todoService.todoList);
  }
}
