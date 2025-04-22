import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../models/todo.type';

@Pipe({
  name: 'filterTodos',
})
export class FilterTodosPipe implements PipeTransform {
  transform(todoList: Todo[], searchTerm: string): Todo[] {
    if (!searchTerm) {
      return todoList;
    }
    const text = searchTerm.toLowerCase();
    return todoList.filter((todo) => {
      return todo.title.toLowerCase().includes(text);
    });
  }
}
