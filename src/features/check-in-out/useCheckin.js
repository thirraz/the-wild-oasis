import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateBooking } from "../../services/apiBookings"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

export function useCheckin() {
	const queryClient = useQueryClient()
	const navigate = useNavigate()

	const { mutate: checkin, isLoading: isCheckingIn } = useMutation({
		mutationFn: ({ bookingId, breakfast }) =>
			updateBooking(bookingId, {
				status: "checked-in",
				isPaid: true,
				...breakfast
			}),

		// this data was returned from updateBooking function
		onSuccess: (data) => {
			toast.success(`Booking #${data.id} successsfully checked in`)
			queryClient.invalidateQueries({ active: true })
			navigate("/")
		},

		onError: () => toast.error("There was an error while checking in")
	})

	return { checkin, isCheckingIn }
}
