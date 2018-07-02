import { render } from 'inferno';
import PublicUrl from './PublicUrl';

describe('PUBLIC_URL', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<PublicUrl />, div);
  });
});
