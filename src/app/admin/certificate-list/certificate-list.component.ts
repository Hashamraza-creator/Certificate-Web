import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-certificate-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './certificate-list.component.html',
 // styleUrl: './certificate-list.component.scss'
})
export class CertificateListComponent {
  newTemplate = {
    title: '',
    fields: [] as string[],
    file: null as string | ArrayBuffer | null,
  };
  addTemplate() {
    this.templates.push({ ...this.newTemplate });
    this.newTemplate = { title: '', fields: [], file: null }; // reset newTemplate after adding
  }
  templates: { title: string; fields: string[]; file: string | ArrayBuffer | null }[] = [];


  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input?.files?.[0]) {
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        this.newTemplate.file = e.target?.result || null;
      };
      fileReader.readAsDataURL(input.files[0]);
    }
  }
}
