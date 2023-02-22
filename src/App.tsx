import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./routes/AppRoutes";

const queryClient = new QueryClient();

const App = () => {
    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <AppRoutes />
            </QueryClientProvider>
        </BrowserRouter>
    );
};

export default App;
