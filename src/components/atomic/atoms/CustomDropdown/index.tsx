import React, { useState, useRef, useEffect } from 'react';
import { BiChevronDown } from 'react-icons/bi';

export interface Option {
  value: string;
  label: string;
  imageUrl: string;
}

interface SelectWithImagesProps {
  options?: Option[];
  placeholder?: string;
  onChange?: (option: Option) => void;
}

const defaultOptions: Option[] = [
  {
    value: '',
    label: 'Selecione uma opção',
    imageUrl: '/api/placeholder/24/24'
  },
  {
    value: 'brasil',
    label: 'Brasil',
    imageUrl: 'https://i.pinimg.com/736x/18/f2/3b/18f23b0fc5c01e9c31eea318caf5fdb4.jpg'
  },
  {
    value: 'argentina',
    label: 'Argentina', 
    imageUrl: '/api/placeholder/24/24'
  },
  {
    value: 'chile',
    label: 'Chile',
    imageUrl: '/api/placeholder/24/24'
  },
  {
    value: 'uruguai',
    label: 'Uruguai',
    imageUrl: '/api/placeholder/24/24'
  }
];

const SelectWithImages: React.FC<SelectWithImagesProps> = ({
  options = defaultOptions,
  placeholder = "Selecione uma opção",
  onChange
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange?.(option);
  };

  return (
    <div
      ref={dropdownRef}
      style={{
        position: 'relative',
        width: '300px',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%',
          padding: '10px',
          background: 'white',
          border: '1px solid #ddd',
          borderRadius: '6px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          color: 'red'
        }}
        onMouseOver={(e) => {
          (e.target as HTMLButtonElement).style.borderColor = '#3b82f6';
        }}
        onMouseOut={(e) => {
          (e.target as HTMLButtonElement).style.borderColor = '#ddd';
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {selectedOption ? (
            <>
              <img
                src={selectedOption.imageUrl}
                alt={`Ícone ${selectedOption.label}`}
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '4px',
                  objectFit: 'cover'
                }}
              />
              <span>{selectedOption.label}</span>
            </>
          ) : (
            <span style={{ color: '#6b7280' }}>{placeholder}</span>
          )}
        </div>
        <BiChevronDown 
          style={{
            width: '16px',
            height: '16px',
            transition: 'transform 0.2s ease',
            transform: isOpen ? 'rotate(180deg)' : 'none'
          }}
        />
      </button>

      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 4px)',
            left: 0,
            right: 0,
            background: 'white',
            border: '1px solid #ddd',
            borderRadius: '6px',
            maxHeight: '240px',
            overflowY: 'auto',
            zIndex: 1000,
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            color: 'blue'
          }}
        >
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => handleSelect(option)}
              style={{
                padding: '8px 10px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer',
                transition: 'background-color 0.2s ease',
                backgroundColor: selectedOption?.value === option.value ? '#f3f4f6' : 'transparent'
              }}
              onMouseOver={(e) => {
                (e.target as HTMLDivElement).style.backgroundColor = '#f3f4f6';
              }}
              onMouseOut={(e) => {
                (e.target as HTMLDivElement).style.backgroundColor = 
                  selectedOption?.value === option.value ? '#f3f4f6' : 'transparent';
              }}
              role="option"
              aria-selected={selectedOption?.value === option.value}
            >
              <img
                src={option.imageUrl}
                alt={`Ícone ${option.label}`}
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '4px',
                  objectFit: 'cover'
                }}
              />
              <span>{option.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectWithImages;