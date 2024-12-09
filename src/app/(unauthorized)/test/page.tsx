'use client';

import Editor from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
import { useEffect, useRef } from 'react';

const STORAGE_KEY = '__content';

export default function TestPage() {
  const editorRef = useRef<any>(null);

  useEffect(() => {
    const editor = new Editor({
      el: document.querySelector('#editor'),
      previewStyle: 'vertical',
      height: '500px',
      initialValue: 'placeholder',
      theme: 'light',
    });

    editorRef.current = editor;
  }, []);

  //   useEffect(() => {
  //     const storageValue = window.localStorage.getItem(STORAGE_KEY);

  //     if (!storageValue) {
  //       return;
  //     }

  //     const flag = window.confirm(
  //       '저장된 데이터가 존재합니다. 불러오시겠습니까?',
  //     );

  //     if (!flag) {
  //       return;
  //     }

  //     editorRef.current?.setMarkdown(storageValue);
  //   }, []);

  return (
    <div>
      <div style={{ display: 'flex', gap: 12 }}>
        <button
          style={{ width: 120, height: 50, backgroundColor: 'hotpink' }}
          onClick={() => {
            window.localStorage.setItem(
              STORAGE_KEY,
              editorRef.current?.getMarkdown(),
            );
            window.alert('저장되었습니다.');
          }}
        >
          저장하기
        </button>
        <button
          style={{ width: 120, height: 50, backgroundColor: 'hotpink' }}
          onClick={() =>
            editorRef.current?.setMarkdown(
              window.localStorage.getItem(STORAGE_KEY),
            )
          }
        >
          불러오기
        </button>
      </div>
      <div id="editor" />
    </div>
  );
}
