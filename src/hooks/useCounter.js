import { useState } from "react";

export const useCounter = (props) => {
    const [state, setState] = useState(props);

    function incCount(delta) {
        if (!delta) {
            delta = 1;
        }

        if (state.initialValue + delta >= state.maxValue) {
            return;
        }

        return setState({ ...state, initialValue: state.initialValue + delta })
    };

    function decCount(delta) {
        if (!delta) {
            delta = 1;
        }
        if (state.initialValue - delta <= state.minValue) {
            return;
        }

        return setState({ ...state, initialValue: state.initialValue - delta })
    };


    return { count: state.initialValue, incCount, decCount };
};