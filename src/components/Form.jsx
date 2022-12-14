import React from 'react'
import {FormControl, InputLabel, Select,MenuItem} from '@mui/material'
import useNews from '../hooks/useNews'


const CATEGORIAS = [
    { value: 'general', label: 'General'},
    { value: 'business', label: 'Negocios'},
    { value: 'entertainment', label: 'Entretenimiento'},
    { value: 'health', label: 'Salud'},
    { value: 'science', label: 'Ciencia'},
    { value: 'sports', label: 'Deportes'},
    { value: 'technology', label: 'Tecnología'},
]



const Form = () => {

    const {category, handleChangeCategory} = useNews()

  return (
    <form>
        <FormControl fullWidth >
            <InputLabel>Category</InputLabel>
            <Select label="Category" onChange={handleChangeCategory} value={category}>
                {CATEGORIAS.map( categoria => (
                    <MenuItem key={categoria.value} value={categoria.value} >
                        {categoria.value}
                    </MenuItem>
                ))}
            </Select>
           

        </FormControl>
    </form>

  )
}

export default Form