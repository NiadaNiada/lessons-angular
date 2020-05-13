import {Component, OnInit} from '@angular/core';
import {Lesson} from '../../../models/lesson.model';
import {LessonsService} from '../../../services/lessons.service';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss']
})

export class LessonsComponent implements OnInit {

  lessons: Lesson[];
  selectedLesson: Lesson;
  totalHours: number;

  constructor(private lessonsService: LessonsService) {

  }

  ngOnInit(): void {
    this.lessons = this.lessonsService.getAllLessons();
    this.calculateTotalHours();
  }

  calculateTotalHours() {
    this.totalHours = this.lessons.map(el => {
      return el.hour;
    }).reduce((sum, el) => {
      return sum + el;
    }, 0);
  }

  onDelete(lesson: Lesson) {
     const indexOfLesson = this.lessons.indexOf(lesson);
     this.lessons.splice(indexOfLesson, 1);
     this.selectedLesson = null;
     this.calculateTotalHours();
  }

  onAdd(lesson: Lesson) {
    this.lessons = this.lessons.concat(lesson);
    this.calculateTotalHours();
  }

  onSelect(lesson: Lesson): Lesson {
    return this.selectedLesson = lesson;
  }

  onEdit(lesson: Lesson) {
    this.lessons.map((item, index) => {
      const indexOfLesson = this.lessons.indexOf(lesson);
      return index === indexOfLesson ? {...item, item: {name : lesson.name, hour: lesson.hour}} : item;
    });
    this.selectedLesson = null;
    this.calculateTotalHours();

  }
}
