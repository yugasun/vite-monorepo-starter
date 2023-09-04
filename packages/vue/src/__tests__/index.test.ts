/**
 * @vitest-environment happy-dom
 */
import { h } from 'vue';
import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';

import { VmsComponent } from '../VmsComponent';
import { nextTick } from 'vue';

describe('vue test', () => {
    it('should be ok', () => {
        expect(VmsComponent).toBe(VmsComponent);
    });

    it('should render with default props', () => {
        const wrapper = mount(VmsComponent, {
            props: {},
        });
        expect(wrapper.html()).toContain('Hello World!');
    });

    it('should render with custom props', () => {
        const wrapper = mount(VmsComponent, {
            props: {
                msg: 'Hello Vms!',
            },
        });
        expect(wrapper.text()).toContain('Hello Vms!');
    });

    // FIXME: button click test is not working
    // it('button click', async () => {
    //     const wrapper = mount(VmsComponent);
    //     const button = wrapper.find('button');
    //     await button.trigger('click');
    //     expect(wrapper.find('p').text()).toContain('Result: 2');
    // });
});
