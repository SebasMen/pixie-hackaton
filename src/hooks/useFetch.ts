import { useState, useEffect, useRef } from 'react';
export const useFetch = <T>(
  url: string,
  data: RequestInit = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', Authorization: localStorage.getItem('token') || '' },
  }
) => {
  // Hooks
  const [state, setState] = useState<FetchState<T>>({
    loading: false,
  });
  const [update, setUpdate] = useState(true);
  const isMounted = useRef(true);
  const requestData = useRef(data);
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
    // Prevent fetching if not url is provided
    if (!url) return;
    const fetchData = async () => {
      // Set loading
      setState({ loading: true });
      try {
        // Get response
        const response = await fetch(url, { ...requestData.current });
        const result: T = await response.json();
        // Check status
        if (response.status !== 200) throw new Error((result as any)?.message || 'Error interno');
        // Only update if rendered
        if (isMounted.current) setState({ loading: false, response: result });
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
  }, [url, update, isLoading]);
  return { ...state, doUpdate };
};

interface FetchState<T> {
  loading: boolean;
  response?: T;
  err?: any;
}

export default useFetch;
