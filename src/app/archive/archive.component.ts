import { Component, OnInit } from '@angular/core';
import { ArchivesService } from '../services/archives.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss'],
})
export class ArchiveComponent implements OnInit {
  archives: any;
  constructor(private ArchivesService: ArchivesService) {}

  ngOnInit(): void {
    this.loadArchives();
  }

  loadArchives() {
    this.ArchivesService.loadEntity().subscribe((response) => {
      this.archives = response;
    });
  }
}
