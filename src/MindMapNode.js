import React from 'react';
import cx from 'classnames';

export default function MindMapNode({ level, label, val }) {
  return (
    <div
      xmlns="http://www.w3.org/1999/xhtml"
      className={cx(
        'mind-map-node',
        level === 0 && 'magenta',
        level === 1 && 'violet',
        level === 2 && 'blue',
        level >= 3 && 'turquoise',
        val === 3 && 'large',
        val === 2 && 'medium',
        val === 1 && 'small',

      )}
    >
      <div>{label}</div>
    </div>
  );
}
