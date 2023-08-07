import styled from "styled-components"

const StyledHeader = styled.header`
	background: var(--color-grey-100);
	padding: 1.2rem 4.8rem;
	border-bottom: 1px solid var(--color-grey-100);
`

export default function Header() {
	return <StyledHeader>Header</StyledHeader>
}
