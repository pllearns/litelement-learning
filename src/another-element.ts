import { LitElement, html, customElement, property } from "lit-element";
import './simple-element';

@customElement('another-element')
export class AnotherElement extends LitElement {

  @property()
  bar = 'bar'

  render() {
    return html`
    <starter-element>
      <p>${this.bar}</p>
    </starter-element>
    `
  }
}