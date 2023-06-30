import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";

function Loader() {
	return (
		<MainContainer>
			<>
				<LoaderDiv>
					<LoadingGif
						src={require("./../../assets/images/loading-buffering.gif")}
						alt="Loading"
					/>
				</LoaderDiv>
			</>
		</MainContainer>
	);
}

export default Loader;

const MainContainer = styled.div`
	padding: 20px;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: scroll;
`;
const LoaderDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
`;
const LoadingGif = styled.img`
	display: inline-block;
	width: 70px;
	opacity: 0.5;

	@media (max-width: 980px) {
		width: 50px;
	}
`;
