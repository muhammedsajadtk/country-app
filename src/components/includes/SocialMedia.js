import React from "react";
import styled from "styled-components";

function SocialMedia() {
	return (
		<IconContainer>
			<IconDiv>
				<Icon
					src={require("./../../assets/icons/google.svg").default}
					alt="icon"
				/>
			</IconDiv>
			<IconDiv>
				<Icon
					src={require("./../../assets/icons/facebook.svg").default}
					alt="icon"
				/>
			</IconDiv>
			<IconDiv>
				<Icon
					src={require("./../../assets/icons/linkedin.svg").default}
					alt="icon"
				/>
			</IconDiv>
			<IconDiv>
				<Icon
					src={require("./../../assets/icons/twitter.svg").default}
					alt="icon"
				/>
			</IconDiv>
		</IconContainer>
	);
}

export default SocialMedia;

const IconContainer = styled.div`
	display: flex;
	align-items: center;
`;
const IconDiv = styled.div`
	height: 48px;
	width: 48px;
	border: 1px solid #3c3c3c;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 10px;
	&:last-child {
		margin-right: 0;
	}
	&:hover {
		border-color: #000;
		cursor: pointer;
	}
`;
const Icon = styled.img`
	height: 20px;
	width: 20px;
`;
