import React from "react";
import styled from "styled-components";
import { navData } from "./Constant";

//redux
import { useDispatch, useSelector } from "react-redux";
import { updateRegion } from "../../redux/RegionSlice";

function NavBar({ setIsNavBar }) {
	const dispatch = useDispatch();

	const selectedRegion = useSelector((state) => state.region.selectedRegion);

	const handleToggle = (val) => {
		dispatch(updateRegion(val));
	};

	return (
		<BackContainer>
			<Overlay
				onClick={() => {
					setIsNavBar(false);
				}}
			/>
			<Modal>
				<Container>
					<MainContainer>
						<IconDiv>
							<Icon
								onClick={() => {
									setIsNavBar(false);
								}}
								src={
									require("./../../assets/icons/close.svg")
										.default
								}
								alt="icon"
							/>
						</IconDiv>

						<TabView>
							{navData.map((item) => (
								<Item
									className={
										item.value === selectedRegion.value
											? "selected"
											: ""
									}
									key={item.id}
									onClick={() => {
										handleToggle(item);
										setTimeout(() => {
											setIsNavBar(false);
										}, 200);
									}}
								>
									{item.name}
								</Item>
							))}
						</TabView>
					</MainContainer>
				</Container>
			</Modal>
		</BackContainer>
	);
}

export default NavBar;

const BackContainer = styled.div`
	position: fixed;
	transition: 0.3s;
	width: 100%;
	height: 100vh;
	left: 0;
	top: 0;
	z-index: 1000;
`;
const Overlay = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	width: 100%;
	cursor: pointer;
	height: 100vh;
	z-index: 1002;
	background: rgba(0, 0, 0, 0.2);
	backdrop-filter: blur(3px);
`;
const Modal = styled.div`
	margin: 0 auto;
	background: #fff;
	position: absolute;
	right: 0;
	top: 0;
	width: 70%;
	transition: 0.5s;
	z-index: 1003;
	animation: slideIn 0.2s;
	@keyframes slideIn {
		0% {
			right: -600px;
		}
	}
`;
const Container = styled.div`
	overflow: scroll;
	padding: 40px 20px;

	::-webkit-scrollbar {
		display: none;
	}
`;

const MainContainer = styled.div`
	height: 100vh;
	cursor: auto;
	overflow: scroll;
	::-webkit-scrollbar {
		display: none;
	}
`;
const IconDiv = styled.div`
	display: flex;
	justify-content: flex-end;
	width: 100%;
`;
const Icon = styled.img`
	cursor: pointer;
	height: 24px;
	width: 24px;
`;

const TabView = styled.div`
	display: flex;
	/* align-items: center; */
	flex-direction: column;
	@media screen and (max-width: 480px) {
		/* display: none; */
	}
`;
const Item = styled.h4`
	/* margin-right: 30px; */
	padding: 5px 0;
	font-family: "NotoSans-Regular";
	font-size: 16px;
	color: #8b8b8b;
	border-bottom: 2px solid #fff;

	&.selected {
		color: #3e3e3e;
		text-decoration: underline;
	}

	&:hover {
		cursor: pointer;
		color: #3e3e3e;
		/* border-bottom: 2px solid #3e3e3e; */
	}

	&:last-child {
		margin-right: 0px;
	}
`;
