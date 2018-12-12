import React from 'react';
import cx from 'classnames';
import styles from './PreviewPane.scss';

const PreviewPane = ({markdown, title}) => (
            <div className={cx('preview-pane')}>
                <h1 className={cx('title')}>
                    제목
                </h1>
                <div>
                    내용
                </div>
            </div>
        )

export default PreviewPane;


