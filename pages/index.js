import styled from "styled-components";
import { compose } from "redux";
import { connect } from "react-redux";

import { Col, Row, Typography } from "antd";

import action from "../redux/dashApp/action";

const Title = styled(Typography.Text)`
  font-family: "Gothic A1", sans-serif;
  font-size: 50px;
  color: ${({ theme, type }) =>
    type ? theme.colors[type] : theme.colors.text};
  font-weight: 800;
  margin-bottom: 6px;
`;

const Text = styled(Typography.Text)`
  font-family: ${({ code }) =>
    code ? "Source Code Pro, monospace" : "Raleway, sans-serif"};
  color: ${({ theme, type }) =>
    type ? theme.colors[type] : theme.colors.text};
`;

const Span = styled.span`
  font-family: ${({ code }) =>
    code ? "Source Code Pro, monospace" : "Raleway, sans-serif"};
  color: ${({ theme, type }) =>
    type ? theme.colors[type] : theme.colors.text};
`;

const Home = () => {
  return (
    <Row justify="center" style={{ height: "100vh" }}>
      <Col span={24} style={{ textAlign: "center", margin: "auto 0px" }}>
        <Title>
          Welcome to <Title type="primary">My Site</Title>
        </Title>
        <br />
        <Text style={{ fontSize: 24 }}>
          We are currently working on a awesome
        </Text>{" "}
        <Text code={true} style={{ fontSize: 24 }}>
          new{" "}
          <Span code={true} style={{ fontSize: 24 }} type="primary">
            Site()
          </Span>
          ;
        </Text>
      </Col>
    </Row>
  );
};

const mapStateToProps = (state) => {
  return {
    dashApp: state.dashApp,
  };
};

const mapDispatchToProps = {
  changeTheme: action.changeTheme,
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(Home);
