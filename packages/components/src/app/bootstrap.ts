import bootstrapListeners from 'components/src/lib/utils/bootstrap-listeners';

export {
  bootstrap
};

///////////////

/**
 * NOTE: Only put things here that should run once and only once, regardless
 * of logins / logouts. Do not rely on this to re-run when user logs out.
 *
 * Also, there is no guarantee of internet connection being available here, so
 * don't put anything here that relies on internet either.
 */
async function bootstrap(): Promise<void> {

  bootstrapListeners();

}