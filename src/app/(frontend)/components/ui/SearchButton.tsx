import React from 'react'

interface LiquidHoverButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode
  href?: string
}

const LiquidHoverButton: React.FC<LiquidHoverButtonProps> = ({
  children,
  href = '#_',
  className = '',
  ...props
}) => {
  return (
    <a href={href} className={`relative inline-block text-lg group ${className}`} {...props}>
      <span className="relative z-10 block px-14 py-2 overflow-hidden text-[15px] font-medium leading-tight tracking-wider text-white transition-colors duration-300 ease-out border-2 border-[#339438] rounded-xl group-hover:text-black">
        <span className="absolute inset-0 w-full h-full px-14 py-2 rounded-lg bg-[#339438]"></span>
        <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-white group-hover:-rotate-180 ease"></span>
        <span className="relative">{children}</span>
      </span>
      <span
        className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-white rounded-lg group-hover:mb-0 group-hover:mr-0"
        data-rounded="rounded-lg"
      ></span>
    </a>
  )
}

export default LiquidHoverButton
