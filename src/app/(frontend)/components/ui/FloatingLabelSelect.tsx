'use client'

import React, { useState, FocusEvent } from 'react'
import { motion } from 'framer-motion'

const FloatingLabelSelect = ({
  label,
  children,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement> & { label: string }) => {
  const [focused, setFocused] = useState(false)

  const handleFocus = (e: FocusEvent<HTMLSelectElement>) => {
    setFocused(true)
    props.onFocus?.(e)
  }

  const handleBlur = (e: FocusEvent<HTMLSelectElement>) => {
    if (!e.target.value) setFocused(false)
    props.onBlur?.(e)
  }

  const isActive = focused || props.value || props.defaultValue

  return (
    <div className="w-full mb-2">
      {/* Label outside the input, with animated color */}
      <motion.label
        initial={{ color: '#6b7280' }}
        animate={{ color: isActive ? '#16a34a' : '#00000' }}
        transition={{ duration: 0.2 }}
        className="block text-[12px] font-medium mb-1"
      >
        {label}
      </motion.label>

      <select
        {...props}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="border border-gray-300 rounded-lg px-4 py-3 text-sm w-full focus:outline-none focus:ring-2 focus:ring-[#339438]"
      >
        {children}
      </select>
    </div>
  )
}

export default FloatingLabelSelect
