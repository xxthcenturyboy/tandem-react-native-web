import React from 'react';
import R from 'res/R';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components/native';


type Props = {
  iconName: string;
  badgeCount: number;
  iconColor: string;
  iconSize: number;
}

type State = {}

export default class IconWithBadge extends React.Component<Props, State> {
  render() {
    const { iconName, iconSize, iconColor } = this.props;
    const badgeCount = this.props.badgeCount > 99 ? '99+' : this.props.badgeCount;
    return (
      <IconWrapper>
        <MaterialIcon name={iconName} size={iconSize} color={iconColor} />
        {badgeCount > 0 && (
          <Badge>
            <Count>{badgeCount}</Count>
          </Badge>
        )}
      </IconWrapper>
    );
  }
}

const IconWrapper = styled.View`
  margin-top: 5;
  margin-bottom: 5;
  margin-left: 5;
  margin-right: 5;
  width: 24;
  height: 24;
`;

const Badge = styled.View`
  position: absolute;
  left: 13;
  top: -6;
  background-color: ${R.colors.red};
  border-radius: 17;
  min-width: 17;
  height: 17;
  padding-horizontal: 4;
  justify-content: center;
  align-items: center;
`;

const Count = styled.Text`
  font-family: ${R.fonts.proximanova700};
  color: ${R.colors.white};
  font-size: 11;
  font-weight: bold;
  text-align: center;
`;
