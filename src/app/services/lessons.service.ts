import {Injectable} from '@angular/core';
import {Lesson} from '../models/lesson.model';

@Injectable({
  providedIn: 'root'
})
export class LessonsService {

  lessons: Lesson[];

  constructor() {
  }

  getAllLessons(): Lesson[] {
    return this.lessons = [
      {name: 'Mathematics', hour: 4},
      {name: 'English', hour: 10},
      {name: 'Informatics', hour: 1},
      {name: 'Fizaca', hour: 2},
      {name: 'Arta Plastica', hour: 7},
      {name: 'Educatia Fizica', hour: 5},
    ];
  }

}
