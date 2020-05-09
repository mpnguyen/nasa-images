/**
 *
 * Asynchronously loads the component for ImageItem
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
