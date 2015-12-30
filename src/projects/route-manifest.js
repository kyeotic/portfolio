import JsTestLite from 'projects/jsTestLite';

let makeRoute = (route, title, component, type) => ({route, title, component, type});

const projects = [
	makeRoute('jsTestLite', 'JS Test Lite', JsTestLite, 'personal')
];

export default projects;