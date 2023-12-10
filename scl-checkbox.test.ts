/* eslint-disable import/no-extraneous-dependencies */

import { expect, fixture, html } from '@open-wc/testing';
import { sendKeys, sendMouse } from '@web/test-runner-commands';

import { visualDiff } from '@web/test-runner-visual-regression';

import './scl-checkbox.js';
import type { SclCheckbox } from './scl-checkbox.js';

const factor = window.process && process.env.CI ? 5 : 3;
function timeout(ms: number) {
  return new Promise(res => {
    setTimeout(res, ms * factor);
  });
}
mocha.timeout(4000 * factor);

document.body.style.width = '400px';
document.body.style.height = '400px';

describe('Custom SCL related TextField', () => {
  describe('that is non-nullable', () => {
    let sclSelect: SclCheckbox;

    beforeEach(async () => {
      sclSelect = await fixture(
        html`<scl-checkbox
          .value=${'true'}
          label="label"
          supportingText="supportingText"
        ></scl-checkbox>`
      );
      document.body.prepend(sclSelect);
    });

    afterEach(() => {
      if (sclSelect) sclSelect.remove();
    });

    it('per default looks like the last screenshot', async () => {
      await timeout(200);
      await visualDiff(sclSelect, `non-nullable/valid value`);
    });

    it('when disabled looks like the latest screenshot', async () => {
      sclSelect.disabled = true;

      await timeout(200);
      await visualDiff(sclSelect, `non-nullable/disabled`);
    });
  });

  describe('that is nullable', () => {
    describe('with defaultValue set', () => {
      let sclCheckbox: SclCheckbox;

      beforeEach(async () => {
        sclCheckbox = await fixture(
          html`<scl-checkbox
            nullable
            label="label"
            .value=${null}
            defaultValue="true"
          ></scl-checkbox>`
        );
        document.body.prepend(sclCheckbox);
      });

      afterEach(() => {
        if (sclCheckbox) sclCheckbox.remove();
      });

      it('with defaultValue set looks like the last screenshot', async () => {
        await timeout(200);

        await visualDiff(sclCheckbox, `nullable/indicated defaultValue`);
      });

      it('when disabled the component looks like the last screenshot', async () => {
        sclCheckbox.disabled = true;

        await timeout(200);
        await visualDiff(sclCheckbox, `nullable/disabled`);
      });

      it('when clicked on the nullSwitch looks like the last screenshot', async () => {
        await sendMouse({ type: 'click', position: [380, 20] }); // focus input

        await timeout(200);
        await visualDiff(sclCheckbox, `nullable/nullSwitch toggled`);
      });
    });

    describe('with defaultValue set', () => {
      let sclCheckbox: SclCheckbox;

      beforeEach(async () => {
        sclCheckbox = await fixture(
          html`<scl-checkbox
            nullable
            label="label"
            .value=${null}
          ></scl-checkbox>`
        );
        document.body.prepend(sclCheckbox);
      });

      afterEach(() => {
        if (sclCheckbox) sclCheckbox.remove();
      });

      it('with defaultValue set looks like the last screenshot', async () => {
        await timeout(200);

        await visualDiff(sclCheckbox, `nullable/indicates null value`);
      });
    });
  });
});
