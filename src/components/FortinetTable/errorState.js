'use strict';

const errorState = (props) => {
  const {handleErrorState} = props;
    return (
      <div>
        {'Please reload the page'}
        <button onClick={handleErrorState}>
          Click Here
        </button>
      </div>
    )
}

export default errorState;
