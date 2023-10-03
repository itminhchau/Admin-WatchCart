import { Controller } from 'react-hook-form';

import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
// import style manually
import 'react-markdown-editor-lite/lib/index.css';

// Register plugins if required
// MdEditor.use(YOUR_PLUGINS_HERE);

// Initialize a markdown parser

InputFieldMarkDown.propTypes = {};

function InputFieldMarkDown({ name, label, form }) {
  const mdParser = new MarkdownIt(/* Markdown-it options */);
  const handleEditor = (html) => {
    const cleanedHtml = html.replace(/\n/g, '');
    form.setValue('description', cleanedHtml);
  };
  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field }) => {
        return (
          <MdEditor
            value={field.value}
            style={{ height: '500px' }}
            renderHTML={(text) => mdParser.render(text)}
            onChange={({ html, text }) => {
              field.onChange(text);
              handleEditor(html);
            }}
          />
        );
      }}
    />
  );
}

export default InputFieldMarkDown;
