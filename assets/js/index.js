"use strict";

const PATTERN = /<a.*?href=(?:(?:"(.*?)")|(?:'(.*?)')).*?>(.*?)<\/a\s*?>/igm;

const inputPageElem = document.querySelector("textarea[name='userHtml']");

const tableBodyElem = document.getElementById("dataTable");

const inputSubmitElem = document.getElementsByTagName('input[type="submit"]');

const formElem = document.getElementsByTagName("form")[0];

const tableBodyElem = document.getElementsByTagName("tbody")

formElem.onsubmit = onFormSubmit;

function onFormSubmit(event) {

    const result = this.elements["userHtml"].value.match(PATTERN);
    tableBodyElem.innerHTML = "";
    if (Array.isArray(result)){

        result.forEach(
            link =>{
                const [, linkValue, linkName] = link.match(PATTERN_LOCAL);
                tableBodyElem.appendChild(createTableRow(linkName, linkValue))
            }
        )
    }
    return false;
}

function createTableRow(linkName, linkValue) {
    const trElem = document.createElement("tr");

    const tdName = document.createElement("td");
    trElem.appendChild(
        (document.createElement(td).innerText= linkName)
    );
    trElem.appendChild(
        (document.createElement(td).innerText= linkValue)
    );

}
