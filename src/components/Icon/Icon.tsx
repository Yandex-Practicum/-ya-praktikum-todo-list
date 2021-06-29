import React, {FC, useMemo} from 'react';

import {cn} from '../../utils/classnames';

import './Icon.css';

type Props = {
    src: string;
    className?: string;
    alt?: string;
}

const Icon: FC<Props> = ({src, className = '', alt}) => {
    const classNames = useMemo(() => {
        return cn('icon', className);
    }, [className]);

    return (
        <img
            src={src}
            className={classNames}
            alt={alt}
        />
    );
};
export default Icon;
