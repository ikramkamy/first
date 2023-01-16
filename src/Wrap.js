import MenuItem from '@mui/material/MenuItem';
import ContentCut from '@mui/icons-material/ContentCut';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
const Wrap=(props)=>{
const {plant}=props;
    return( <MenuItem>
        <ListItemIcon>
       </ListItemIcon>
        <ListItemText>{plant}</ListItemText>
        <Typography variant="body2" color="text.secondary">
        
        </Typography>
      </MenuItem>)
}
export default Wrap; 