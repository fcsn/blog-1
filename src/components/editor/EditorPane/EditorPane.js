import React from 'react';
import cx from 'classnames';
import styles from './EditorPane.scss'

class EditorPane extends React.Component {
    render() {
        return (
            <div className={cx('editor-pane')}>
                <input className={cx('title')}
                       placeholder="제목을 입력하세요"
                       name='title'/>
                <div className={cx('code-editor')}></div>
                <div className={cx('tags')}>
                    <div className={cx('description')}>태그</div>
                    <input name='tags'
                           placeholder="태그를 입력하세요 (쉼표로 구분)"/>
            </div>
            </div>
        );
    }
}

export default EditorPane;
