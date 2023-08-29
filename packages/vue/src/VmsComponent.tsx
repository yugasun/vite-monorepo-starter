// VmsComponent

import { defineComponent, ref, h } from 'vue';
import { sum, increment } from '@vms/core';

const VmsProps = {
    n: {
        type: Number,
        required: false,
        default: 1,
    },
    msg: {
        type: String,
        required: false,
        default: 'Hello World!',
    },
};

export const VmsComponent = defineComponent({
    name: 'VmsComponent',
    props: VmsProps,
    setup(props) {
        const num = ref<number>(+props.n);

        function incrementN() {
            const res = increment(num.value);
            num.value = res;
        }

        return {
            num,
            incrementN,
        }
    },

    render() {
        return (
            <div class="vite-library-starter">
                <h3>{this.msg}</h3>
                <hr />
                <p>
                    Result: { this.num }
                </p>
                <button type="button" onClick={this.incrementN}>incrementN</button>
                {this.$slots.default?.()}
            </div>
        )
    }
});