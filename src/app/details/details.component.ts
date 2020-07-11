import { Component, OnInit , ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .card.disabled {
      opacity: 0.5;
    }
    .dark-modal .modal-content {
      background-color: #292b2c;
      color: white;
    }
    .dark-modal .close {
      color: white;
    }
    .light-blue-backdrop {
      background-color: #5cb3fd;
    }
  `]
})
export class DetailsComponent implements OnInit {
  disabled = false;
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }
  openScrollableContent(longContent) {
    this.modalService.open(longContent, { scrollable: true });
  }
}
