import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addField,resetFields } from '../redux/actions';

const FieldConfigPage = () => {
    const [employmentStatus, setEmploymentStatus] = useState('');
    const [fieldType, setFieldType] = useState('');
    const [fieldDisplayName, setFieldDisplayName] = useState('');
    const [fieldDataType, setFieldDataType] = useState('');
    const [fieldMaxLength, setFieldMaxLength] = useState('');
    const [fieldData, setFieldData] = useState('');
    const [isMandatory, setIsMandatory] = useState(false);
    const [dropdownOptions, setDropdownOptions] = useState('');
    const [minDate, setMinDate] = useState('');
    const [maxDate, setMaxDate] = useState('');
    const dispatch = useDispatch();

    const handleAddField = () => {
        if ((fieldType === 'text-box' || fieldType === 'dropdown') && isMandatory && !fieldData) {
            alert('This field is mandatory.');
            return;
        }

        const newField = {
            employmentStatus,
            fieldType,
            fieldDisplayName,
            fieldDataType,
            fieldMaxLength,
            fieldData,
            isMandatory,
            dropdownOptions: dropdownOptions.split(',').map(option => option.trim()),
            minDate,
            maxDate
        };

        dispatch(addField(newField));
        setFieldType('');
        setFieldDisplayName('');
        setFieldDataType('');
        setFieldMaxLength('');
        setFieldData('');
        setIsMandatory(false);
        setDropdownOptions('');
        setMinDate('');
        setMaxDate('');
    };
    const handleReset = () => {
        // Resetting local state
        setEmploymentStatus('');
        setFieldType('');
        setFieldDisplayName('');
        setFieldDataType('');
        setFieldMaxLength('');
        setFieldData('');
        setIsMandatory(false);
        setDropdownOptions('');
        setMinDate('');
        setMaxDate('');

        // Dispatching action to reset Redux state
        dispatch(resetFields());
    };

    return (
        <div>
            <select value={employmentStatus} onChange={(e) => setEmploymentStatus(e.target.value)}>
                <option value="">Select Employment Status</option>
                <option value="student">Student</option>
                <option value="self-employed">Self-Employed</option>
                <option value="business">Business</option>
            </select>

            {employmentStatus && (
                <>
                    <select value={fieldType} onChange={(e) => setFieldType(e.target.value)}>
                        <option value="">Select Field Type</option>
                        <option value="text-box">Text Box</option>
                        <option value="dropdown">Dropdown</option>
                        <option value="date">Date</option>
                    </select>
                    
                    <input 
                        type="text" 
                        placeholder="Field Display Name" 
                        value={fieldDisplayName} 
                        onChange={(e) => setFieldDisplayName(e.target.value)} 
                    />

                    {fieldType === 'text-box' && (
                        <>
                            <select value={fieldDataType} onChange={(e) => setFieldDataType(e.target.value)}>
                                <option value="">Field Data Type</option>
                                <option value="string">String</option>
                                <option value="number">Number</option>
                            </select>
                            <input 
                                type="number" 
                                placeholder="Max Length Allowed" 
                                value={fieldMaxLength} 
                                onChange={(e) => setFieldMaxLength(e.target.value)} 
                            />
                            <input 
                                type={fieldDataType === 'number' ? 'number' : 'text'} 
                                placeholder="Field Data" 
                                value={fieldData} 
                                onChange={(e) => setFieldData(e.target.value)} 
                            />
                        </>
                    )}

                    {fieldType === 'dropdown' && (
                        <input 
                            type="text" 
                            placeholder="Dropdown Options (comma separated)" 
                            value={dropdownOptions} 
                            onChange={(e) => setDropdownOptions(e.target.value)} 
                        />
                    )}

                    {fieldType === 'date' && (
                        <>
                            <input 
                                type="date" 
                                placeholder="Min Date" 
                                value={minDate} 
                                onChange={(e) => setMinDate(e.target.value)} 
                            />
                            <input 
                                type="date" 
                                placeholder="Max Date" 
                                value={maxDate} 
                                onChange={(e) => setMaxDate(e.target.value)} 
                            />
                            <input 
                                type="date" 
                                placeholder="Field Data" 
                                value={fieldData} 
                                onChange={(e) => setFieldData(e.target.value)} 
                                min={minDate}
                                max={maxDate}
                                required={isMandatory}
                            />
                        </>
                    )}

                    <select value={isMandatory.toString()} onChange={(e) => setIsMandatory(e.target.value === 'true')}>
                        <option value="false">Not Mandatory</option>
                        <option value="true">Mandatory</option>
                    </select>

                    <button onClick={handleAddField}>Confirm</button>
                </>
            )}
            <button onClick={handleAddField}>Add Field</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};

export default FieldConfigPage;
