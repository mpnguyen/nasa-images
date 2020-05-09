/**
 *
 * Asynchronously loads the component for All
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
