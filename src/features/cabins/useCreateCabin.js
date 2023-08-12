import { QueryClient, useMutation } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { createEditCabin } from "../../services/apiCabins"

export function useCreateCabin() {
	const queryClient = new QueryClient()

	const { mutate: createCabin, isLoading: isCreating } = useMutation({
		mutationFn: createEditCabin,
		onSuccess: () => {
			toast.success("New cabin successfuly created")
			queryClient.invalidateQueries({ queryKey: ["cabins"] })
		},
		onError: (err) => toast.error(err.message)
	})

	return { createCabin, isCreating }
}
