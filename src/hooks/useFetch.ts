import { useState, useEffect, useRef } from 'react';
export const useFetch = <T>(method: () => Promise<T>) => {
  // Hooks
  const [state, setState] = useState<FetchState<T>>({
    loading: false,
  });
  const [update, setUpdate] = useState(true);
  const isMounted = useRef(true);
  const isLoading = useRef(state.loading);
  // Update handler
  const doUpdate = () => setUpdate(old => !old);
  // Update loading state
  if (isLoading.current !== state.loading) isLoading.current = state.loading;
  // Fetch
  useEffect(() => {
    isMounted.current = true;
    // Prevent changes if loading
    if (isLoading.current) return;
    // Prevent fetching if method is not provided
    if (!method) return;
    const fetchData = async () => {
      // Set loading
      setState({ loading: true });
      try {
        // Get response
        const response = await method();
        // Only update if rendered
        if (isMounted.current) setState({ loading: false, response });
      } catch (err) {
        if (isMounted.current) setState({ loading: false, err: (err as Error).message });
      }
    };

    // Do fetch
    fetchData();
    // Advise component disposed
    return () => {
      isMounted.current = false;
    };
  }, [method, update, isLoading]);
  return { ...state, doUpdate };
};

interface FetchState<T> {
  loading: boolean;
  response?: T;
  err?: any;
}
export default useFetch;
