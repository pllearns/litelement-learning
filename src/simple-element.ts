import { LitElement, html, customElement, property } from "lit-element";

@customElement('starter-element')
export class MyElement extends LitElement {

  @property()
  foo = 'foo';

  render() {
   
    return html `<div>${this.foo}</div>`
  }
}