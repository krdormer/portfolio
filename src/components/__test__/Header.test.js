import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import Header from '../header/header.component';

describe('<Header />', () => {
    const wrapper = shallow(<Header />);
    it('renders 5 links', () => {
        expect(wrapper.find(Link).length).toEqual(5)
    });
})