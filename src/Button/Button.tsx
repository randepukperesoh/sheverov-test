import React from "react"
import { IButtonProps } from "../types"
import useThrottle from "../hooks"

export const Button = React.memo(({onClick} :IButtonProps) : JSX.Element => { 
  const throttledCalback = useThrottle(() => onClick(), 300);
  
  console.log('memo')
    return  (
      <button type="button" onClick={throttledCalback}>
        get random user
      </button>
    )
  })