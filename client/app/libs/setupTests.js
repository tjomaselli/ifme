import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });

const context = require.context('../components', true, /\.spec\.(js|jsx)$/);
console.log("FUCK MY LIFE", context);
context.keys().forEach(context);