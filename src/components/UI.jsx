import React from 'react';

export const Divider = () => (
    <div className="w-full h-[1px] bg-[#121212]/10 my-8" />
);

export const Button = ({ children, variant = 'outline', className = '', onClick }) => {
    const base = "px-10 py-4 uppercase tracking-[0.2em] text-xs font-sans font-medium transition-all duration-700 relative overflow-hidden group";
    const styles = {
        outline: "border border-[#D4AF37] text-[#121212] hover:text-white",
        solid: "bg-[#D4AF37] text-white border border-[#D4AF37]",
        ghost: "text-[#121212] border-b border-[#121212]/20 hover:border-[#D4AF37] px-0 py-2 hover:pl-4"
    };

    return (
        <button onClick={onClick} className={`${base} ${styles[variant]} ${className}`}>
            <span className="relative z-10 flex items-center gap-2">{children}</span>
            {variant === 'outline' && (
                <div className="absolute inset-0 bg-[#D4AF37] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left ease-out z-0" />
            )}
        </button>
    );
};
