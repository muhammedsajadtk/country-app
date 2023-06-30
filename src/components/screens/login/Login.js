import React, { useState } from "react";
import styled from "styled-components";
import SocialMedia from "../../includes/SocialMedia";
import { Link } from "react-router-dom";

function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const [isChecked, setChecked] = useState(false);

	return (
		<LoginContainer>
			<div className="wrapper">
				<Container>
					<LeftDiv>
						<Heading>Sign In</Heading>
						<CreateDiv>
							<SubHeading>New user?</SubHeading>
							<CreateLink>Create an account</CreateLink>
						</CreateDiv>
						<LoginForm>
							<Input
								value={username}
								onChange={(e) => {
									setUsername(e.target.value);
								}}
								type="text"
								placeholder="Username or email"
							/>
							<Input
								type="password"
								value={password}
								onChange={(e) => {
									setPassword(e.target.value);
								}}
								placeholder="Password"
							/>
							<CheckBoxDiv>
								<CheckBox
									onClick={() => {
										setChecked(!isChecked);
									}}
								>
									{isChecked && (
										<Tick
											src={
												require("./../../../assets/icons/tick.svg")
													.default
											}
											alt="icon"
										/>
									)}
								</CheckBox>
								<CheckBoxLabel>Keep me signed in</CheckBoxLabel>
							</CheckBoxDiv>

							<LoginButton to="/country">Sign In</LoginButton>
						</LoginForm>

						<ExternalContainer>
							<ExternalLink>
								<Line />

								<SecondaryHeading>
									Or Sign In With
								</SecondaryHeading>

								<Line />
							</ExternalLink>
							<SocialMedia />
						</ExternalContainer>
					</LeftDiv>
					<RightDiv>
						<ImageDiv>
							<Image
								src={require("./../../../assets/images/login.png")}
								alt="image"
							/>
						</ImageDiv>
					</RightDiv>
				</Container>
			</div>
		</LoginContainer>
	);
}

export default Login;

const LoginContainer = styled.div`
	padding: 40px;
	display: flex;
	justify-content: center;
	flex-direction: column;
	/* height: ${(props) => (props.height ? `${props.height}px` : "100vh")}; */
	min-height: 100vh;
`;
const Container = styled.div`
	display: flex;
	align-items: start;
	justify-content: space-between;
	@media screen and (max-width: 768px) {
		justify-content: center;
	}
`;
const LeftDiv = styled.div`
	width: 70%;
	padding: 60px 80px;
	@media screen and (max-width: 1024px) {
		padding: 40px 60px;
		/* width: 100%; */
	}
	@media screen and (max-width: 768px) {
		padding: 0;
		width: 100%;
	}
`;
const Heading = styled.h2`
	font-family: "NotoSans-Bold";
	color: #3d3d3d;
	font-size: 32px;
`;
const CreateDiv = styled.div`
	display: flex;
	align-items: center;
	margin: 15px 0 20px;
`;
const SubHeading = styled.h4`
	font-family: "NotoSans-Medium";
	margin-right: 5px;
	font-size: 16px;
	color: #3d3d3d;

	@media screen and (max-width: 380px) {
		/* flex-direction: column;
		align-items: start; */
		font-size: 15px;
	}
`;
const CreateLink = styled.a`
	font-size: 16px;
	font-family: "NotoSans-Medium";
	color: #587fff;
	&:hover {
		text-decoration: underline;
		cursor: pointer;
	}
	@media screen and (max-width: 380px) {
		font-size: 15px;
	}
`;

const LoginForm = styled.div``;
const Input = styled.input`
	height: 48px;
	padding: 0 12px;
	border: 2px solid #3d3d3d;
	font-size: 16px;
	display: block;
	margin-bottom: 15px;
	color: #3d3d3d;
	font-family: "NotoSans-Regular";
	width: 50%;
	box-sizing: border-box;

	&:last-child {
		margin-bottom: 0px;
	}

	&::placeholder {
		color: #3d3d3d;
		font-family: "NotoSans-Regular";
	}

	@media screen and (max-width: 1024px) {
		width: 70%;
	}
	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;
const CheckBoxDiv = styled.div`
	display: flex;
	align-items: center;
	margin: 20px 0;
`;
const CheckBox = styled.div`
	border: 2px solid #000;
	height: 28px;
	width: 28px;
	margin-right: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	&:hover {
		border-color: #3d3d3d;
	}
`;

const Tick = styled.img`
	height: 28px;
	width: 28px;
`;
const CheckBoxLabel = styled.label`
	color: #3d3d3d;
	font-family: "NotoSans-Regular";
	font-size: 15px;
`;
const LoginButton = styled(Link)`
	background: #3c3c3c;
	color: #fff;
	font-family: "NotoSans-Medium";
	font-size: 16px;
	height: 48px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	width: 50%;
	&:hover {
		background-color: #000;
	}
	@media screen and (max-width: 1024px) {
		width: 70%;
	}
	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

const ExternalContainer = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	align-items: center;

	@media screen and (max-width: 1024px) {
		width: 70%;
	}
	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;
const ExternalLink = styled.div`
	margin: 50px 0 30px;
	display: flex;
	align-items: center;
	justify-content: center;
	@media screen and (max-width: 480px) {
		margin: 40px 0 20px;
	}
`;
const SecondaryHeading = styled.h4`
	font-family: "NotoSans-Medium";
	font-size: 14px;
	font-weight: 600;
	margin: 0 10px;
	text-align: center;
`;

const Line = styled.div`
	background-color: #cfcfcf;
	height: 2px;
	width: 60px;
	@media screen and (max-width: 480px) {
		width: 40px;
	}
`;

const RightDiv = styled.div`
	width: 30%;
	display: flex;
	align-items: center;
	justify-content: center;
	@media screen and (max-width: 768px) {
		display: none;
	}
`;
const ImageDiv = styled.div``;
const Image = styled.img``;
