import {Injectable} from '@angular/core';
import {Lesson} from '../models/lesson.model';

@Injectable({
  providedIn: 'root'
})
export class LessonsService {

  lessons: Lesson[] = [
    {name: 'Mathematics', hour: 4},
    {name: 'English', hour: 10},
    {name: 'Informatics', hour: 1},
    {name: 'Fizaca', hour: 2},
    {name: 'Arta Plastica', hour: 7},
    {name: 'Educatia Fizica', hour: 5},
  ];

  constructor() {
  }

  getAllLessons(): Lesson[] {
    return this.lessons;
  }

  addLesson(lesson: Lesson) {
    this.lessons = this.lessons.concat(lesson);
  }
}
