import React from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-python';
import 'prismjs/themes/prism-tomorrow.css';

interface CodeSnippetProps {
  language: string;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({language }) => {
  const code = `
    from libemg.datasets import *

    # Evaluate Classification Datasets (Linear Discriminant Analysis)
    c_ds = list(get_dataset_list().keys())
    evaluate('LDA', 200, 50, ['MAV','ZC','SSC','WL'], included_datasets=c_ds, output_file='Results/lda.pkl')

    # Evaluate Regression Datasets (Linear Regressor)
    r_ds = list(get_dataset_list('REGRESSION').keys())
    evaluate('LR', 200, 50, ['MAV','ZC','SSC','WL'], included_datasets=r_ds, output_file='Results/lr.pkl', regression=True)
  `;
  const highlightedCode = Prism.highlight(code, Prism.languages[language], language);
  return (
    <div id="examples" style={{
        width: '80%',
        margin: '40px auto',
        textAlign: 'center'
      }}>
        <h1 style={{ float: 'left' }}>Example Code</h1>
        <br/>
        <pre style={{ textAlign: 'left', clear: 'both' }} className={`language-${language}`}>
          <code
            className={`language-${language}`}
            dangerouslySetInnerHTML={{ __html: highlightedCode }}
          />
        </pre>
      </div>
  );
};

export default CodeSnippet;