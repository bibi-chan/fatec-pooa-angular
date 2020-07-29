import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { ContentComponent } from './shared/content/content.component';
import { DataBidingComponent } from './shared/data-biding/data-biding.component';
import { FormsModule} from '@angular/forms';
import { DirectiveComponent } from './shared/directive/directive.component';
import { CardContentComponent } from './shared/card-content/card-content.component';
import { FormComponent } from './shared/form/form.component';
import { FundoDirective } from './shared/fundo.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    DataBidingComponent,
    DirectiveComponent,
    CardContentComponent,
    FormComponent,
    FundoDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
