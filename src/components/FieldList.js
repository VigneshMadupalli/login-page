import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetFields } from '../redux/actions';

const FieldList = () => {
  const fields = useSelector(state => state.form.fields);
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(resetFields());
  };

  // Placeholder function for Confirm button
  const handleConfirm = () => {
    alert('Confirm action to be implemented');
  };

  return (
    <div>
      <h3>List of Added Fields</h3>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Field Name</th>
            <th>Field Type</th>
            <th>Field Data Type</th>
            <th>Field Validations</th>
            <th>Field Data</th>
            <th>Is Mandatory</th>
          </tr>
        </thead>
        <tbody>
          {fields.map((field, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{field.fieldDisplayName}</td>
              <td>{field.fieldType}</td>
              <td>{field.fieldDataType}</td>
              <td>{field.fieldMaxLength ? `Max Length: ${field.fieldMaxLength}` : 'N/A'}</td>
              <td>{field.fieldData}</td>
              <td>{field.isMandatory ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleConfirm}>Confirm</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default FieldList;
