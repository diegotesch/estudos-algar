import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { CardComponent } from './card/card.component';
import { FuncionarioFormComponent } from './funcionario-form/funcionario-form.component';
import { CampoColoridoDirective } from './campo-colorido.directive';
import { PipesComponent } from './pipes/pipes.component';
import { FormularioEstudoComponent } from './formulario-estudo/formulario-estudo.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    CardComponent,
    FuncionarioFormComponent,
    CampoColoridoDirective,
    PipesComponent,
    FormularioEstudoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
