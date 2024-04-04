import { Component, Input } from '@angular/core';
import { Comment } from '../../models/Comment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-commentinfo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './commentinfo.component.html',
  styleUrl: './commentinfo.component.scss'
})
export class CommentinfoComponent {
  @Input() comment?: Comment;
}
