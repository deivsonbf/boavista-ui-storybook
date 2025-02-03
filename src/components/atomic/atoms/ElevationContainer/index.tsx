
import { ReactNode } from 'react';
import { Elevation } from './style.styled';
import { ElevationVariant } from '../../../../utils/types/Types';


interface ElevationContainerProps {
  children?: ReactNode
  variant?: ElevationVariant
}


const ElevationContainer = ({ children, variant }: ElevationContainerProps) => {
  return (
    <Elevation 
      $variant={variant} 
    >
      {children}
    </Elevation>
  )
}

export default ElevationContainer