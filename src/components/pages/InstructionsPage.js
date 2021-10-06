import * as React from 'react';
import { useHistory } from 'react-router';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { Link } from 'react-router-dom';

const steps = [
    {
        label: 'Select campaign settings',
        description: 'For each ad campaign that you create.',
        image: '/static/imgs/logo.png'
    },
    {
        label: 'Create an ad group',
        description: 'An ad group contains one or more ads which ',
        image: '/static/imgs/jean.jpg'
    },
    {
        label: 'Create an ad',
        description: 'Try out different ad text to see what brings in the most customers.',
        image: '/static/imgs/logo.png',
    },
];

const InstructionsPage = () => {
    const history=useHistory();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = steps.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', 
        justifyContent: 'center', minHeight: '100vh', backgroundColor:'white'}}>
            <Box sx={{
                maxWidth: 400, flexGrow: 1, display: 'flex',
                justifyContent: 'center', flexDirection: 'column', alignItems: 'center'
            }}>
                <Box sx={{ position: 'absolute', bottom: '400px' }} p={2}>
                    <Typography sx={{ textAlign: 'center', p: 1 }} variant="h5">
                        {steps[activeStep].label}
                    </Typography>

                    <Typography variant='subtitle1' sx={{ textAlign: 'center',color:'#333'}}>
                        {steps[activeStep].description}
                    </Typography>
                </Box>
                <img src={steps[activeStep].image} alt='step' style={{ width: '128px', height: '128px', position: 'absolute', bottom: '200px' }} />

                <MobileStepper variant='dots' steps={maxSteps} position="static" activeStep={activeStep}
                    nextButton={
                        <Button size="small" onClick={handleNext}  >
                            {
                                activeStep === maxSteps - 1? <Link to="/" style={{textDecoration:'none'}}>GOT IT</Link>: <>Next <KeyboardArrowRight /></>
                            }
                           
                        </Button>
                    }
                    backButton={
                        <Button size="small" onClick={handleBack} >
                            {
                            activeStep === 0?
                            <Link to="/" style={{textDecoration:'none'}}>SKIP</Link>
                            :
                            <><KeyboardArrowLeft /> Back</>
                            }
                            
                        </Button>
                    }
                    sx={{ width: "100%", position: 'fixed', bottom: 0 }}
                />
            </Box>

        </div>

    );
}
export default InstructionsPage;