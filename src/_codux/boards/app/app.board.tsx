import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <div className={'bg-green-400'} />,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1080,
        canvasWidth: 1583,
        canvasHeight: 1032,
        windowBackgroundColor: '#402d2d',
    },
    isSnippet: false,
});
