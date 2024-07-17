import { createContext } from "react";
import PropTypes from 'prop-types'
export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {
    const contextValue = {

    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
StoreContext.propTypes = {
    category: PropTypes.string.isRequired,
    setCategory: PropTypes.func.isRequired,
  }

export default StoreContextProvider