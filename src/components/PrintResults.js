import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Results from './Results';

class ComponentToPrint extends React.Component {
    render() {
      return (
          <Results />
      )
    }
  }

const PrintResults = () => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });

  return (
    <div>

    <ComponentToPrint ref={componentRef} />
    <button onClick={handlePrint}>Print this out!</button>
      
    </div>
  );
};

export default PrintResults
