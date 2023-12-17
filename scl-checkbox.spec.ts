/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-extraneous-dependencies */

import { expect, fixture, html } from '@open-wc/testing';
import { sendKeys, sendMouse } from '@web/test-runner-commands';

import { SinonSpy, spy } from 'sinon';

import './scl-checkbox.js';
import type { SclCheckbox } from './scl-checkbox.js';

function timeout(ms: number) {
  return new Promise(res => {
    setTimeout(res, ms);
  });
}

describe('Custom SCL related checkbox', () => {
  describe('with nullable option being activated', () => {
    describe('and value set not to null', () => {
      let sclCheckbox: SclCheckbox;
      let event: SinonSpy;

      beforeEach(async () => {
        sclCheckbox = await fixture(
          html`<scl-checkbox nullable .value=${'true'}></scl-checkbox>`
        );

        event = spy();
        window.addEventListener('input', event);
      });

      it('triggers input event with clicked nullSwitch', async () => {
        await sendMouse({ type: 'click', position: [30, 20] });

        expect(event).to.have.been.calledOnce;
      });

      it('return null with clicked nullSwitch', async () => {
        expect(sclCheckbox.value).to.equal('true');

        await sendMouse({ type: 'click', position: [770, 20] });
        await sclCheckbox.updateComplete;

        expect(sclCheckbox.value).to.be.null;
      });

      it('saved the value on nulledSwitch toggle', async () => {
        expect(sclCheckbox.value).to.equal('true');

        await sendMouse({ type: 'click', position: [770, 20] });
        await sclCheckbox.updateComplete;

        await sendMouse({ type: 'click', position: [770, 20] });
        await sclCheckbox.updateComplete;

        expect(sclCheckbox.value).to.equal('true');
      });

      it('always return true on reportValidity', () =>
        expect(sclCheckbox.reportValidity()).to.be.true);

      it('always return true on checkValidity', () =>
        expect(sclCheckbox.checkValidity()).to.be.true);
    });

    describe('and value set to null', () => {
      let sclCheckbox: SclCheckbox;
      let event: SinonSpy;

      beforeEach(async () => {
        sclCheckbox = await fixture(
          html`<scl-checkbox
            nullable
            .value=${null}
            defaultValue="true"
          ></scl-checkbox>`
        );

        event = spy();
        window.addEventListener('input', event);
      });

      it('triggers input event with clicked nullSwitch', async () => {
        await sendMouse({ type: 'click', position: [770, 20] });
        await sclCheckbox.updateComplete;

        expect(event).to.have.been.calledOnce;
      });

      it('return non null value with clicked nullSwitch', async () => {
        expect(sclCheckbox.value).to.be.null;

        await sendMouse({ type: 'click', position: [770, 20] });
        await sclCheckbox.updateComplete;

        expect(sclCheckbox.value).to.equal('false');
      });

      it('always return true on reportValidity', () =>
        expect(sclCheckbox.reportValidity()).to.be.true);

      it('always return true on checkValidity', () =>
        expect(sclCheckbox.checkValidity()).to.be.true);
    });
  });

  describe('with nullable option being deactivated', () => {
    describe('and value set not to null', () => {
      let sclCheckbox: SclCheckbox;
      let event: SinonSpy;

      beforeEach(async () => {
        sclCheckbox = await fixture(
          html`<scl-checkbox .value=${'true'}></scl-checkbox>`
        );

        event = spy();
        window.addEventListener('input', event);
        // window.addEventListener('change', event);
      });

      it('triggers input event with clicked nullSwitch', async () => {
        await sendMouse({ type: 'click', position: [30, 20] });

        expect(event).to.have.been.calledOnce;
      });

      it('return false with un-checked checkbox', async () => {
        expect(sclCheckbox.value).to.equal('true');

        await sendMouse({ type: 'click', position: [30, 20] });
        await timeout(200);

        expect(sclCheckbox.value).to.equal('false');
      });

      it('touch-target being set to flex:auto', async () => {
        expect(sclCheckbox.value).to.equal('true');

        await sendMouse({ type: 'click', position: [500, 20] });
        await sclCheckbox.updateComplete;

        expect(sclCheckbox.value).to.equal('false');
      });

      it('always return true on reportValidity', () =>
        expect(sclCheckbox.reportValidity()).to.be.true);

      it('always return true on checkValidity', () =>
        expect(sclCheckbox.checkValidity()).to.be.true);
    });

    describe('and value set to null', () => {
      let sclCheckbox: SclCheckbox;
      let event: SinonSpy;

      beforeEach(async () => {
        sclCheckbox = await fixture(
          html`<scl-checkbox
            .value=${null}
            defaultValue="true"
            label="label"
            supportingText="text"
          ></scl-checkbox>`
        );

        event = spy();
        window.addEventListener('input', event);
      });

      it('triggers input event with clicked checkbox', async () => {
        await sendMouse({ type: 'click', position: [300, 20] });
        await sclCheckbox.updateComplete;

        expect(event).to.have.been.calledOnce;
      });

      it('return non null value with clicked nullSwitch', async () => {
        expect(sclCheckbox.value).to.equal('false');

        await sendMouse({ type: 'click', position: [700, 20] });
        await sclCheckbox.updateComplete;

        expect(sclCheckbox.value).to.equal('true');
      });

      it('always return true on reportValidity', () =>
        expect(sclCheckbox.reportValidity()).to.be.true);

      it('always return true on checkValidity', () =>
        expect(sclCheckbox.checkValidity()).to.be.true);
    });
  });
});
