import styled from "styled-components"

import { useRecentbookings } from "./useRecentBookings"
import { useRecentStays } from "./useRecentStays"
import { useCabins } from "../cabins/useCabins"

import Spinner from "../../ui/Spinner"
import Stats from "./Stats"

const StyledDashboardLayout = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-template-rows: auto 34rem auto;
	gap: 2.4rem;
`

export default function DashboardLayout() {
	const { bookings, isLoading: isLoadingBookings } = useRecentbookings()
	const {
		stays,
		confirmedStays,
		isLoading: isLoadingStays,
		numDays
	} = useRecentStays()

	const { cabins, isLoading: isLoadingCabins } = useCabins()

	if (isLoadingBookings || isLoadingStays || isLoadingCabins)
		return <Spinner />

	console.log(bookings)

	return (
		<StyledDashboardLayout>
			<Stats
				bookings={bookings}
				confirmedStays={confirmedStays}
				numDays={numDays}
				cabinCount={cabins.length}
			/>
			<div>Today's activity</div>
			<div>Chart stay durations</div>
			<div>Chart sales</div>
		</StyledDashboardLayout>
	)
}
