export interface DragableItem {
  onDragStart?(e: DragEvent): void;
  onDragEnd?(e: DragEvent): void;
}

export interface DragableTarget {
  onDragOver?(e: DragEvent): void;
  onDragLeave?(e: DragEvent): void;
  onDrop?(e: DragEvent): void;
}
