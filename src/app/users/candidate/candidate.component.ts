import { Component} from '@angular/core';
import { FormationService } from 'src/app/public/Service/formation.service';
import { AuthService } from 'src/app/public/Service/service.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-candidat',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css'],
})
export class CandidateComponent  {
  candidats: any[] = [];
  formations: any[] = [];
  candidat : any[] = [];

  constructor(private formationService: FormationService, private authService: AuthService) {}
  
  ngOnInit() {
    this.loadFormations();
  }

  isFormateur(): boolean {
    return this.authService.getUserRole() === "formateur";
  }

  loadFormations(): void {
  this.authService.getFormations().subscribe(
    (userFormationIds: string[]) => {
      if (userFormationIds.length === 0) {
        console.log("5raj");
        return;
      } else {
        console.log(userFormationIds);
        const requests = userFormationIds.map((formationId) =>
          this.formationService.getFormationById(formationId)
        );

        forkJoin(requests).subscribe(
          (formationsData: any[]) => {
            this.formations = formationsData;
            console.log(this.formations);
          },
        );
      }
    }
  );
}
findCandidates(id: any): void {
  const users = this.authService.getUsers();
  this.candidats = [];
  for (const user of users) {
    if (user.formations && user.formations.includes(id) && user.role==="candidat") {
      this.candidats.push(user);
    }
  }
}
}
