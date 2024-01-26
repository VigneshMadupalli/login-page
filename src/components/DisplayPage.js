import React from 'react';
import { useSelector } from 'react-redux';

const DisplayPage = () => {
    const fields = useSelector(state => state.form.fields);

    const renderField = (field) => {
        switch (field.fieldType) {
            case 'text':
                return <input type="text" placeholder={field.fieldName} required={field.fieldValidation === 'required'} />;
            case 'dropdown':
                // Implement dropdown field
                return (
                    <select required={field.fieldValidation === 'required'}>
                        {/* Options should be provided according to your requirements */}
                        <option value="">{field.fieldName}</option>
                    </select>
                );
            case 'date':
                return <input type="date" required={field.fieldValidation === 'required'} />;
            default:
                return null;
        }
    };

    return (
        <div>
            {fields.map((field, index) => (
                <div key={index}>
                    {renderField(field)}
                </div>
            ))}
        </div>
    );
};

export default DisplayPage;
