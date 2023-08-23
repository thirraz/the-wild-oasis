import toast from "react-hot-toast"
import { createEditCabin } from "../../services/apiCabins"
import { QueryClient, useMutation } from "@tanstack/react-query"

export function useEditCabin() {
	const queryClient = new QueryClient()
	const { mutate: editCabin, isLoading: isEditing } = useMutation({
		mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
		onSuccess: () => {
			toast.success("New cabin successfully edited")
			queryClient.invalidateQueries({ queryKey: ["cabins"] })
		},
		onError: (err) => toast.error(err.message)
	})

	return { editCabin, isEditing }
}
