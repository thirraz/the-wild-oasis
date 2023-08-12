import toast from "react-hot-toast"
import { createEditCabin } from "../../services/apiCabins"
import { QueryClient, useMutation } from "@tanstack/react-query"
import { updateSetting as updateSettingApi } from "../../services/apiSettings"

export function useUpdateSetting() {
	const queryClient = new QueryClient()

	const { mutate: updateSetting, isLoading: isUpdating } = useMutation({
		mutationFn: updateSettingApi,
		onSuccess: () => {
			toast.success("Setting successfuly edited")
			queryClient.invalidateQueries({ queryKey: ["settings"] })
		},
		onError: (err) => toast.error(err.message)
	})

	return { updateSetting, isUpdating }
}
