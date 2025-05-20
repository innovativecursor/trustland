import React from 'react'

interface ContactUsButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode
  href?: string
}

const ContactUsButton: React.FC<ContactUsButtonProps> = ({
  children,
  href = '#_',
  className = '',
  ...props
}) => {
  return (
    <a href={href} className={`relative inline-block text-lg group ${className}`} {...props}>
      <span className="relative z-10 block w-full px-6 py-3 overflow-hidden text-[12px] font-light leading-tight tracking-wider text-white transition-colors duration-300 ease-out border-2 border-[#339438] rounded-xl group-hover:text-black">
        <span className="absolute inset-0 w-full h-full rounded-lg bg-[#339438]"></span>

        {/* Preserve your original animation */}
        <span className="absolute left-0 top-0 w-[200%] h-[200%] -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-white group-hover:-rotate-180 ease"></span>

        {/* Long text now adjusts correctly */}
        <span className="relative block text-center px-2">{children}</span>
      </span>
    </a>
  )
}

export default ContactUsButton
