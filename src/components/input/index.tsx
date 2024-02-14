import React from "react";

interface InputProps {
  Icon?: any;
  onChange: (event: any) => void;
  placeHolder: string;
  type: string;
  name: string;
  id: string;
  isAuthInput?: boolean;
  hasIconPrefix?: boolean;
  hasIconPostfix?: boolean;
  value?: string;
  hasError?: boolean;
  isSearchInput?: boolean;
}
const Input = ({ Icon, onChange, type, placeHolder, name, id, value, isAuthInput=false, hasIconPrefix=false, hasIconPostfix=false, hasError=false, isSearchInput=false }: InputProps) => {
  const authInputClass = `w-full border-b ${hasError ? 'border-red-500': 'border-horizontal-line-color'} focus:border-primary-color focus:outline-none pl-10 pb-4 placeholder:text-secondary-text-color placeholder:text-sm`
  const otherInputClass = `${`w-full ${isSearchInput ? 'bg-input-bg': 'bg-white'} py-2 focus:outline-none px-5 rounded-3xl placeholder:text-xs text-secondary`}`
  return (
    <div className="w-full flex relative">
      { hasIconPrefix ? <img src={Icon} alt={name} className="absolute" /> : null }
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeHolder}
        onChange={onChange}
        className={isAuthInput ? authInputClass: otherInputClass}
        value={value}
      />
      {hasIconPostfix ? <img src={Icon} alt={name} className="absolute right-4 top-3 w-4" /> : null}
    </div>
  );
};

export default Input;
