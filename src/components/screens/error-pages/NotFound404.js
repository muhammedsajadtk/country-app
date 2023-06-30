import React from "react";
import styled from "styled-components";

function NotFound404() {
	return (
		<Div>
			<div className="wrapper">
				<Container>
					<img
						src={require(`./../../../assets/images/404.png`)}
						alt="404 Error"
						style={{ width: "30%" }}
					/>
					<H2>Page Not Found</H2>
					<P>Oops! The page you are looking for does not exist.</P>
				</Container>
			</div>
		</Div>
	);
}

export default NotFound404;

const Div = styled.div`
	background-color: #fff;
`;
const Container = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	height: 100%;
	min-height: 100vh;
`;
const H2 = styled.h2`
	color: #3d3d3d;
	font-size: 24px;
	font-family: "NotoSans-Medium";
	text-align: center;

	@media screen and (max-width: 480px) {
		font-size: 18px;
	}
`;
const P = styled.p`
	font-family: "NotoSans-Regular";
	font-size: 16px;
	color: #8b8b8b;
	text-align: center;

	@media screen and (max-width: 480px) {
		font-size: 14px;
		width: 70%;
	}
`;
