import { useHistory } from 'react-router';
import { Box } from '@mui/system'
import AppBar from '@mui/material/AppBar';
import { IconButton } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import { useParams } from 'react-router';
import CircularProgress from '@mui/material/CircularProgress';
import { useFetchDocument } from '../../hooks/useFetch';

const NewsDetailsPage = () => {
    const { id } = useParams();
    const history = useHistory();
    const { data: _new, isPending, error } = useFetchDocument('news', id, 500);
    const convertToDateString = (timestemp) => {
        return new Date(timestemp.seconds * 1000).toLocaleString();
    }
    return (
        isPending ?
            <Box sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <CircularProgress />
            </Box>
            :
            _new ?
                <Box sx={{ backgroundColor: 'white' }}>
                    <AppBar position="static" >
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', pl: 1, pr: 1 }}>
                            <IconButton size="large" edge="start" color="inherit" aria-label="open drawer" onClick={() => { history.goBack() }}>
                                <ArrowBackIcon />
                            </IconButton>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', p: 1 }}>
                            <Box>
                                <Typography variant="h6" noWrap component="div">
                                    {_new.title}
                                </Typography>
                            </Box>
                        </Box>

                    </AppBar>
                    <Box>
                        <img src={_new.image} alt="_new image" style={{height: '200px',width:"auto"}}/>
                        <Box sx={{ p: 1 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Typography variant="subtitle2" mb={0} noWrap component="div">
                                    {convertToDateString(_new.date)}
                                </Typography>
                                <Box sx={{ flexGrow: 1 }}></Box>
                                <Typography variant="button" sx={{ backgroundColor: "#c7c1c1", color: 'green' }} p="4px" noWrap component="div" mr={1} mb={0} >
                                    {_new.status}
                                </Typography>
                            </Box>
                            <Divider sx={{ m: 2 }} />
                            <Box>
                                <Typography variant="body1" component="p">
                                    {_new.description}
                                </Typography>
                            </Box>
                           
                        </Box>
                    </Box>
                </Box>
                :
                <></>
    )
}
export default NewsDetailsPage
