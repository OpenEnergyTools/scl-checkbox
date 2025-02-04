# \<scl-checkbox>

This is a web component meant to be used for SCL type attributes restricted to xs:boolean. In addition to default input it allows to have a `value="null"` for XML type attributes.

## Usage

This element was meant to be used only for plugins in this organization. If it still fills you bill please use or re-use it. But be aware that we will not react on feature wishes that do not contribute to the needs of plugin in this organization.


## `SclCheckbox.ts`:

### class: `SclCheckbox`, `scl-checkbox`

#### Superclass

| Name         | Module | Package |
| ------------ | ------ | ------- |
| `LitElement` |        | lit     |

#### Mixins

| Name                  | Module | Package                                 |
| --------------------- | ------ | --------------------------------------- |
| `ScopedElementsMixin` |        | @open-wc/scoped-elements/lit-element.js |

#### Static Fields

| Name             | Privacy | Type     | Default                                                           | Description | Inherited From |
| ---------------- | ------- | -------- | ----------------------------------------------------------------- | ----------- | -------------- |
| `scopedElements` |         | `object` | `{
    'md-switch': MdSwitch,
    'md-checkbox': MdCheckbox,
  }` |             |                |

#### Fields

| Name             | Privacy | Type                             | Default | Description                                                           | Inherited From |
| ---------------- | ------- | -------------------------------- | ------- | --------------------------------------------------------------------- | -------------- |
| `nullable`       |         | `boolean`                        | `false` | Whether \[\[\`value\`]] may be set to \`null\` by nullSwitch          |                |
| `defaultValue`   |         | `'true' \| 'false' \| undefined` |         | The default value defined by the XSD attribute default                |                |
| `value`          |         | `'true' \| 'false' \| null`      |         | SCL attributes \`value\`, can only be \`null\` if \[\[\`nullable\`]]. |                |
| `disabled`       |         | `boolean`                        | `false` |                                                                       |                |
| `label`          |         | `string`                         | `''`    |                                                                       |                |
| `supportingText` |         | `string`                         | `''`    |                                                                       |                |
| `nullSwitch`     |         | `MdSwitch \| undefined`          |         |                                                                       |                |

#### Methods

| Name             | Privacy | Description | Parameters | Return    | Inherited From |
| ---------------- | ------- | ----------- | ---------- | --------- | -------------- |
| `reportValidity` |         |             |            | `boolean` |                |
| `checkValidity`  |         |             |            | `boolean` |                |

#### Events

| Name    | Type    | Description | Inherited From |
| ------- | ------- | ----------- | -------------- |
| `input` | `Event` |             |                |

<details><summary>Private API</summary>

#### Fields

| Name            | Privacy | Type                        | Default   | Description | Inherited From |
| --------------- | ------- | --------------------------- | --------- | ----------- | -------------- |
| `checkboxValue` | private | `'true' \| 'false'`         | `'false'` |             |                |
| `userText`      | private | `string`                    |           |             |                |
| `isNull`        | private | `boolean`                   | `false`   |             |                |
| `parkedValue`   | private | `'true' \| 'false' \| null` | `null`    |             |                |
| `null`          | private | `boolean`                   |           |             |                |

#### Methods

| Name               | Privacy | Description | Parameters | Return           | Inherited From |
| ------------------ | ------- | ----------- | ---------- | ---------------- | -------------- |
| `renderNullSwitch` | private |             |            | `TemplateResult` |                |

</details>

<hr/>

### Exports

| Kind | Name          | Declaration | Module         | Package |
| ---- | ------------- | ----------- | -------------- | ------- |
| `js` | `SclCheckbox` | SclCheckbox | SclCheckbox.ts |         |

## `scl-checkbox.ts`:

### Exports

| Kind                        | Name           | Declaration | Module          | Package |
| --------------------------- | -------------- | ----------- | --------------- | ------- |
| `custom-element-definition` | `scl-checkbox` | SclCheckbox | /SclCheckbox.js |         |


&copy; 2023 The Contributors
