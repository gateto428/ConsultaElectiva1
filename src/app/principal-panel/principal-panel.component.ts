import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  FormsModule
} from "@angular/forms";
import { Observable } from "rxjs";
import { ServiceConsultService } from "../service-consult.service";

@Component({
  selector: "app-principal-panel",
  templateUrl: "./principal-panel.component.html",
  styleUrls: ["./principal-panel.component.css"]
})
export class PrincipalPanelComponent implements OnInit {
  municipios: Observable<any>;
  selectedValue: number = 0;
  munSelected: any;
  formControlName = "countryControl";

  constructor(public service: ServiceConsultService) {}

  ngOnInit() {
    this.service.getData().subscribe(data => {
      this.municipios = data["consulta"];
      this.munSelected = this.municipios[this.selectedValue];
    });
  }
  onChange() {
    this.munSelected = this.municipios[this.selectedValue];
  }
}
