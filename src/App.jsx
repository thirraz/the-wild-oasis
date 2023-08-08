import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

import GlobalStyles from "./styles/GlobalStyles"
import Dashboard from "./pages/Dashboard"
import Cabins from "./pages/Cabins"
import Users from "./pages/Users"
import Settings from "./pages/Settings"
import Bookings from "./pages/Bookings"
import Account from "./pages/Account"
import Login from "./pages/Login"
import PageNotFound from "./pages/PageNotFound"
import AppLayout from "./ui/AppLayout"
import { Toaster } from "react-hot-toast"

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 60 * 1000
		}
	}
})

const router = createBrowserRouter([
	{
		element: <AppLayout />,
		errorElement: <PageNotFound />,
		children: [
			{ path: "/", element: <Navigate replace to="dashboard" /> },
			{ path: "/dashboard", element: <Dashboard /> },
			{ path: "/bookings", element: <Bookings /> },
			{ path: "/cabins", element: <Cabins /> },
			{ path: "/users", element: <Users /> },
			{ path: "/settings", element: <Settings /> },
			{ path: "/account", element: <Account /> }
		]
	},
	{ path: "login", element: <Login /> }
])

export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools initialIsOpen={false} />
			<GlobalStyles />
			<RouterProvider router={router} />

			<Toaster
				position="top-center"
				gutter={12}
				containerStyle={{ margin: "8px" }}
				toastOptionns={{
					success: {
						duration: 3000
					},
					error: {
						duration: 5000
					},
					style: {
						fontSize: "16px",
						maxWidth: "500px",
						padding: "16px 24px",
						backgroundColor: "var(--color-gre-"
				}}
			/>
		</QueryClientProvider>
	)
}
