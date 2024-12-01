import { Component, ViewChild } from '@angular/core';
import { ContextMenuComponent } from './context-menu/context-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ContextMenuComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Unified Context Menu';

  @ViewChild(ContextMenuComponent) contextMenu!: ContextMenuComponent;

  menuItems = [
    { value: 'copy', label: 'Copy' },
    { value: 'highlight', label: 'Highlight' },
    { value: 'search', label: 'Search' },
  ];

  showContextMenu(event: MouseEvent) {
    const selectedText = window.getSelection()?.toString();
    if (selectedText?.trim()) {
      this.contextMenu.showMenu(event, selectedText);
    }
  }

  handleMenuAction(event: any) {
    console.log('Selected:', event);
  }
  
}
