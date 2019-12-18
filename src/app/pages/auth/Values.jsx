import * as React from 'react';

export default ({ value }) => {
  return (
      <div style={ styles.main }>
        <p style={ styles.p }>Values</p>
        <pre style={ styles.text }>{ JSON.stringify(value, 0, 2) }</pre>
      </div>
  );
}

const styles = {
  main: {
    border: '1px solid #ccc',
    backgroundColor: 'rgba(204, 204, 204)',
    borderRadius: '4px',
    width: '80%',
    marginLeft: '7%',
    marginTop: '10px',
    padding: '6px 10px',
    textAlign: 'left',
  },
  p: {
    color: '#3f996f',
    margin: 0,
  },
  text: {
    color: 'rgb(75, 75, 75)',
    fontSize: '10px',
    lineHeight: '12px',
  }
};
