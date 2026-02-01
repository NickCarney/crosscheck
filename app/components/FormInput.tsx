import React from "react";

interface FormInputProps {
  type?: "text" | "email" | "tel";
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
  placeholder?: string;
  pattern?: string;
  accentColor?: "blue" | "burgundy";
}

interface FormTextareaProps {
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
  required?: boolean;
  placeholder?: string;
  rows?: number;
  accentColor?: "blue" | "burgundy";
}

interface FormCheckboxProps {
  id: string;
  name?: string;
  label: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  accentColor?: "blue" | "burgundy";
}

const accentColors = {
  blue: {
    label: "text-[#1e3a5f]",
    ring: "focus:ring-[#1e3a5f]",
    checkbox: "text-[#1e3a5f]",
  },
  burgundy: {
    label: "text-[#8b2346]",
    ring: "focus:ring-[#8b2346]",
    checkbox: "text-[#8b2346]",
  },
};

export function FormInput({
  type = "text",
  name,
  label,
  value,
  onChange,
  disabled = false,
  required = false,
  placeholder,
  pattern,
  accentColor = "blue",
}: FormInputProps) {
  const colors = accentColors[accentColor];

  return (
    <div>
      <label className={`block text-xs ${colors.label} mb-2`}>
        {label} {required && <span className="text-gray-500">(required)</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        placeholder={placeholder}
        pattern={pattern}
        className={`w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 ${colors.ring} focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed`}
      />
    </div>
  );
}

export function FormTextarea({
  name,
  label,
  value,
  onChange,
  disabled = false,
  required = false,
  placeholder,
  rows = 5,
  accentColor = "blue",
}: FormTextareaProps) {
  const colors = accentColors[accentColor];

  return (
    <div>
      <label className={`block text-xs ${colors.label} mb-2`}>
        {label} {required && <span className="text-gray-500">(required)</span>}
      </label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        placeholder={placeholder}
        rows={rows}
        className={`w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 ${colors.ring} focus:border-transparent transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed`}
      />
    </div>
  );
}

export function FormCheckbox({
  id,
  name,
  label,
  checked,
  onChange,
  disabled = false,
  accentColor = "blue",
}: FormCheckboxProps) {
  const colors = accentColors[accentColor];

  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className={`w-4 h-4 ${colors.checkbox} border-gray-300 rounded ${colors.ring} disabled:opacity-50 disabled:cursor-not-allowed`}
      />
      <label htmlFor={id} className={`text-sm ${colors.label}`}>
        {label}
      </label>
    </div>
  );
}
