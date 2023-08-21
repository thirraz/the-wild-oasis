import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { useUser } from "../features/authentication/useUser"
import { useEffect } from "react"

import Spinner from "../ui/Spinner"

const FullPage = styled.div`
	height: 100vh;
	background: var(--color-grey-50);
	display: flex;
	align-items: center;
	justify-content: center;
`

export default function ProtectedRoute({ children }) {
	// 1. load the authenticated user
	const { isLoading, isAuthenticated } = useUser()
	const navigate = useNavigate()

	// 2. if there is NO authenticated user and there is no isLoading property, redirect to the /login
	useEffect(() => {
		if (!isAuthenticated && !isLoading) navigate("/login")
	}, [isAuthenticated, isLoading, navigate])

	// 3. while loading, show a spinner
	if (isLoading)
		return (
			<FullPage>
				<Spinner />
			</FullPage>
		)

	// 4. if there is a user, render the app
	if (isAuthenticated) return children
}
