import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArchivesService } from 'src/app/services/archives.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  id: any;
  archive: any;

  constructor(
    private archiveService: ArchivesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const archiveID = this.route.snapshot.paramMap.get('id') || '';
    this.loadArchives(Number(archiveID));
  }

  loadArchives(id: number) {
    this.archiveService.getById(id).subscribe((response) => {
      this.archive = response;
    });
  }

}
