import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Messanger from "./components/Messanger";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Messanger />
    </QueryClientProvider>
  );
}

export default App;
