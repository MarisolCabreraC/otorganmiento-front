import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
import { MainService } from "src/app/commons/services/main.service";

@Component({
  selector: "app-add-profile",
  templateUrl: "./add-profile.component.html",
  styleUrls: ["./add-profile.component.scss"],
  providers: [MainService],
})
export class AddProfileComponent implements OnInit {
  @Output("volverTabla") volverTabla = new EventEmitter<any>();

  formPerfiles: FormGroup;
  isCreate: boolean = true;

  correosDistribucionId: number;
  activo: number;

  constructor(
    private formBuilder: FormBuilder,
    private mainService: MainService
  ) {}

  ngOnInit() {
    this.buildFormProfile();
  }
  ngAfterViewInit() {}

  /**
   * Crea el formulario con los campos vacios y sus respectivas validaciones
   */
  buildFormProfile() {
    this.formPerfiles = new FormGroup({
      nombre: new FormControl("", [
        Validators.required,
        Validators.maxLength(50),
      ]),
      correo: new FormControl("", [
        Validators.required,
        Validators.maxLength(50),
        Validators.pattern(
          "^[_a-z0-9-]+(.[_a-z0-9-]+)+@[a-z0-9.-]+\\.[a-z]{2,3}$"
        ),
      ]),
    });
  }

  configurePatternForm() {
    this.formPerfiles = this.formBuilder.group({
      correo: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.maxLength(50),
          Validators.pattern("^[0-9]*$"),
        ])
      ),

      nombre: new FormControl(
        "",
        Validators.compose([Validators.required, Validators.maxLength(50)])
      ),
    });
  }

  save() {
    var obj = {
      nombre: this.formPerfiles.get("nombre").value,
      correo: this.formPerfiles.get("correo").value,
    };

    this.mainService.saveProfile(obj).subscribe((result) => {
      window.alert("Registro éxitoso");
      this.formPerfiles.reset();
      this.volverTabla.next();
    });
  }

  backForm() {
    this.formPerfiles.reset();
    this.volverTabla.next();
    this.isCreate = true;
  }

  fillForm(item: any) {
    this.isCreate = false;

    let nombre: string;
    let correo: string;

    if (item && item.correosDistribucionId) {
      this.correosDistribucionId = item.correosDistribucionId;
    }
    if (item && item.nombre) {
      nombre = item.nombre;
    }
    if (item && item.correo) {
      correo = item.correo;
    }
    if (item && item.activo && item.activo.id) {
      this.activo = item.activo;
    }

    this.formPerfiles = new FormGroup({
      nombre: new FormControl(nombre, [
        Validators.required,
        Validators.maxLength(50),
      ]),
      correo: new FormControl(correo, [
        Validators.required,
        Validators.maxLength(50),
        Validators.pattern(
          "^[_a-z0-9-]+(.[_a-z0-9-]+)+@[a-z0-9.-]+\\.[a-z]{2,3}$"
        ),
      ]),
    });
  }

  update() {
    var obj = {
      correoDistribucionId: this.correosDistribucionId,
      nombre: this.formPerfiles.get("nombre").value,
      correo: this.formPerfiles.get("correo").value,
      activo: this.activo,
    };

    this.mainService.updateProfile(obj).subscribe((result) => {
      window.alert("Actualización éxitosa");
      this.formPerfiles.reset();
      this.volverTabla.next();
    });
  }

  get getForm() {
    return this.formPerfiles.controls;
  }
}
