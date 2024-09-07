/*************************************************************************
    Copyright 2024  HALCYON CYBERNETICS

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
**************************************************************************/
window.addEventListener('load', function() {
    const savedText = localStorage.getItem('markdown-input');
    if (savedText) {
        document.getElementById('markdown-input').value = savedText;
        updatePreview();
    }
});

document.getElementById('markdown-input').addEventListener('input', function() {
    const inputText = this.value;
    localStorage.setItem('markdown-input', inputText);
    updatePreview();
});

function updatePreview() {
    const inputText = document.getElementById('markdown-input').value;
    const html = marked.parse(inputText);
    document.getElementById('markdown-preview').innerHTML = html;
    document.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightElement(block);
    });
}

document.getElementById('toggle-layout').addEventListener('click', function() {
    const editor = document.querySelector('.editor');
    const preview = document.querySelector('.preview');
    
    if (editor.style.order === '2') {
        editor.style.order = '1';
        preview.style.order = '2';
        document.querySelector('button').textContent = 'Switch to Left Preview';
    } else {
        editor.style.order = '2';
        preview.style.order = '1';
        document.querySelector('button').textContent = 'Switch to Right Preview';
    }
});
