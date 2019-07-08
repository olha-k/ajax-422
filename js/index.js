//document.querySelector('.timestamp').innerText = (new Date()).toLocateTimeString();

document.querySelector('.ajax-html').addEventListener('click', getHtmlAjax);

const XHR_STATE_DONE = 4;
const HTTP_STATUS_CODE = 200;

function getHtmlAjax() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XHR_STATE_DONE &&
            xhr.status === HTTP_STATUS_CODE) {
           document.querySelector('.html-conatainer').innerHTML = xhr.responseText;
        }
    }
    xhr.open('GET','client-data.html', true);
    xhr.send();
}

document.querySelector('.fetch-html').addEventListener('.click', fetchHTML);

function fetchHTML() {
    fetch('.client-data.html')
        .then( response => response.text() )
        .then( html => document.querySelector('.html-conatainer').innerHTML = html );
}
