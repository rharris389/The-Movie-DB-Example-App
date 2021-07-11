import { Component, Input, OnInit } from '@angular/core';
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-trailers',
  templateUrl: './trailers.component.html',
  styleUrls: ['./trailers.component.scss'],
})
export class TrailersComponent implements OnInit {
  @Input() trailer_key?: string;
  @Input() trailer_name?: string;

  constructor(private modalService: NgbModal, private sanitizer : DomSanitizer) {}

  ngOnInit(): void {
  }

  getSanitizedURL(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  open(content) {
    this.modalService.open(content, {size: 'xl', centered: true})
  }
}
