import { shallow } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../../App';

describe('<App />', () => {
    const wrapper = shallow(
        <Router>
            <App />
        </Router>
    );
    it('renders <App /> component', () => {
        expect(wrapper.find(App).length).toEqual(1);
    });
})