import { css, html, LitElement, TemplateResult } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';

import '@material/web/checkbox/checkbox';
import '@material/web/switch/switch';
import { Checkbox } from '@material/web/checkbox/internal/checkbox';
import { Switch } from '@material/web/switch/internal/switch';

@customElement('scl-checkbox')
/** TextField designed to be used for SCL element */
export class SclCheckbox extends LitElement {
  /** Whether [[`value`]] may be set to `null` by nullSwitch */
  @property({ type: Boolean })
  nullable = false;

  /** The default value defined by the XSD attribute default */
  @property({ type: String })
  defaultValue?: 'true' | 'false';

  private checkboxValue: 'true' | 'false' = 'false';

  /** SCL attributes `value`, can only be `null` if [[`nullable`]]. */
  @property({ type: String })
  get value(): 'true' | 'false' | null {
    return this.null ? null : this.checkboxValue;
  }

  set value(value: 'true' | 'false' | null) {
    if (value === null) this.null = true;
    else {
      this.null = false;
      this.checkboxValue = value;
    }
  }

  @property({ type: Boolean })
  disabled: boolean = false;

  @property({ type: String })
  label: string = '';

  @property({ type: String })
  supportingText: string = '';

  @state()
  private get userText(): string {
    return `${this.label}${
      this.supportingText !== '' ? ` (${this.supportingText})` : ''
    }`;
  }

  @state()
  private isNull = false;

  private parkedValue: 'true' | 'false' | null = null;

  @state()
  private get null(): boolean {
    return this.nullable && this.isNull;
  }

  private set null(value: boolean) {
    if (!this.nullable || value === this.isNull) return;

    this.isNull = value;
    if (this.isNull) {
      this.parkedValue = this.checkboxValue;
      if (this.defaultValue) this.checkboxValue = this.defaultValue;
    } else {
      this.checkboxValue = this.parkedValue!;
      this.parkedValue = null;
    }
  }

  @query('.nullswitch.element') nullSwitch?: Switch;

  // TODO (jakob-vogelsang): only make sense with the introduction of fixed value
  // eslint-disable-next-line class-methods-use-this
  reportValidity(): boolean {
    return true;
  }

  // TODO (jakob-vogelsang): only make sense with the introduction of fixed value
  // eslint-disable-next-line class-methods-use-this
  checkValidity(): boolean {
    return true;
  }

  private renderNullSwitch(): TemplateResult {
    if (this.nullable) {
      return html`<md-switch
        class="nullswitch element"
        ?selected=${!this.null}
        ?disabled=${this.disabled}
        @change=${() => {
          this.null = !this.nullSwitch!.selected;
        }}
      ></md-switch>`;
    }
    return html``;
  }

  render(): TemplateResult {
    return html`
      <div style="display: flex; flex-direction: row;">
        <div class="input container">
          <label
            class="input element"
            style="${this.disabled || this.isNull
              ? `color:rgba(0, 0, 0, 0.38)`
              : ``}"
          >
            <md-checkbox
              touch-target="wrapper"
              ?checked=${this.checkboxValue === 'true'}
              ?disabled=${this.disabled || this.isNull}
              @change="${(evt: Event) => {
                this.checkboxValue =
                  (evt.target as Checkbox).checked === true ? 'true' : 'false';
              }}"
            ></md-checkbox>
            ${this.userText}
          </label>
        </div>
        <div class="nullswitch container">${this.renderNullSwitch()}</div>
      </div>
    `;
  }

  static styles = css`
    .nullswitch.element {
      margin-left: 12px;
    }

    .nullswitch.container {
      display: flex;
      align-items: center;
      height: 56px;
    }

    .input.container {
      flex: auto;
    }

    .input.element {
      display: flex;
      align-items: center;
    }
  `;
}
