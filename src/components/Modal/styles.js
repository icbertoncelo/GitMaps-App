import styled from 'styled-components/native';

export const Container = styled.View`
  background: transparent;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const Content = styled.View`
  background: #fff;
  border-radius: 4px;
  padding: 10px 20px;
  width: 80%;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
`;

export const UserTextInput = styled.TextInput`
  align-self: stretch;
  border-color: #ddd;
  border-radius: 4px;
  border-width: 1px;
  color: #999;
  font-size: 16px;
  margin-bottom: 10px;
  padding: 5px;
`;

export const Error = styled.Text`
  color: #e37a7a;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
`;

export const Actions = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const CancelButton = styled.TouchableOpacity`
  background-color: #ddd;
  border-radius: 4px;
  padding: 5px 10px;
  align-items: center;
  flex: 1;
  margin-right: 5px;
`;

export const SaveButton = styled.TouchableOpacity`
  background-color: #9dca83;
  border-radius: 4px;
  padding: 5px 10px;
  align-items: center;
  flex: 1;
`;

export const ActionText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;
