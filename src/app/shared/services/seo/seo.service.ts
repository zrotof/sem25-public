import { Injectable, Inject, PLATFORM_ID, Optional } from '@angular/core';
import { Meta, Title, MetaDefinition } from '@angular/platform-browser';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private isBrowser: boolean;

  constructor(
    private title: Title,
    private meta: Meta,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Optional() @Inject(DOCUMENT) private document: Document
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  updateTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }

  updateMetaTags(tags: MetaDefinition[]) {
    tags.forEach(tag => this.meta.updateTag(tag));
  }

  setCanonicalUrl(url?: string) {
    if (!this.isBrowser || !this.document) return; // ✅ protection SSR

    const head = this.document.getElementsByTagName('head')[0];
    if (!head) return;

    let link =
      this.document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;

    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      head.appendChild(link);
    }

    link.setAttribute('href', url || this.document.location.href); // ✅ location.href marche côté browser
  }

  // Open Graph
  setOpenGraph(data: { [key: string]: string }) {
    Object.keys(data).forEach(key => {
      this.meta.updateTag({ property: `og:${key}`, content: data[key] });
    });
  }
}
