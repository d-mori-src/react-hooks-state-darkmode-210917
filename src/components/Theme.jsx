import { useEffect, useContext } from 'react';
import { ThemeContext } from '../store/Theme';

export const Theme = () => {
    const { state, dispatch } = useContext(ThemeContext);

    useEffect(
        () => {
            document.body.style.backgroundColor = state.color.back;
            document.body.style.color = state.color.text;
        },
        [state.color]
    );

    const resetColor = () => {
        dispatch({
            type: 'reset-color'
        });
    }

    const setColor = (color) => () => {
        dispatch({
            type: 'change-color',
            payload: {
                color: { name: color.name, text: color.text, back: color.back }
            }
        });
    }

    return (
        <>
            <ul>
                <li>テーマ: { state.color.name }</li>
                <li>文字色: { state.color.text }</li>
                <li>背景色: { state.color.back }</li>
            </ul>
            <button onClick={resetColor}>reset</button>
            <button onClick={setColor({
                name: 'Dark', text: '#ffffff', back: '#333333'
            })}>dark</button>
        </>
    );
}
