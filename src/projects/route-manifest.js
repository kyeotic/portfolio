import JsTestLite from 'projects/jsTestLite';
import Swc from 'projects/swc';
import AffinityWeb from 'projects/affinity-web';
import Affinity from 'projects/affinity';
import ChaosCrusade from 'projects/chaos-crusade';
import DurandalGrid from 'projects/durandal-grid';
import Esp from 'projects/esp';
import MasteringKnockout from 'projects/mastering-knockout';
import MightyNurse from 'projects/mighty-nurse';
import NwMaico from 'projects/nw-maico';
import Portfolio from 'projects/portfolio';
import Sprintr from 'projects/sprintr';

let makeRoute = (route, title, component, type) => ({route, title, component, type});

const projects = [
	makeRoute('jsTestLite', 'JS Test Lite', JsTestLite, 'personal'),
	makeRoute('chaos-crusade', 'Chaos Crusade', ChaosCrusade, 'personal'),
	makeRoute('durandal-grid', 'Durandal Grid', DurandalGrid, 'personal'),
	makeRoute('mighty-nurse', 'MightyNurse', MightyNurse, 'personal'),
	makeRoute('portfolio', 'Portfolio', Portfolio, 'personal'),
	makeRoute('sprintr', 'Sprintr', Sprintr, 'personal'),
	makeRoute('nw-maico', 'NwMaico', NwMaico, 'professional'),
	makeRoute('swc', 'ShiftWise Connect', Swc, 'professional'),
	makeRoute('affinity-web', 'Affinity Web', AffinityWeb, 'professional'),
	makeRoute('affinity', 'Affinity', Affinity, 'professional'),
	makeRoute('esp', 'Esp', Esp, 'professional'),
	makeRoute('mastering-knockout', 'Mastering Knockout', MasteringKnockout, 'publications')
];

export default projects;