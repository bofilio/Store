import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { storage, db } from '../../../firebase/firebaseConfig';
//-------------------------------------alert severity=(success or info or warning or error)
import Alert from '@mui/material/Alert';

export default function AddCategory() {
    const [alert, setalert] = useState(null);
    const [loading, setloading] = useState(false)
    const handleSubmit = async (event) => {
        event.preventDefault();
        setloading(true);
        const data = new FormData(event.currentTarget);
        const file = data.get('icon');
        if (file.name) {
            try {
                const storageref = storage.ref();
                const fileRef = storageref.child(file.name);
                await fileRef.put(file);
                const icon = await fileRef.getDownloadURL();
                const category = {
                    name: data.get('name'),
                    color: data.get('color'),
                    brief: data.get('brief'),
                    icon: icon,
                };
                await db.collection('category').doc(category.name).set(category);
                setalert({
                    severity: "success",
                    message: category.name + " category was added!"
                })
            } catch (err) {
                setalert({
                    severity: "error",
                    message: err.message
                })
            }
        } else {
            setalert({
                severity: "error",
                message: "no file was found !"
            })
        }
        setloading(false);

    };

    return (

        <Container component="main" maxWidth="xs">


            <CssBaseline />


            <Box sx={{ mt: 10, display: 'flex', flexDirection: 'column', position: 'relative' }}>
                {
                    alert ?
                        <Alert sx={{ position: 'absolute', mt: -8, width: '100%' }} severity={alert.severity}>{alert.message}</Alert>
                        :
                        <></>
                }
                <Typography component="h6" variant="h5">
                    Add new Category
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField required autoComplete="cname" name="name" fullWidth id="name" label="Name" autoFocus />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField required fullWidth id="color" label="color" name="color" autoComplete="ccolor" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth id="brief" label="Brief" name="brief" autoComplete="cbrief" />
                        </Grid>
                        <Grid item xs={12}>
                            <span>Icon </span>
                            <input required id="icon" name="icon" type="file" />
                        </Grid>
                    </Grid>
                    <Button disabled={loading} 
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        add
                    </Button>

                </Box>
            </Box>
        </Container>
    );
}