import { Box, Divider } from "@mui/material"

export const ListItemDivider = () => {
    return(
        <Box sx={{ '&:active': {cursor: 'none'}, display: 'flex', justifyContent: 'center'}}>
            <Divider sx={{ '&:active': {cursor: 'none'}, width: '150px'}}/>
        </Box>
    )
}

export default ListItemDivider
