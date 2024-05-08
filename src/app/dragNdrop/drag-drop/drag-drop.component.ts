import { Component, ElementRef, EventEmitter, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import {CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-drag-drop',
  standalone: true,
  imports: [DragDropModule, CommonModule],
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class DragDropComponent {
  @ViewChild('preview') previewContainer!: ElementRef;

  todo = [
    'Car',
    'Home',
    'Personal',
    'Education'
  ];

  done:any = [

  ];

  @Output() updatedData = new EventEmitter<any>();

  postData(){
    this.updatedData.emit(this.done);
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
    console.log(this.done);
    this.postData();
  }

}
