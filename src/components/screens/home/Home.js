import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Loader from "../../includes/Loader";
import SocialMedia from "../../includes/SocialMedia";
import NavBar from "../../includes/NavBar";
import { navData } from "./../../includes/Constant";

//redux
import { useDispatch, useSelector } from "react-redux";
import { updateRegion } from "../../../redux/RegionSlice";

function Home() {
	const [isLoading, setIsLoading] = useState(true);
	const [countryData, setCountryData] = useState([]);

	const [isNavBar, setIsNavBar] = useState(false);

	const dispatch = useDispatch();

	const selectedRegion = useSelector((state) => state.region.selectedRegion);

	const handleToggle = (val) => {
		dispatch(updateRegion(val));
	};

	const getCountryDetails = () => {
		let url =
			selectedRegion.value === "all"
				? `https://restcountries.com/v2/all?fields=name,region,flag`
				: `https://restcountries.com/v2/region/${selectedRegion.value}?fields=name,region,flag`;

		setIsLoading(true);
		axios
			.get(url, {})
			.then(function (response) {
				const { data } = response;
				setCountryData(data);
				setIsLoading(false);
			})
			.catch(function (error) {
				setIsLoading(false);
				alert(error.message);
			});
	};

	useEffect(() => {
		getCountryDetails();
	}, [selectedRegion]);

	function CountryCard({ item }) {
		return (
			<ContryDiv>
				<Left>
					<FladDiv>
						<Flag src={item.flag} alt="flag" />
					</FladDiv>
				</Left>
				<Right>
					<Title>{item.name}</Title>
					<Description>{item.region}</Description>
				</Right>
			</ContryDiv>
		);
	}

	return (
		<LoginContainer>
			<div className="wrapper">
				<Container>
					<Header>
						<HeaderLeft>Countries</HeaderLeft>
						<HeaderRight>
							<TabView>
								{navData.map((item) => (
									<Item
										onClick={() => {
											handleToggle(item);
										}}
										className={
											item.value === selectedRegion.value
												? "selected"
												: ""
										}
										key={item.id}
									>
										{item.name}
									</Item>
								))}
							</TabView>
							<TabResponsive
								onClick={() => {
									setIsNavBar(true);
								}}
							>
								<Icon
									src={
										require("./../../../assets/icons/navbar.svg")
											.default
									}
									alt="icon"
								/>
							</TabResponsive>
						</HeaderRight>
					</Header>
					<Body>
						{!isLoading ? (
							<CountryContainer>
								{countryData.map((item, i) => (
									<CountryCard key={i} item={item} />
								))}
							</CountryContainer>
						) : (
							<LoaderDiv>
								<Loader />
							</LoaderDiv>
						)}
					</Body>
					<SocialMediaDiv>
						<SocialMedia />
					</SocialMediaDiv>
					<BottomLinkDiv>
						<BottomLink>Example@email.com</BottomLink>
						<BottomLink>
							Copyright © 2020 Name. All rights reserved.
						</BottomLink>
					</BottomLinkDiv>
				</Container>
			</div>
			{isNavBar && <NavBar setIsNavBar={setIsNavBar} />}
		</LoginContainer>
	);
}

export default Home;

const LoginContainer = styled.div`
	padding: 40px 0;
	min-height: 100vh;
`;
const Container = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	height: 100%;
`;
const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
const HeaderLeft = styled.h2`
	color: #3d3d3d;
	font-size: 24px;
	font-family: "NotoSans-Medium";
`;
const HeaderRight = styled.div``;
const TabView = styled.div`
	display: flex;
	align-items: center;
	@media screen and (max-width: 480px) {
		display: none;
	}
`;
const Item = styled.h4`
	margin-right: 30px;
	padding: 5px 0;
	font-family: "NotoSans-Regular";
	font-size: 16px;
	color: #8b8b8b;
	border-bottom: 2px solid #fbfbfb;

	&.selected {
		color: #3e3e3e;
		border-bottom: 2px solid #3e3e3e;
	}

	&:hover {
		cursor: pointer;
		color: #3e3e3e;
		border-bottom: 2px solid #3e3e3e;
	}

	&:last-child {
		margin-right: 0px;
	}
`;
const TabResponsive = styled.div`
	display: none;
	@media screen and (max-width: 480px) {
		display: block;
	}
`;
const Icon = styled.img`
	cursor: pointer;
	height: 24px;
	width: 24px;
`;
const Body = styled.div`
	min-height: calc(100vh - 232px);
`;
const CountryContainer = styled.div`
	padding: 30px 0;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 20px;
	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`;
const ContryDiv = styled.div`
	padding: 10px 15px;
	display: flex;
	border: 2px solid #3e3e3e;
	box-shadow: rgba(0, 0, 0, 0.1) 5px 5px 0.2px;

	@media screen and (max-width: 480px) {
		padding: 10px;
	}
`;
const Left = styled.div``;
const FladDiv = styled.div`
	height: 100px;
	width: 130px;
	margin-right: 10px;
	@media screen and (max-width: 480px) {
		height: 60px;
		width: 100px;
	}
`;
const Flag = styled.img`
	height: 100%;
	width: 100%;
`;

const Right = styled.div``;
const Title = styled.h3`
	font-size: 24px;
	color: #3d3d3d;
	font-family: "NotoSans-Medium";

	@media screen and (max-width: 768px) {
		font-size: 20px;
	}
	@media screen and (max-width: 480px) {
		font-size: 16px;
	}
`;
const Description = styled.p`
	font-size: 16px;
	color: #6f6f6f;
	@media screen and (max-width: 480px) {
		font-size: 13px;
	}
`;
const LoaderDiv = styled.div``;
const SocialMediaDiv = styled.div`
	display: flex;
	justify-content: center;
`;

const BottomLinkDiv = styled.div`
	height: 50px;
	margin-top: 20px;
`;
const BottomLink = styled.p`
	text-align: center;
	font-size: 13px;
	color: #3d3d3d;
`;
