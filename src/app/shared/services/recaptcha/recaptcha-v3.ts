// recaptcha-v3.service.ts
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { environment } from 'src/environments/environment';

declare global {
    interface Window { grecaptcha?: any; }
}

@Injectable({ providedIn: 'root' })
export class RecaptchaV3Service {
    private siteKey = environment.recaptchaV3Public;
    private loaded = false;

    constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

    /**
     * Charge le script reCAPTCHA côté client uniquement.
     */
    private loadScript(): Promise<void> {
        // On ne charge le script que côté navigateur
        if (!isPlatformBrowser(this.platformId)) return Promise.resolve();

        if (this.loaded && window.grecaptcha) return Promise.resolve();

        return new Promise<void>((resolve, reject) => {
            const script = document.createElement('script');
            script.src = `https://www.google.com/recaptcha/api.js?render=${this.siteKey}`;
            script.async = true;
            script.defer = true;
            script.onload = () => { this.loaded = true; resolve(); };
            script.onerror = () => reject(new Error('reCAPTCHA v3 load error'));
            document.head.appendChild(script);
        });
    }

    /**
     * Exécute reCAPTCHA v3 et retourne le token.
     */
    async execute(action: string): Promise<string> {
        if (!isPlatformBrowser(this.platformId)) {
            // côté serveur, on ne peut pas exécuter grecaptcha
            return Promise.reject(new Error('reCAPTCHA v3 cannot be executed on the server'));
        }

        await this.loadScript();

        return new Promise<string>((resolve, reject) => {
            window.grecaptcha.ready(() => {
                window.grecaptcha.execute(this.siteKey, { action })
                    .then(resolve)
                    .catch((err: any) => reject(err));
            });
        });
    }
}
