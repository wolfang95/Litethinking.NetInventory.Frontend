import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ControlEntities } from '@app/shared/utils/form';
import { Dictionaries } from '@app/store/dictionaries';
import { ControlItem } from '@app/models/frontend';
import { HttpParams } from '@angular/common/http';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import * as fromList from '../../store/list';
import * as fromRoot from '@app/store';
import { MatSelectionListChange } from '@angular/material/list';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit, OnDestroy {
  @Input() dictionaries !: Dictionaries | null;
  form! : FormGroup;
  controls !: ControlEntities;
  items !: ControlItem[];
  categories !: ControlItem[];
  marca !: ControlItem[];
  paginatorParams !: HttpParams;
  private destroy = new Subject<any>();




  constructor(
    private store: Store<fromRoot.State>,
    private fb: FormBuilder

  ) { }

  ngOnInit(): void {
      this.store.pipe(takeUntil(this.destroy)).pipe(select(fromList.getPaginationRequest))
        .subscribe( (data:any) => {
            this.paginatorParams = data;
        })

      this.categories = this.dictionaries?.categories.controlItems as ControlItem[];
      this.marca = this.dictionaries?.marca.controlItems as ControlItem[];

      this.items = [
        {value: 'nombreAsc', label: 'Nombre'},
        {value: 'precioAsc', label: 'Precio'},
        {value: 'descripcionAsc', label: 'Descripcion'},
      ]


      this.form = this.fb.group({
          sort: [null,{
            updateOn: 'change', validators:[]
          }],
          categoria: null,
          marca: null
      })

      this.controls = {
        sort : {
            items: this.items,
            changed: () => {
              this.paginatorParams = this.paginatorParams.delete('sort');
              this.paginatorParams = this.paginatorParams.set('sort', this.form.value.sort);
              this.store.dispatch(new fromList.Read(this.paginatorParams, this.paginatorParams.toString()));
            }
        },
      }
  }

  onCategoriaSelectionChange(ob: MatSelectionListChange) {
    this.paginatorParams = this.paginatorParams.delete('categoria');
    this.paginatorParams = this.paginatorParams.set('categoria', this.form.get('categoria')?.value);
    this.store.dispatch(new fromList.Read(this.paginatorParams, this.paginatorParams.toString()));
  }

  onMarcaSelectionChange(ob: MatSelectionListChange) {
    this.paginatorParams = this.paginatorParams.delete('marca');
    this.paginatorParams = this.paginatorParams.set('marca', this.form.get('marca')?.value);
    this.store.dispatch(new fromList.Read(this.paginatorParams, this.paginatorParams.toString()));
  }

  ngOnDestroy() : void {
    this.destroy.next(null);
    this.destroy.complete();
  }

}
