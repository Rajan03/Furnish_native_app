import styled from "styled-components/native";
import {normalize} from "../../../utils";

export const ScreenContainer = {
    flex: 1,
    backgroundColor: "#fff",
}
export const ImageContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const ImageStyles = styled.Image`
  flex: 1;
`;

export const ActionsContainer = styled.View`
  flex: 1;
  padding: 20px;
  justify-content: space-evenly;
`;

export const HeaderText = styled.Text`
  font-size: ${normalize(30)}px;
  font-weight: 600;
  text-align: center;
`;
export const OrSeparator = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: ${normalize(10)}px 0;
`;
export const OrSeparatorLine = styled.View`
  flex: 1;
  height: 1px;
  background-color: #babba1;
`;
export const RedirectText = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: ${normalize(10)}px 0;
`;
