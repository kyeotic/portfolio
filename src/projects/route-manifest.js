import JsTestLite from 'projects/jsTestLite';
import Swc from 'projects/swc';

let makeRoute = (route, title, component, type) => ({route, title, component, type});

const projects = [
	makeRoute('jsTestLite', 'JS Test Lite', JsTestLite, 'personal'),
	makeRoute('swc', 'ShiftWise Connect', Swc, 'professional'),
];

export default projects;