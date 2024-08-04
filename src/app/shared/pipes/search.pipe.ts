import { Pipe, PipeTransform } from '@angular/core';
import { ITask } from '../models/ITask';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(tasks: ITask[], searchText: string): ITask[] {
    if (!tasks || !searchText) {
      return tasks;
    } else {
      return tasks.filter((task) => {
        searchText = searchText.toLocaleLowerCase();
        return task.title.toLowerCase().includes(searchText) || task.description.toLowerCase().includes(searchText)
      })

    }
  }

}
