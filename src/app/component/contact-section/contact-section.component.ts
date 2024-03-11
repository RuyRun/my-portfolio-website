import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss'],
})
export class ContactSectionComponent implements OnInit {
  emailForm: FormGroup;
  post = {
    endPoint: 'https://kevinwyatt.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };
  http = inject(HttpClient);

  constructor(private fb: FormBuilder) {
    this.emailForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      message: [null, [Validators.required]],
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.emailForm.valid)
      this.http
        .post(this.post.endPoint, this.post.body(this.emailForm.value))
        .subscribe({
          next: (response) => {
            this.emailForm.reset();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
  }
}
