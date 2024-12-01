import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-context-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss'],
})
export class ContextMenuComponent {
  @Input() menuItems!: any[];
  @Output() menuSelection = new EventEmitter<any>();
  isVisible: boolean = false;
  position: { x: number; y: number } = { x: 0, y: 0 };
  selectedText?: string;

  // Get Mouse Event and selected Text
  showMenu(event: MouseEvent, text?: string) {
    event.preventDefault();
    this.isVisible = true;
    this.position = { x: event.clientX, y: event.clientY };
    this.selectedText = text;
  }

  // Retrun or Emit the values
  performAction(action: any) {
    const result = {
      selectedText: this.selectedText,
      action: action,
    };
    this.menuSelection.emit(result);
    this.isVisible = false;
  }
  // finally close the options
  @HostListener('document:click')
  onDocumentClick() {
    this.isVisible = false;
  }

}
