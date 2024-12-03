let value;

value = document;

// scripts
value = document.scripts;
value = document.scripts[0];

// links
value = document.links;
value = document.links[document.links.length-1];
value = document.links[document.links.length-1].getAttribute("class");
value = document.links[document.links.length-1].className;
value = document.links[document.links.length-1].getAttribute("href");

// forms
value = document.forms;
value = document.forms.length;
value = document.forms[0];
value = document.forms["form"];
value = document.forms[0].id;
value = document.forms[0].getAttribute("id");
value = document.forms[0].name;
value = document.forms[0].getAttribute("name");
value = document.forms[0].method;


console.log(value);