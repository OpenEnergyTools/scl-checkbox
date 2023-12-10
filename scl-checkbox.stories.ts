import { html, TemplateResult } from 'lit';

import './scl-checkbox.js';

export default {
  title: 'scl-checkbox',
  component: 'scl-checkbox',
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  value: 'true' | 'false' | null;
  disabled: boolean;
  label: string;
  defaultValue: 'true' | 'false';
  supportingText: string;
  nullable: boolean;
}

const CheckboxTemplate: Story<ArgTypes> = ({
  value = 'false',
  disabled = false,
  label = 'label',
  defaultValue = 'true',
  supportingText = 'supportingText',
}) =>
  html`
    <scl-checkbox
      .value="${value}"
      ?disabled=${disabled}
      label="${label}"
      defaultValue="${defaultValue}"
      supportingText="${supportingText}"
    >
    </scl-checkbox>
  `;

export const PlainCheckbox = CheckboxTemplate.bind({});
PlainCheckbox.args = {
  value: null,
  disabled: false,
  label: 'label',
  defaultValue: 'true',
  supportingText: 'supportingText',
  nullable: false,
};

const NulledCheckboxTemplate: Story<ArgTypes> = ({
  value = null,
  disabled = false,
  label = 'label',
  defaultValue = 'false',
  supportingText = 'supportingText',
}) =>
  html`
    <scl-checkbox
      .value="${value}"
      ?disabled=${disabled}
      label="${label}"
      defaultValue="${defaultValue}"
      supportingText="${supportingText}"
      ?nullable=${true}
    >
    </scl-checkbox>
  `;

export const NulledCheckbox = NulledCheckboxTemplate.bind({});
NulledCheckbox.args = {
  value: null,
  disabled: false,
  label: 'label',
  defaultValue: 'true',
  supportingText: 'supportingText',
  nullable: true,
};
