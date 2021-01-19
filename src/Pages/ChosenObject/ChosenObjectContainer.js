import { connect } from 'react-redux';

import { getChosenObject } from '../../Store/ActionCreators/ObjectsActionCreators';

import ChosenObject from './ChosenObject';

const mapStateToProps = (state) => ({
  chosenObject: state.chosenObject,
});

export default connect(mapStateToProps, { getChosenObject })(ChosenObject);
