import { createRoot } from 'react-dom/client';
import Router from './router';
import './index.scss';

const root = createRoot(document.getElementById('root')!);
root.render(<Router />);
