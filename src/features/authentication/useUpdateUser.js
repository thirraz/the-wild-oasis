import toast from "react-hot-toast"
import { QueryClient, useMutation } from "@tanstack/react-query"
import { updateCurrentUser } from "../../services/apiAuth"

export function useUpdateUser() {
	const queryClient = new QueryClient()
	const { mutate: updateUser, isLoading: isUpdating } = useMutation({
		mutationFn: updateCurrentUser,
		onSuccess: ({ user }) => {
			toast.success("User successfully updated")
			// queryClient.setQueryData("user", user)
			queryClient.invalidateQueries({ queryKey: ["user"] })
		},
		onError: (err) => toast.error(err.message)
	})

	return { updateUser, isUpdating }
}
