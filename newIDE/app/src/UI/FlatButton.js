// @flow
import * as React from 'react';
import MUIFlatButton from 'material-ui/FlatButton';

// We support a subset of the props supported by Material-UI v0.x FlatButton
// They should be self descriptive - refer to Material UI docs otherwise.
type Props = {|
  label: React.Node,
  onClick: ?() => void,
  primary?: boolean,
  disabled?: boolean,
  keyboardFocused?: boolean,
  fullWidth?: boolean,
  icon?: React.Node,
  style?: {|
    marginTop?: number,
    marginBottom?: number,
    marginLeft?: number,
    marginRight?: number,
    margin?: number,
  |},
  target?: '_blank',
|};

/**
 * A "flat" button based on Material-UI button.
 */
export default class FlatButton extends React.Component<Props, {||}> {
  render() {
    return <MUIFlatButton {...this.props} />;
  }
}