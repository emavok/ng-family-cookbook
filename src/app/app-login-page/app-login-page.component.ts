import { GlobalPositionStrategy, NoopScrollStrategy, Overlay, OverlayRef } from '@angular/cdk/overlay';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-login-page',
    templateUrl: './app-login-page.component.html',
    styleUrls: ['./app-login-page.component.scss']
})
export class AppLoginPageComponent {

    public formGroup: FormGroup;

    public formSubmitted: boolean = false;

    private overlayRef!: OverlayRef;

    constructor(
        private overlay: Overlay
    ) {
        this.formGroup = new FormGroup({
            username: new FormControl(null, Validators.required ),
            password: new FormControl(null, Validators.required ),
        });
    }

    public onSubmitBtnClick(event: Event): void {
        event.preventDefault();
        this.formGroup.markAllAsTouched();
        if (this.formGroup.valid) {
            this.formGroup.disable();
            this.formSubmitted = true;
            const posStrat = this.overlay.position()
                .global()
                .centerHorizontally()
                .centerVertically();
            this.overlayRef = this.overlay.create({
                width: '100%',
                height: '100%',
                hasBackdrop: true,
                positionStrategy: posStrat
            });
            // setTimeout(() => {
            //     this.overlayRef.dispose();
            // }, 2000);
        }
    }

    public hasError(controlName: string, validatorName: string): boolean {
        return !! this.formGroup.get(controlName)?.hasError(validatorName);
    }
}
