import { Component, OnInit } from '@angular/core';
import { ArchivesService } from '../services/archives.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss'],
})
export class ArchiveComponent implements OnInit {
  archives: Array<Archive> = [];
  allArchives: Array<Archive> = [];

  constructor(private ArchivesService: ArchivesService) {}

  ngOnInit(): void {
    this.loadArchives();
  }

  loadArchives() {
    this.ArchivesService.loadEntity().subscribe((response) => {
      this.allArchives = response as Array<Archive>;
      this.archives = response as Array<Archive>;
    });
  }
  searchArchives(searchInput: HTMLInputElement) {
    this.archives = this.allArchives.filter((archive: Archive) =>
    archive.name.includes(searchInput.value)
    );
  }
}

export interface Archive {
  id: number;
  name: string;
  folder: Array<string>;
}
