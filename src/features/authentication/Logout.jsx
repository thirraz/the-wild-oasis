import ButtonIcon from "../../ui/ButtonIcon"
import SpinnerMini from "../../ui/SpinnerMini"

import { useLogout } from "./useLogout"

import { HiArrowRightOnRectangle } from "react-icons/hi2"

export default function Logout() {
	const { logout, isLoading } = useLogout()

	return (
		<ButtonIcon disabled={isLoading} onClick={logout}>
			{!isLoading ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
		</ButtonIcon>
	)
}
