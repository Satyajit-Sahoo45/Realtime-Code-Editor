import React, { useEffect } from 'react';
import Codemirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/closebrackets';

const Editor = () => {
    useEffect(() => {
        const editor = Codemirror.fromTextArea(document.getElementById('realtimeEditor'), {
            mode: { name: 'javascript', json: true },
            theme: 'dracula',
            autoCloseTags: true,
            autoCloseBrackets: true,
            lineNumbers: true,
        });

        return () => {
            editor.toTextArea();
        };
    }, []);

    return (
        <textarea id='realtimeEditor'>
        </textarea>
    );
};

export default Editor;
