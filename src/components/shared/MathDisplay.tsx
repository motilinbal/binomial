import React from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

/**
 * MathDisplay component
 * Renders a LaTeX string as polished math using KaTeX.
 */
const MathDisplay: React.FC<{ latex: string; block?: boolean; className?: string; fontSize?: number }> = ({ latex, block = false, className = '', fontSize }) => {
  let html = '';
  try {
    html = katex.renderToString(latex, {
      throwOnError: false,
      displayMode: block,
      output: 'html',
      strict: false,
    });
  } catch (e) {
    html = `<span style='color: #e57373'>Invalid LaTeX</span>`;
  }
  return (
    <span
      className={className}
      style={{ fontSize: fontSize ?? (block ? 26 : 16), lineHeight: 1.4, color: 'inherit', background: 'none', verticalAlign: 'middle' }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default MathDisplay;
