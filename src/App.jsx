import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { Toaster } from "react-hot-toast"

import GlobalStyles from "./styles/GlobalStyles"
import Dashboard from "./pages/Dashboard"
import Cabins from "./pages/Cabins"
import NewUsers from "./pages/NewUsers"
import Settings from "./pages/Settings"
import Bookings from "./pages/Bookings"
import Account from "./pages/Account"
import Login from "./pages/Login"
import Checkin from "./pages/Checkin"
import PageNotFound from "./pages/PageNotFound"
import AppLayout from "./ui/AppLayout"
import Booking from "./pages/Booking"
import ProtectedRoute from "./ui/ProtectedRoute"
import { DarkModeProvider } from "./context/DarkModeContext.jsx"

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 0
		}
	}
})

const router = createBrowserRouter([
	{
		element: (
			<ProtectedRoute>
				<AppLayout />
			</ProtectedRoute>
		),

		errorElement: <PageNotFound />,
		children: [
			{ path: "/", element: <Navigate replace to="dashboard" /> },
			{ path: "/dashboard", element: <Dashboard /> },
			{ path: "/bookings", element: <Bookings /> },
			{ path: "/bookings/:bookingId", element: <Booking /> },
			{ path: "/checkin/:bookingId", element: <Checkin /> },
			{ path: "/cabins", element: <Cabins /> },
			{ path: "/users", element: <NewUsers /> },
			{ path: "/settings", element: <Settings /> },
			{ path: "/account", element: <Account /> }
		]
	},
	{ path: "login", element: <Login /> }
])

export default function App() {
	return (
		<DarkModeProvider>
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
							backgroundColor: "var(--color-grey-0)",
							color: "var(--color-grey-700)",
							textAlign: "center"
						}
					}}
				/>
			</QueryClientProvider>
		</DarkModeProvider>
	)
}
