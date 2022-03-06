import { Box, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    component: {
        margin: 50,
        '& > *': {
            marginTop: 50
        }
    },
  
})

const UserProfile = () => {
    const classes = useStyles();
    return (
        <Box className={classes.component}>
            <Typography variant="h4">User Profile</Typography>
        </Box>
    )
}

export default UserProfile;