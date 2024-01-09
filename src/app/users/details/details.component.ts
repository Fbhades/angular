import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormationService } from 'src/app/public/Service/formation.service';
import { AuthService } from 'src/app/public/Service/service.service';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/public/Service/session.service';


@Component({
  selector: 'app-detail',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailComponent implements OnInit {
  formationId: number=0;
  formation: any;
  sessions: any;

  constructor(private route: ActivatedRoute, private formationService: FormationService,private AuthService: AuthService,private router: Router,private SessionService : SessionService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.formationId = +params['id'];
      this.loadFormationDetails();
      this.loadSessionDetails();
    });
  }

  loadFormationDetails(): void {
    this.formationService.getFormations().subscribe(
      (data) => {
        this.formation = data.find(formation => formation.id === this.formationId);
      },
    );
  }
  loadSessionDetails():void{
  this.SessionService.getSession(this.formationId).subscribe(
    (sessions) => {
      this.sessions = [sessions];
      console.log(this.sessions)
    },
    (error) => {
      console.error('Error loading session details:', error);
    }
  );
  }

  downloadProgram(): void {
    
  }
  registerForSession(session: any): void {
    if (this.AuthService.isAuthenticated()) {
      this.AuthService.getFormations().subscribe(
        (userFormations: string[]) => {
          if (userFormations.includes(session.formation_id)) {
            console.log('User is already registered for this session.');
            return;
          } else if (session.registered_candidates < session.max_candidates) {
            session.registered_candidates++;
            this.SessionService.addCandidate(this.formationId)
    }})} else {
      this.router.navigate(['login']);
  }
}
}
