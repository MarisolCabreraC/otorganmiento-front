import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from "@angular/core";
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { MainService } from "src/app/commons/services/main.service";

@Component({
  selector: "app-add-adherence",
  templateUrl: "./add-adherence.component.html",
  styleUrls: ["./add-adherence.component.scss"],
})
export class AddAdherenceComponent implements OnInit {
  @Output("volverTabla") volverTabla = new EventEmitter<any>();

  isCreate: boolean = true;
  formAdherence: FormGroup;
  formEqualOrDifferent: FormGroup;
  formVariableAll: FormGroup;
  listRules: any;
  listRuleCriteria: any;
  condicionCriteria: any;

  createFormMultiple: boolean = false;
  createFormSingle: boolean = false;

  myFormValueChanges$;

  constructor(
    private formBuilder: FormBuilder,
    private mainService: MainService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.buildFormAdherence();
  }

  ngAfterViewInit() {
    this.fillRulesCriteria();
  }

  /**
   * Crea el formulario con los campos vacios y sus respectivas validaciones
   */
  buildFormAdherence() {
    this.formAdherence = new FormGroup({
      codigo: new FormControl(""),
      nombreCriterio: new FormControl("", [
        Validators.required,
        Validators.maxLength(50),
      ]),
      tipoProducto: new FormControl("", [
        Validators.required,
        Validators.maxLength(50),
      ]),
      tipoFlujo: new FormControl("", [
        Validators.required,
        Validators.maxLength(50),
      ]),
      tipoDecision: new FormControl("", [
        Validators.required,
        Validators.maxLength(50),
      ]),
      criteria: this.formBuilder.array([this.getCriteria()]),
    });
    this.myFormValueChanges$ =
      this.formAdherence.controls["criteria"].valueChanges;
  }

  /**
   * Create form unit
   */
  private getCriteria() {
    return this.formBuilder.group({
      variableCriterio: new FormControl("", [
        Validators.required,
        Validators.maxLength(50),
      ]),
      variableEntro: new FormControl(null, [Validators.required]),
      formMultiple: new FormControl(null, [Validators.required]),
      idOperador: new FormControl(""),
      valorPrimero: new FormControl(""),
      valorSegundo: new FormControl(""),
    });
  }

  backForm() {
    this.clearAllCriteria();
    this.formAdherence.reset();
    this.volverTabla.next();
    this.isCreate = true;
  }

  fillRulesCriteria() {
    this.mainService.findAllRulesCriteria().subscribe((result) => {
      this.listRules = result.criterios;
    });
  }

  changeValueRuleCriteria(obj: any, ind: any) {
    this.formAdherence.get("criteria").value[ind].variableEntro = true;
    this.mainService.findAllRulesCriteria().subscribe((result) => {
      this.listRuleCriteria = result.criterios.filter(
        (item: any) => item.id == obj
      );
      this.condicionCriteria = this.listRuleCriteria[0].reglas;
    });
    this.cdRef.detectChanges();
  }

  changeVariable(id: any, ind: any) {
    if (id == "ENTRE") {
      this.formAdherence.get("criteria").value[ind].formMultiple = true;
    } else {
      this.formAdherence.get("criteria").value[ind].formMultiple = false;
    }
    this.cdRef.detectChanges();
  }

  /**
   * Agrega un nuevo formulario de Criterio
   */
  addCriteria() {
    const control = <FormArray>this.formAdherence.controls["criteria"];
    control.push(this.getCriteria());
  }

  /**
   * Elimina un criterio
   */
  removeCriteria(i: number) {
    const control = <FormArray>this.formAdherence.controls["criteria"];
    control.removeAt(i);
  }

  /**
   * Elimina todos los critertios cuando regresa a la tabla principal
   */
  clearAllCriteria() {
    const control = <FormArray>this.formAdherence.controls["criteria"];
    while (control.length) {
      control.removeAt(control.length - 1);
    }
    control.clearValidators();
    control.push(this.getCriteria());
  }

  save() {
    let arr = this.formAdherence.controls["criteria"].value;
    let reglas = [];

    for (let index = 0; index < arr.length; index++) {
      let regla = {
        idCriterio: null,
        idOperador: null,
        valor1: null,
        valor2: null,
      };
      regla.idCriterio =
        this.formAdherence.get("criteria").value[index].variableCriterio;
      regla.idOperador =
        this.formAdherence.get("criteria").value[index].idOperador;
      regla.valor1 = this.formAdherence.get("criteria").value[index].valor1;
      if (this.formAdherence.get("criteria").value[index].valor2) {
        regla.valor2 = this.formAdherence.get("criteria").value[index].valor2;
      }
      reglas.push(regla);
    }

    let objSave = {
      nombre: this.formAdherence.get("nombreCriterio").value,
      idTipoProducto: this.formAdherence.get("tipoProducto").value,
      idTipoFlujo: this.formAdherence.get("tipoFlujo").value,
      idTipoDecision: this.formAdherence.get("tipoDecision").value,
      reglas: [reglas],
    };

    this.mainService.saveProfile(objSave).subscribe((result) => {
      window.alert("Registro éxitoso");
      this.formAdherence.reset();
      this.volverTabla.next();
    });
    console.log(objSave);
  }
}
