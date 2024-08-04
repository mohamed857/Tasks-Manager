import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [MatInputModule,
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent implements OnInit {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initFormModels();
  }

  addTask(): void {
    if (this.form.valid) {
      console.log('form value', this.form.value);
    }
  }

  private initFormModels(): void {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: ['', Validators.required],
    });
  }
}
