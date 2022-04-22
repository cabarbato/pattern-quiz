import { render, mount } from '@testing-library/react';
import Home from './Home';
import Quiz from '../views/Quiz';

test('renders the quiz', () => {
  render(<Home />);
  const component = mount(<Quiz />);
  expect(component).toBeInTheDocument();
});
