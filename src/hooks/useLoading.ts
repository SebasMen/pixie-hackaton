import useAppContext from './useAppContext';

export const useLoading = () => {
  // Hooks
  const { updateContext } = useAppContext();

  // Set loading true
  const loadingTrue = () => {
    updateContext(old => ({ ...old, showLoading: true }));
  };

  // Set loading true
  const loadingFalse = () => {
    updateContext(old => ({ ...old, showLoading: false }));
  };

  // Set loading true
  const loadingDeterminate = (loadState: boolean) => {
    updateContext(old => ({ ...old, showLoading: loadState }));
  };

  return { loadingTrue, loadingFalse, loadingDeterminate };
};
